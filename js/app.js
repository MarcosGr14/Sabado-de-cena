const G=["Papá","Mamá","Los hermanos"];
let R=SEED;
const $=id=>document.getElementById(id);
let S={start:null,si:0,done:[],fav:[]},F="todas",P=4;
try{Object.assign(S,JSON.parse(localStorage.getItem("sdc")||"{}"))}catch(e){}
let db=null;try{if(SBURL&&SBKEY&&window.supabase)db=supabase.createClient(SBURL,SBKEY)}catch(e){}
const save=()=>{try{localStorage.setItem("sdc",JSON.stringify(S))}catch(e){}
if(db)db.from("estado").upsert([{clave:"fav",valor:S.fav},{clave:"done",valor:S.done},{clave:"rota",valor:{start:S.start,si:S.si}}]).then(()=>{})};
const toRow=r=>({nombre:r.n,emoji:r.e,cocina:r.c,minutos:r.t,dificultad:r.d,tags:r.g,ingredientes:r.i,pasos:r.p,consejo:r.k,imagen:r.img||null});
const fromRow=x=>({n:x.nombre,e:x.emoji,c:x.cocina,t:x.minutos,d:x.dificultad,g:x.tags||"",i:x.ingredientes,p:x.pasos,k:x.consejo,img:x.imagen});
const im=r=>r.img?"<img src='"+encodeURI(r.img).replace(/'/g,"%27")+"' alt='' loading='lazy' referrerpolicy='no-referrer' onerror=\"this.remove()\">":"";
async function load(){
if(!db){document.querySelector(".sub").textContent+=" (Modo local: falta conectar Supabase)";return}
try{let q=await db.from("recetas").select("*").order("id");
if(q.error)throw q.error;
{const have=new Set(q.data.map(x=>x.nombre)),miss=SEED.filter(r=>!have.has(r.n));if(miss.length){const ins=await db.from("recetas").insert(miss.map(toRow));if(ins.error)throw ins.error;q=await db.from("recetas").select("*").order("id");if(q.error)throw q.error}
for(const r of SEED.filter(x=>["Arepas rellenas","Empanadas al horno","Crepas dulces y saladas"].includes(x.n))){const current=q.data.find(x=>x.nombre===r.n);if(current&&current.imagen!==r.img)await db.from("recetas").update({imagen:r.img}).eq("nombre",r.n)}
q=await db.from("recetas").select("*").order("id");if(q.error)throw q.error}
if(q.data&&q.data.length)R=q.data.map(x=>{const r=fromRow(x),z=SEED.find(y=>y.n===r.n);if(z&&["Arepas rellenas","Empanadas al horno","Crepas dulces y saladas"].includes(r.n))r.img=z.img;else if(!r.img&&z)r.img=z.img;return r});
const e=await db.from("estado").select("*");if(e.error)throw e.error;
(e.data||[]).forEach(x=>{if(x.clave==="fav")S.fav=x.valor;if(x.clave==="done")S.done=x.valor;if(x.clave==="rota"){S.start=x.valor.start;S.si=x.valor.si}})}catch(x){document.querySelector(".sub").textContent+=" (Supabase no disponible: modo local)"}}
function sat(k){const d=new Date();d.setHours(12,0,0,0);d.setDate(d.getDate()+((6-d.getDay()+7)%7)+7*k);return d}
const iso=d=>d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0");
const fd=d=>d.toLocaleDateString("es",{day:"numeric",month:"short"});
function who(k){if(!S.start)return null;const w=Math.round((sat(k)-new Date(S.start+"T12:00:00"))/6048e5);return ((S.si+w)%3+3)%3}
function head(){const w=who(0);$("top").textContent=w===null?"Elige a quién le toca este sábado":"Sábado "+fd(sat(0))+" · cocinan: "+G[w];
$("who").innerHTML="";G.forEach((g,i)=>{const b=document.createElement("button");b.className="b"+(w===i?" on":"");b.textContent=g;b.onclick=()=>{S.start=iso(sat(0));S.si=i;save();head()};$("who").appendChild(b)});
$("next").textContent=w===null?"":[1,2,3].map(k=>fd(sat(k))+": "+G[who(k)]).join("  ·  ")}
const FL=[["todas","Todas"],["q","Rápidas (30 min o menos)"],["a","Arma la tuya"],["s","Una sola sartén"],["fav","Favoritas"]];
function bar(){$("bar").innerHTML="";FL.forEach(([k,l])=>{const b=document.createElement("button");b.className="b"+(F===k?" on":"");b.textContent=l;b.onclick=()=>{F=k;bar();grid()};$("bar").appendChild(b)});
const s=document.createElement("button");s.className="b go";s.textContent="Sorpréndeme";s.onclick=()=>{const l=flt(),n=l.filter(r=>!S.done.includes(r.n));const p=n.length?n:l;if(p.length)open(p[Math.floor(Math.random()*p.length)])};$("bar").appendChild(s)}
const flt=()=>R.filter(r=>F==="todas"||(F==="fav"?S.fav.includes(r.n):r.g.includes(F)));
function grid(){const g=$("grid");g.innerHTML="";const l=flt();if(!l.length)g.innerHTML="<p class='sub'>Aún no hay recetas aquí.</p>";
l.forEach(r=>{const b=document.createElement("button");b.className="card";b.innerHTML="<div class='im'>"+im(r)+"<span class='mk'>"+(S.fav.includes(r.n)?"★":"")+(S.done.includes(r.n)?" ✓":"")+"</span></div><h2></h2><p></p>";
b.querySelector("h2").textContent=r.n;b.querySelector("p").textContent=r.c+" · "+r.t+" min · "+r.d;b.onclick=()=>open(r);g.appendChild(b)})}
const FR={.25:"¼",.5:"½",.75:"¾"};
function q(n){if(n>=20)n=Math.round(n/5)*5;else n=Math.round(n*4)/4;const w=Math.floor(n),f=n-w;return (w?w:"")+(FR[f]||"")||"0"}
function open(r){P=4;$("home").hidden=true;$("sheet").hidden=false;window.scrollTo(0,0);sheet(r)}
function sheet(r){const s=$("sheet"),k=P/4,fav=S.fav.includes(r.n),dn=S.done.includes(r.n);
const li=r.i.map(([n,u,t])=>"<li>"+(n>1||u?q(n*k)+(u?" "+u:""):(k===1?"":q(n*k)))+" "+t+"</li>").join("");
s.innerHTML="<button class='b back'>← Todas las cenas</button><article class='sheet'><p class='kick'>Sábado de cena · "+r.c+"</p><div class='head'><div class='side'><span class='lb'>Porciones</span><div class='stp'><button aria-label='Menos'>−</button><span>"+P+"</span><button aria-label='Más'>+</button></div></div><h2></h2><div class='side'><span class='lb'>Tiempo</span><span>"+r.t+" MIN</span></div></div><div class='hero'>"+im(r)+"</div><div class='cols'><div><h3>Ingredientes:</h3><ul>"+li+"</ul></div><div><h3>Instrucciones:</h3><ol>"+r.p.map(x=>"<li>"+x+"</li>").join("")+"</ol><div class='tip'><h3>Consejos:</h3><p></p></div></div></div><div class='acts'><button class='b' id='cl'>Copiar lista de compras</button><button class='b' id='fv'>"+(fav?"★ Favorita":"☆ Marcar favorita")+"</button><button class='b' id='dn'>"+(dn?"✓ Ya la hicimos":"Marcar como hecha")+"</button></div></article>";
s.querySelector("h2").textContent=r.n;s.querySelector(".tip p").textContent=r.k+" Dificultad: "+r.d+".";
s.querySelector(".back").onclick=()=>{$("sheet").hidden=true;$("home").hidden=false;bar();grid()};
const st=s.querySelectorAll(".stp button");st[0].onclick=()=>{P=Math.max(1,P-1);sheet(r)};st[1].onclick=()=>{P=Math.min(20,P+1);sheet(r)};
$("fv").onclick=()=>{S.fav=fav?S.fav.filter(x=>x!==r.n):[...S.fav,r.n];save();sheet(r)};
$("dn").onclick=()=>{S.done=dn?S.done.filter(x=>x!==r.n):[...S.done,r.n];save();sheet(r)};
$("cl").onclick=e=>{const t=r.n+" ("+P+" personas)\n"+r.i.map(([n,u,x])=>"- "+(n>1||u?q(n*k)+(u?" "+u:"")+" ":"")+x).join("\n");const d=()=>{e.target.textContent="¡Copiada!"};
try{navigator.clipboard.writeText(t).then(d,d)}catch(x){d()}}}
function setTh(t){document.documentElement.dataset.theme=t;$("tg").textContent=t==="dark"?"☀️ Claro":"🌙 Oscuro";try{localStorage.setItem("th",t)}catch(e){}}
let t0="light";try{t0=localStorage.getItem("th")||"light"}catch(e){}
setTh(t0);$("tg").onclick=()=>setTh(document.documentElement.dataset.theme==="dark"?"light":"dark");
head();bar();grid();load().then(()=>{head();bar();grid()});
