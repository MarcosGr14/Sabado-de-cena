const SEED = [
  {
    n:"Tacos coreanos de pollo",
    kw:"tacos",
    img:"https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?auto=format&fit=crop&w=900&q=85",
    c:"Corea",
    t:35,
    d:"Fácil",
    g:"a",
    i:[
      [600,"g","pechuga de pollo en tiras"],
      [4,"cda","salsa de soja"],
      [2,"cda","azúcar o miel"],
      [3,"","dientes de ajo"],
      [1,"cda","salsa picante"],
      [12,"","tortillas pequeñas"],
      [200,"g","repollo rallado"],
      [1,"","limón"]
    ],
    p:[
      "Mezcla soja, azúcar, ajo picado y salsa picante. Marina el pollo 10 minutos.",
      "Dora el pollo en sartén caliente hasta que se caramelice.",
      "Mezcla el repollo con jugo de limón y una pizca de sal.",
      "Arma los tacos con pollo, repollo y un chorrito de la salsa de la sartén."
    ],
    k:"Cuanto más se caramelice el pollo, mejor sabe. No muevas las tiras al principio."
  },

  {
    n:"Ramen de súper con huevo",
    kw:"ramen",
    img:"https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=900&q=85",
    c:"Japón",
    t:30,
    d:"Fácil",
    g:"s",
    i:[
      [1.2,"l","caldo de pollo"],
      [4,"paq.","fideos instantáneos (sin sobre)"],
      [4,"","huevos"],
      [3,"cda","salsa de soja"],
      [2,"","dientes de ajo"],
      [2,"","cebollines"],
      [1,"cda","aceite"]
    ],
    p:[
      "Hierve los huevos 7 minutos, pásalos por agua fría y pélalos.",
      "Sofríe el ajo en aceite, añade caldo y soja y hierve 5 minutos.",
      "Cuece los fideos aparte 3 minutos y repártelos en tazones.",
      "Vierte el caldo, añade los huevos partidos y el cebollín picado."
    ],
    k:"Cuece los fideos aparte para que el caldo no se enturbie."
  },

  {
    n:"Pizza en sartén",
    kw:"pizza",
    img:"https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=900&q=85",
    c:"Italia",
    t:40,
    d:"Fácil",
    g:"as",
    i:[
      [400,"g","harina"],
      [300,"g","yogur natural"],
      [2,"cdta","polvo de hornear"],
      [1,"cdta","sal"],
      [200,"g","salsa de tomate"],
      [300,"g","queso mozzarella"],
      [1,"","topping a elección (jamón, maíz, champiñones)"]
    ],
    p:[
      "Mezcla harina, yogur, polvo de hornear y sal hasta formar una masa suave.",
      "Divide en bolas y estira cada una fina, una por persona.",
      "Cocina una cara 2 minutos en sartén tapada a fuego medio.",
      "Voltea, añade salsa, queso y toppings, tapa y cocina 4 minutos más."
    ],
    k:"Cada quien arma su pizza. Tapar la sartén es lo que derrite el queso sin horno."
  },

  {
    n:"Hamburguesas con salsa especial",
    kw:"burger",
    img:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=85",
    c:"EE. UU.",
    t:40,
    d:"Fácil",
    g:"a",
    i:[
      [600,"g","carne molida"],
      [4,"","panes de hamburguesa"],
      [4,"","rebanadas de queso"],
      [4,"cda","mayonesa"],
      [2,"cda","kétchup"],
      [1,"cda","pepinillos picados"],
      [1,"","tomate y lechuga"]
    ],
    p:[
      "Forma 4 bolas de carne, aplástalas y sazona con sal y pimienta.",
      "Mezcla mayonesa, kétchup y pepinillos: esa es la salsa especial.",
      "Cocina 3 minutos por lado y pon el queso al final para que se derrita.",
      "Tuesta el pan y arma con salsa, lechuga y tomate."
    ],
    k:"Aplasta la carne solo una vez, así no pierde jugo."
  },

  {
    n:"Pasta con tres salsas",
    kw:"pasta",
    img:"https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=900&q=85",
    c:"Italia",
    t:40,
    d:"Media",
    g:"a",
    i:[
      [500,"g","pasta"],
      [200,"g","tomate triturado"],
      [4,"","dientes de ajo"],
      [150,"ml","crema para cocinar"],
      [80,"g","queso rallado"],
      [4,"cda","aceite de oliva"],
      [1,"cdta","chile seco"]
    ],
    p:[
      "Cuece la pasta y guarda una taza del agua de cocción.",
      "Salsa roja: sofríe ajo y cocina el tomate 8 minutos.",
      "Salsa blanca: calienta crema con queso hasta que espese.",
      "Salsa picante: dora ajo en aceite con chile. Reparte la pasta en tres y mezcla cada una."
    ],
    k:"Si una salsa queda espesa, aflójala con agua de la pasta."
  },

  {
    n:"Quesadillas de todo",
    kw:"quesadilla",
    img:"https://images.unsplash.com/photo-1618040996337-56904b7850b9?auto=format&fit=crop&w=900&q=85",
    c:"México",
    t:25,
    d:"Muy fácil",
    g:"qas",
    i:[
      [8,"","tortillas grandes"],
      [300,"g","queso que se derrita"],
      [200,"g","jamón o pollo cocido"],
      [1,"","pimiento"],
      [1,"","cebolla"],
      [1,"","salsa para acompañar"]
    ],
    p:[
      "Corta pimiento y cebolla y saltéalos 5 minutos.",
      "Pon queso y relleno en la mitad de la tortilla y dóblala.",
      "Dora 2 minutos por lado a fuego medio.",
      "Corta en triángulos y sirve con salsa."
    ],
    k:"Fuego medio y paciencia: el queso necesita tiempo para derretirse."
  },

  {
    n:"Onigiris de atún",
    kw:"onigiri",
    img:"https://images.unsplash.com/photo-1617196034183-421b4917c92d?auto=format&fit=crop&w=900&q=85",
    c:"Japón",
    t:35,
    d:"Media",
    g:"a",
    i:[
      [400,"g","arroz para sushi o redondo"],
      [2,"latas","atún escurrido"],
      [3,"cda","mayonesa"],
      [1,"cda","salsa de soja"],
      [1,"pizca","sal"],
      [4,"","hojas de alga nori (opcional)"]
    ],
    p:[
      "Cuece el arroz y déjalo entibiar.",
      "Mezcla el atún con mayonesa y soja.",
      "Con las manos húmedas y salpicadas de sal, aplasta arroz, pon atún en el centro y cierra en triángulo.",
      "Envuelve con una tira de nori si tienes."
    ],
    k:"Mójate las manos en agua con sal cada vez para que no se pegue el arroz."
  },

  {
    n:"Bowl estilo bibimbap",
    kw:"bibimbap",
    img:"https://images.unsplash.com/photo-1607301406259-dfb186e15de8?auto=format&fit=crop&w=900&q=85",
    c:"Corea",
    t:45,
    d:"Media",
    g:"a",
    i:[
      [400,"g","arroz cocido"],
      [300,"g","carne molida"],
      [4,"","huevos"],
      [2,"","zanahorias ralladas"],
      [200,"g","espinacas"],
      [1,"","pepino en tiras"],
      [3,"cda","salsa de soja"]
    ],
    p:[
      "Dora la carne con soja y una cucharada de azúcar.",
      "Saltea por separado la zanahoria y la espinaca 2 minutos.",
      "Fríe los huevos con la yema blanda.",
      "Arma cada bowl con arroz, los ingredientes por secciones y el huevo arriba. Mezcla al comer."
    ],
    k:"El truco es mezclarlo todo al final, con salsa picante si te gusta."
  },

  {
    n:"Papas rellenas al horno",
    kw:"bakedpotato",
    img:"https://images.unsplash.com/photo-1623238913973-21e45cced554?auto=format&fit=crop&w=900&q=85",
    c:"Clásico",
    t:60,
    d:"Fácil",
    g:"a",
    i:[
      [4,"","papas grandes"],
      [200,"g","queso rallado"],
      [100,"g","tocino o jamón"],
      [150,"g","yogur o crema agria"],
      [2,"","cebollines"],
      [1,"cda","aceite"]
    ],
    p:[
      "Lava las papas, píncha con un tenedor, úntalas con aceite y sal.",
      "Hornea a 200 °C por 45 minutos, hasta que estén suaves.",
      "Ábrelas y aplasta un poco la pulpa.",
      "Rellena con queso y tocino, gratina 5 minutos y termina con yogur y cebollín."
    ],
    k:"Prepara una barra de toppings y que cada quien rellene la suya."
  },

  {
    n:"Crepas dulces y saladas",
    kw:"crepes",
    img:"https://images.pexels.com/photos/11653564/pexels-photo-11653564.jpeg?auto=compress&cs=tinysrgb&w=900",
    c:"Francia",
    t:35,
    d:"Media",
    g:"as",
    i:[
      [250,"g","harina"],
      [500,"ml","leche"],
      [3,"","huevos"],
      [30,"g","mantequilla derretida"],
      [1,"pizca","sal"],
      [1,"","relleno: jamón, queso, plátano, chocolate"]
    ],
    p:[
      "Licúa harina, leche, huevos, mantequilla y sal. Reposa 10 minutos.",
      "Calienta una sartén con poquita mantequilla.",
      "Vierte un cucharón, gira la sartén y cocina 1 minuto por lado.",
      "Rellena de sal (jamón y queso) o de dulce (plátano y chocolate)."
    ],
    k:"La primera crepa casi siempre sale mal. Es normal, sigue con la segunda."
  },

  {
    n:"Nachos gigantes",
    kw:"nachos",
    img:"https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?auto=format&fit=crop&w=900&q=85",
    c:"México",
    t:25,
    d:"Muy fácil",
    g:"qa",
    i:[
      [300,"g","totopos"],
      [400,"g","frijoles refritos"],
      [250,"g","queso rallado"],
      [2,"","tomates"],
      [1,"","cebolla"],
      [2,"","aguacates"],
      [1,"","limón"]
    ],
    p:[
      "Extiende los totopos en una bandeja y cubre con frijoles y queso.",
      "Gratina en horno a 200 °C por 8 minutos.",
      "Pica tomate, cebolla y limón para el pico de gallo.",
      "Sirve con pico de gallo y aguacate aplastado."
    ],
    k:"Haz dos capas de totopos y queso para que a todos les toque queso."
  },

  {
    n:"Arroz frito estilo asiático",
    kw:"friedrice",
    img:"https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=900&q=85",
    c:"China",
    t:25,
    d:"Fácil",
    g:"qs",
    i:[
      [500,"g","arroz cocido del día anterior"],
      [3,"","huevos"],
      [1,"","zanahoria en cubitos"],
      [100,"g","guisantes"],
      [3,"cda","salsa de soja"],
      [2,"","dientes de ajo"],
      [2,"cda","aceite"]
    ],
    p:[
      "Sofríe ajo y zanahoria 3 minutos en una sartén grande.",
      "Haz a un lado las verduras y revuelve los huevos.",
      "Añade el arroz y los guisantes a fuego alto.",
      "Agrega la soja y mezcla 3 minutos más."
    ],
    k:"El arroz frío queda suelto; recién hecho se apelmaza."
  },

  {
    n:"Wraps de pollo César",
    kw:"wrap",
    img:"https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=900&q=85",
    c:"EE. UU.",
    t:25,
    d:"Fácil",
    g:"qa",
    i:[
      [400,"g","pechuga de pollo"],
      [4,"","tortillas grandes"],
      [1,"","lechuga"],
      [40,"g","queso parmesano"],
      [4,"cda","mayonesa"],
      [1,"","limón"],
      [1,"","diente de ajo"]
    ],
    p:[
      "Sazona el pollo y dóralo 5 minutos por lado. Córtalo en tiras.",
      "Mezcla mayonesa, jugo de limón, ajo rallado y parmesano.",
      "Calienta las tortillas 20 segundos.",
      "Rellena con lechuga, pollo y salsa, y enrolla."
    ],
    k:"Envuelve el wrap en papel aluminio y córtalo por la mitad."
  },

  {
    n:"Sándwich gratinado francés",
    kw:"croquemonsieur",
    img:"https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=900&q=85",
    c:"Francia",
    t:30,
    d:"Media",
    g:"qs",
    i:[
      [8,"","rebanadas de pan"],
      [8,"","lonchas de jamón"],
      [200,"g","queso rallado"],
      [40,"g","mantequilla"],
      [2,"cda","harina"],
      [200,"ml","leche"]
    ],
    p:[
      "Derrite la mitad de la mantequilla, añade la harina y luego la leche batiendo hasta espesar.",
      "Arma sándwiches con jamón y queso.",
      "Dóralos en sartén con el resto de la mantequilla.",
      "Cubre con la salsa y más queso y gratina unos minutos."
    ],
    k:"Bate la salsa sin parar para que no salgan grumos."
  },

  {
    n:"Curry suave de pollo y papa",
    kw:"curry",
    img:"https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=85",
    c:"India",
    t:40,
    d:"Fácil",
    g:"s",
    i:[
      [500,"g","pollo en cubos"],
      [2,"","papas en cubos"],
      [1,"","cebolla"],
      [2,"cda","curry en polvo"],
      [400,"ml","leche de coco o crema"],
      [2,"","dientes de ajo"],
      [300,"g","arroz"]
    ],
    p:[
      "Sofríe cebolla y ajo 5 minutos y añade el curry 1 minuto.",
      "Agrega el pollo y dóralo.",
      "Vierte la leche de coco, suma las papas y cocina tapado 20 minutos.",
      "Sirve sobre arroz cocido."
    ],
    k:"Tostar el curry un minuto en aceite le suelta mucho más sabor."
  },

  {
    n:"Fajitas de pollo",
    kw:"fajitas",
    img:"https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?auto=format&fit=crop&w=900&q=85",
    c:"México",
    t:30,
    d:"Fácil",
    g:"qa",
    i:[
      [500,"g","pechuga en tiras"],
      [2,"","pimientos en tiras"],
      [2,"","cebollas en tiras"],
      [8,"","tortillas"],
      [1,"cdta","comino"],
      [1,"cdta","pimentón"],
      [1,"","limón"]
    ],
    p:[
      "Marina el pollo con comino, pimentón, sal y limón.",
      "Dora el pollo en sartén muy caliente y resérvalo.",
      "Saltea pimientos y cebollas 5 minutos.",
      "Mezcla todo y sirve con tortillas calientes."
    ],
    k:"Cocina en tandas: si amontonas, se cuece al vapor y no se dora."
  },

  {
    n:"Poke bowl de atún",
    kw:"poke",
    img:"https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=85",
    c:"Hawái",
    t:30,
    d:"Fácil",
    g:"qa",
    i:[
      [400,"g","arroz cocido"],
      [2,"latas","atún"],
      [1,"","pepino"],
      [2,"","aguacates"],
      [3,"cda","salsa de soja"],
      [2,"cda","vinagre"],
      [1,"cda","mayonesa"]
    ],
    p:[
      "Escurre el atún y mézclalo con soja y vinagre.",
      "Corta pepino y aguacate.",
      "Reparte el arroz en bowls.",
      "Añade cada ingrediente por secciones y rocía con mayonesa."
    ],
    k:"Mayonesa con un poco de salsa picante da un aderezo tipo restaurante."
  },

  {
    n:"Huevos rancheros",
    kw:"huevosrancheros",
    img:"https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=900&q=85",
    c:"México",
    t:25,
    d:"Fácil",
    g:"qs",
    i:[
      [6,"","huevos"],
      [6,"","tortillas"],
      [4,"","tomates"],
      [1,"","cebolla"],
      [1,"","chile o pimiento"],
      [2,"cda","aceite"]
    ],
    p:[
      "Licúa tomate, cebolla y chile y cocina la salsa 8 minutos.",
      "Calienta las tortillas en sartén.",
      "Fríe los huevos.",
      "Sirve tortilla, huevo y salsa por encima."
    ],
    k:"Añade frijoles al lado para convertirlo en una cena completa."
  },

  {
    n:"Lasaña de sartén",
    kw:"lasagna",
    img:"https://www.themealdb.com/images/media/meals/wtsvxx1511296896.jpg",
    c:"Italia",
    t:40,
    d:"Fácil",
    g:"s",
    i:[
      [6,"","hojas de lasaña rotas"],
      [400,"g","carne molida"],
      [400,"g","salsa de tomate"],
      [250,"g","queso mozzarella"],
      [1,"","cebolla"],
      [2,"","dientes de ajo"]
    ],
    p:[
      "Sofríe cebolla, ajo y carne hasta dorar.",
      "Añade la salsa y medio vaso de agua.",
      "Pon las hojas rotas encima, tapa y cocina 15 minutos.",
      "Cubre con queso, tapa y deja 5 minutos."
    ],
    k:"Las hojas se cuecen con el vapor de la salsa; remueve una vez a la mitad."
  },

  {
    n:"Sopa de tomate con sándwich de queso",
    kw:"tomatosoup",
    img:"https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=900&q=85",
    c:"Clásico",
    t:35,
    d:"Fácil",
    g:"s",
    i:[
      [800,"g","tomates en lata"],
      [1,"","cebolla"],
      [500,"ml","caldo"],
      [100,"ml","crema"],
      [8,"","rebanadas de pan"],
      [8,"","lonchas de queso"]
    ],
    p:[
      "Sofríe la cebolla, añade tomate y caldo y hierve 15 minutos.",
      "Licúa y devuelve a la olla con la crema.",
      "Arma sándwiches de queso y dóralos en sartén.",
      "Sirve la sopa con el sándwich para mojar."
    ],
    k:"Una pizca de azúcar quita la acidez del tomate."
  },

  {
    n:"Brochetas de pollo y verduras",
    kw:"skewers",
    img:"https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=85",
    c:"Parrilla",
    t:40,
    d:"Media",
    g:"a",
    i:[
      [600,"g","pollo en cubos"],
      [2,"","pimientos"],
      [1,"","cebolla"],
      [1,"","calabacín"],
      [3,"cda","aceite"],
      [1,"cdta","orégano"],
      [1,"","limón"]
    ],
    p:[
      "Marina el pollo con aceite, orégano, limón y sal 15 minutos.",
      "Corta las verduras en trozos grandes.",
      "Ensarta pollo y verduras alternados.",
      "Cocina en sartén o plancha 12 minutos, girando."
    ],
    k:"Remoja los palitos de madera 20 minutos para que no se quemen."
  },

  {
    n:"Pollo teriyaki con arroz",
    kw:"teriyaki",
    img:"https://www.themealdb.com/images/media/meals/wvpsxx1468256321.jpg",
    c:"Japón",
    t:35,
    d:"Fácil",
    g:"s",
    i:[
      [600,"g","muslos o pechuga de pollo"],
      [4,"cda","salsa de soja"],
      [3,"cda","azúcar o miel"],
      [1,"cda","vinagre"],
      [2,"","dientes de ajo"],
      [300,"g","arroz"],
      [300,"g","brócoli"]
    ],
    p:[
      "Mezcla soja, azúcar, vinagre y ajo.",
      "Dora el pollo en sartén 5 minutos por lado.",
      "Vierte la salsa y cocina hasta que espese y brille.",
      "Sirve con arroz y brócoli al vapor."
    ],
    k:"Cuando la salsa cubre el dorso de una cuchara, está lista."
  },

  {
    n:"Pad thai sencillo",
    kw:"padthai",
    img:"https://images.unsplash.com/photo-1559314809-0d155014e29e?auto=format&fit=crop&w=900&q=85",
    c:"Tailandia",
    t:35,
    d:"Media",
    g:"s",
    i:[
      [250,"g","fideos de arroz"],
      [300,"g","camarones o pollo"],
      [2,"","huevos"],
      [3,"cda","salsa de soja"],
      [1,"cda","azúcar"],
      [1,"","limón"],
      [50,"g","cacahuates picados"]
    ],
    p:[
      "Remoja los fideos en agua caliente 8 minutos y escúrrelos.",
      "Saltea el camarón o pollo y añade los huevos revueltos.",
      "Suma los fideos, la soja y el azúcar y mezcla 3 minutos.",
      "Sirve con cacahuate y limón."
    ],
    k:"Sírvelo enseguida: los fideos se pegan al enfriarse."
  },

  {
    n:"Shawarma de pollo casero",
    kw:"shawarma",
    img:"https://www.themealdb.com/images/media/meals/kcv6hj1598733479.jpg",
    c:"Medio Oriente",
    t:40,
    d:"Fácil",
    g:"a",
    i:[
      [600,"g","pollo en tiras"],
      [150,"g","yogur natural"],
      [3,"","dientes de ajo"],
      [1,"cdta","comino"],
      [1,"cdta","pimentón"],
      [4,"","panes pita"],
      [1,"","pepino y tomate"]
    ],
    p:[
      "Marina el pollo con la mitad del yogur, ajo, comino y pimentón 20 minutos.",
      "Dóralo en sartén muy caliente.",
      "Mezcla el resto del yogur con ajo y limón para la salsa.",
      "Rellena los panes con pollo, verduras y salsa."
    ],
    k:"Deja el pollo marinar más tiempo si puedes: queda más tierno."
  },

  {
    n:"Pollo frito crujiente",
    kw:"friedchicken",
    img:"https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=900&q=85",
    c:"EE. UU.",
    t:45,
    d:"Media",
    g:"",
    i:[
      [800,"g","muslos de pollo"],
      [150,"g","harina"],
      [2,"","huevos"],
      [100,"g","pan rallado"],
      [1,"cdta","pimentón"],
      [500,"ml","aceite para freír"]
    ],
    p:[
      "Sazona el pollo con sal y pimentón.",
      "Pásalo por harina, huevo y pan rallado.",
      "Fríe en aceite a fuego medio 12 minutos por lado.",
      "Escurre sobre papel absorbente."
    ],
    k:"Aceite a fuego medio: si está muy fuerte, se dora por fuera y queda crudo por dentro."
  },

  {
    n:"Arroz con pollo",
    kw:"chickenrice",
    img:"https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=900&q=85",
    c:"Latinoamérica",
    t:50,
    d:"Fácil",
    g:"s",
    i:[
      [300,"g","arroz"],
      [600,"g","pollo en trozos"],
      [1,"","cebolla"],
      [1,"","pimiento"],
      [600,"ml","caldo"],
      [100,"g","guisantes"],
      [2,"","dientes de ajo"]
    ],
    p:[
      "Dora el pollo en una olla y resérvalo.",
      "Sofríe cebolla, pimiento y ajo.",
      "Añade el arroz, el caldo y el pollo, tapa y cocina 20 minutos.",
      "Agrega los guisantes y deja reposar 5 minutos."
    ],
    k:"No destapes durante la cocción para que el arroz quede suelto."
  },

  {
    n:"Empanadas al horno",
    kw:"empanadas",
    img:"https://images.pexels.com/photos/30771118/pexels-photo-30771118.jpeg?auto=compress&cs=tinysrgb&w=900",
    c:"Latinoamérica",
    t:50,
    d:"Media",
    g:"a",
    i:[
      [12,"","discos de empanada"],
      [300,"g","carne molida"],
      [1,"","cebolla"],
      [2,"","huevos duros"],
      [1,"","huevo para pincelar"],
      [1,"cdta","comino"]
    ],
    p:[
      "Sofríe cebolla y carne con comino y sal, y deja enfriar.",
      "Rellena cada disco con carne y un trozo de huevo duro.",
      "Cierra los bordes presionando con un tenedor.",
      "Pincela con huevo y hornea a 200 °C por 20 minutos."
    ],
    k:"El relleno frío evita que la masa se rompa."
  },

  {
    n:"Hot dogs gourmet",
    kw:"hotdog",
    img:"https://images.unsplash.com/photo-1612392062631-94dd858cba88?auto=format&fit=crop&w=900&q=85",
    c:"EE. UU.",
    t:25,
    d:"Muy fácil",
    g:"qa",
    i:[
      [8,"","salchichas"],
      [8,"","panes de hot dog"],
      [2,"","cebollas"],
      [100,"g","queso rallado"],
      [4,"","tiras de tocino"],
      [1,"","mostaza y kétchup"]
    ],
    p:[
      "Caramelizar las cebollas a fuego bajo 15 minutos.",
      "Dora las salchichas y el tocino.",
      "Tuesta los panes.",
      "Arma con cebolla, queso y salsas."
    ],
    k:"Cada quien decide sus toppings: pon todo en la mesa."
  },

  {
    n:"Tortilla española",
    kw:"omelette",
    img:"https://www.themealdb.com/images/media/meals/quuxsx1511476154.jpg",
    c:"España",
    t:40,
    d:"Media",
    g:"s",
    i:[
      [6,"","huevos"],
      [4,"","papas"],
      [1,"","cebolla"],
      [150,"ml","aceite"],
      [1,"cdta","sal"]
    ],
    p:[
      "Corta las papas en rodajas finas y cocínalas en aceite con la cebolla 15 minutos.",
      "Escúrrelas y mézclalas con los huevos batidos.",
      "Cuaja en sartén 4 minutos por lado.",
      "Ayúdate con un plato para voltearla."
    ],
    k:"Que quede jugosa por dentro: no la cocines de más."
  },

  {
    n:"Ensalada griega con pollo",
    kw:"greeksalad",
    img:"https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=900&q=85",
    c:"Grecia",
    t:25,
    d:"Muy fácil",
    g:"qa",
    i:[
      [400,"g","pechuga de pollo"],
      [2,"","pepinos"],
      [3,"","tomates"],
      [150,"g","queso feta"],
      [1,"","cebolla morada"],
      [3,"cda","aceite de oliva"],
      [1,"cdta","orégano"]
    ],
    p:[
      "Dora el pollo con sal y orégano y córtalo en tiras.",
      "Corta pepino, tomate y cebolla en trozos.",
      "Mezcla con aceite y sal.",
      "Añade el pollo y el queso en cubos."
    ],
    k:"Aliña justo antes de comer para que no suelte agua."
  },

  {
    n:"Pescado empanizado con papas",
    kw:"fishandchips",
    img:"https://images.unsplash.com/photo-1580217593608-61931cefc821?auto=format&fit=crop&w=900&q=85",
    c:"Reino Unido",
    t:45,
    d:"Media",
    g:"",
    i:[
      [600,"g","filetes de pescado blanco"],
      [150,"g","harina"],
      [2,"","huevos"],
      [100,"g","pan rallado"],
      [4,"","papas"],
      [1,"","limón"]
    ],
    p:[
      "Corta las papas en bastones y hornéalas a 220 °C por 30 minutos.",
      "Pasa el pescado por harina, huevo y pan rallado.",
      "Fríelo 3 minutos por lado.",
      "Sirve con papas y limón."
    ],
    k:"Seca bien el pescado antes de empanizarlo para que el empanizado se pegue."
  },

  {
    n:"Chili con carne",
    kw:"chili",
    img:"https://images.unsplash.com/photo-1576107232684-1279f390859f?auto=format&fit=crop&w=900&q=85",
    c:"Tex-Mex",
    t:45,
    d:"Fácil",
    g:"s",
    i:[
      [500,"g","carne molida"],
      [400,"g","frijoles rojos"],
      [400,"g","tomate triturado"],
      [1,"","cebolla"],
      [1,"cdta","comino"],
      [1,"cdta","chile en polvo"],
      [300,"g","arroz"]
    ],
    p:[
      "Sofríe cebolla y carne hasta dorar.",
      "Añade comino y chile y cocina 1 minuto.",
      "Agrega tomate y frijoles y cocina tapado 25 minutos.",
      "Sirve sobre arroz."
    ],
    k:"Mejora al día siguiente: hazlo con tiempo si puedes."
  },

  {
    n:"Mac and cheese cremoso",
    kw:"macandcheese",
    img:"https://images.unsplash.com/photo-1543339494-b4cd4f7ba686?auto=format&fit=crop&w=900&q=85",
    c:"EE. UU.",
    t:30,
    d:"Fácil",
    g:"qs",
    i:[
      [400,"g","macarrones"],
      [500,"ml","leche"],
      [40,"g","mantequilla"],
      [40,"g","harina"],
      [250,"g","queso cheddar rallado"]
    ],
    p:[
      "Cuece los macarrones y escúrrelos.",
      "Derrite la mantequilla, añade la harina y luego la leche batiendo.",
      "Cuando espese, agrega el queso hasta que se derrita.",
      "Mezcla con la pasta."
    ],
    k:"Añade el queso fuera del fuego para que no se corte."
  },

  {
    n:"Tacos de pescado",
    kw:"fishtacos",
    img:"https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?auto=format&fit=crop&w=900&q=85",
    c:"México",
    t:35,
    d:"Media",
    g:"a",
    i:[
      [500,"g","filetes de pescado"],
      [8,"","tortillas"],
      [200,"g","repollo"],
      [100,"g","yogur natural"],
      [2,"","limones"],
      [60,"g","harina"],
      [1,"cdta","comino"]
    ],
    p:[
      "Sazona el pescado con comino y sal y pásalo por harina.",
      "Dóralo en sartén 3 minutos por lado.",
      "Mezcla yogur con limón para la salsa.",
      "Arma con repollo, pescado y salsa."
    ],
    k:"Tortillas calientes hacen la diferencia."
  },

  {
    n:"Tonkatsu con arroz",
    kw:"tonkatsu",
    img:"https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?auto=format&fit=crop&w=900&q=85",
    c:"Japón",
    t:40,
    d:"Media",
    g:"",
    i:[
      [4,"","chuletas de cerdo"],
      [100,"g","pan rallado"],
      [2,"","huevos"],
      [50,"g","harina"],
      [300,"g","arroz"],
      [2,"cda","salsa de soja"],
      [200,"g","repollo"]
    ],
    p:[
      "Aplana las chuletas y sazónalas.",
      "Pásalas por harina, huevo y pan rallado.",
      "Fríelas 4 minutos por lado.",
      "Sirve con arroz, repollo fino y soja."
    ],
    k:"Córtala en tiras antes de servir para que sea más fácil de comer."
  },

  {
    n:"Shakshuka",
    kw:"shakshuka",
    img:"https://images.unsplash.com/photo-1590412200988-a436970781fa?auto=format&fit=crop&w=900&q=85",
    c:"Medio Oriente",
    t:30,
    d:"Fácil",
    g:"qs",
    i:[
      [6,"","huevos"],
      [500,"g","tomate triturado"],
      [1,"","pimiento"],
      [1,"","cebolla"],
      [2,"","dientes de ajo"],
      [1,"cdta","comino"],
      [1,"","pan para mojar"]
    ],
    p:[
      "Sofríe cebolla, pimiento y ajo.",
      "Añade tomate y comino y cocina 10 minutos.",
      "Haz huecos y casca los huevos dentro.",
      "Tapa y cocina 6 minutos. Sirve con pan."
    ],
    k:"Retira del fuego cuando las claras cuajen y la yema siga blanda."
  },

  {
    n:"Pasta carbonara",
    kw:"carbonara",
    img:"https://images.unsplash.com/photo-1612874742237-6526221588e3?auto=format&fit=crop&w=900&q=85",
    c:"Italia",
    t:25,
    d:"Media",
    g:"q",
    i:[
      [400,"g","espagueti"],
      [3,"","huevos"],
      [80,"g","queso parmesano"],
      [150,"g","tocino o panceta"],
      [1,"cdta","pimienta"]
    ],
    p:[
      "Cuece la pasta y guarda una taza del agua.",
      "Dora el tocino sin aceite.",
      "Bate huevos con queso y pimienta.",
      "Mezcla la pasta caliente con el tocino y luego con los huevos fuera del fuego, ayudándote con agua de la pasta."
    ],
    k:"Fuera del fuego: si no, los huevos se cuajan."
  },

  {
    n:"Burritos de carne",
    kw:"burrito",
    img:"https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=900&q=85",
    c:"México",
    t:35,
    d:"Fácil",
    g:"a",
    i:[
      [4,"","tortillas grandes"],
      [400,"g","carne molida"],
      [300,"g","arroz cocido"],
      [200,"g","frijoles"],
      [150,"g","queso"],
      [1,"","salsa"]
    ],
    p:[
      "Dora la carne con sal y comino.",
      "Calienta las tortillas.",
      "Rellena con arroz, frijoles, carne y queso.",
      "Dobla los lados y enrolla; dora en sartén 1 minuto."
    ],
    k:"Doblar los lados primero evita que se salga el relleno."
  },

  {
    n:"Arepas rellenas",
    kw:"arepa",
    img:"https://images.pexels.com/photos/29465175/pexels-photo-29465175.jpeg?auto=compress&cs=tinysrgb&w=900",
    c:"Colombia y Venezuela",
    t:40,
    d:"Media",
    g:"a",
    i:[
      [300,"g","harina de maíz precocida"],
      [450,"ml","agua tibia"],
      [1,"cdta","sal"],
      [200,"g","queso"],
      [300,"g","pollo desmenuzado"],
      [2,"","aguacates"]
    ],
    p:[
      "Mezcla harina, agua y sal y deja reposar 5 minutos.",
      "Forma bolas y aplástalas en discos.",
      "Dóralas 5 minutos por lado.",
      "Ábrelas y rellénalas con pollo, queso y aguacate."
    ],
    k:"Suenan huecas al golpearlas cuando están listas."
  },

  {
    n:"Pancakes para cenar",
    kw:"pancakes",
    img:"https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=900&q=85",
    c:"Clásico",
    t:30,
    d:"Muy fácil",
    g:"qa",
    i:[
      [250,"g","harina"],
      [300,"ml","leche"],
      [2,"","huevos"],
      [2,"cdta","polvo de hornear"],
      [2,"cda","azúcar"],
      [30,"g","mantequilla"]
    ],
    p:[
      "Mezcla los ingredientes secos y luego los líquidos.",
      "Deja reposar 5 minutos.",
      "Cocina cucharones en sartén con mantequilla hasta ver burbujas.",
      "Voltea y sirve con fruta, miel o chocolate."
    ],
    k:"No mezcles de más: unos grumos pequeños son normales."
  }
];
