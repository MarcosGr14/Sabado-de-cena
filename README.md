<div align="center">

# 🍽️ Sábado de cena

### Una idea rica para cada sábado, sin complicar la cena.

Recetas para compartir en familia: elige qué cocinar, ajusta las porciones y deja que la rotación decida a quién le toca.

![HTML](https://img.shields.io/badge/HTML-estático-E34F26?logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-responsive-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-sin_build-F7DF1E?logo=javascript&logoColor=111)
![Supabase](https://img.shields.io/badge/datos-Supabase-3FCF8E?logo=supabase&logoColor=white)

</div>

---

## ✨ Qué puedes hacer

- Explorar **40 recetas** con ingredientes, instrucciones y consejos.
- Filtrar por cenas rápidas, recetas de una sartén o ideas para armar al gusto.
- Ajustar las cantidades según el número de personas.
- Guardar favoritas y marcar las cenas que ya prepararon.
- Organizar una rotación familiar para los sábados.
- Cambiar entre tema claro y oscuro.
- Usarla localmente sin cuenta ni configuración de base de datos.

## 🧰 Tecnologías

HTML, CSS y JavaScript sin framework ni paso de compilación. Supabase es opcional y sincroniza las recetas y el estado compartido cuando está configurado.

## 🚀 Empezar

Clona el repositorio y abre `index.html` en un navegador. Para desarrollo local, también puedes servir la carpeta con cualquier servidor estático, por ejemplo **Live Server** en VS Code.

```bash
git clone <URL-del-repositorio>
cd <nombre-del-repositorio>
```

Sin conexión a Supabase, las recetas vienen de `data/recipes.js` y las preferencias se guardan en el navegador (`localStorage`).

## ☁️ Supabase (opcional)

La aplicación usa estas tablas:

| Tabla | Información |
| --- | --- |
| `recetas` | Recetas, ingredientes, pasos e imagen |
| `estado` | Favoritas, cenas hechas y rotación familiar |

1. Revisa el esquema de [`sql/schema.sql`](sql/schema.sql) y aplícalo en el SQL Editor del proyecto Supabase si las tablas aún no existen.
2. Copia la URL del proyecto y la clave **publishable** desde la configuración de API.
3. Configúralas en `js/config.js` (`SBURL` y `SBKEY`). La clave publishable está pensada para el cliente web; **nunca uses una `secret` o `service_role` key en el navegador**.
4. Recarga la aplicación. Las recetas de `data/recipes.js` se insertan si faltan.

Si Supabase no está disponible, la aplicación mantiene el modo local para que puedas seguir usando las recetas.

> **Acceso a datos:** el esquema actual permite leer y escribir mediante la API pública. La información de recetas y el estado se comparte entre visitantes y no debe contener datos personales. Antes de usar el proyecto para más personas o información privada, define autenticación y políticas RLS acordes al acceso que necesitas.

## 🌐 Publicar en GitHub Pages

El repositorio incluye un flujo de GitHub Actions en `.github/workflows/pages.yml`. Al subir cambios a `main`, publica automáticamente el sitio estático.

1. Sube este proyecto a un repositorio de GitHub.
2. En el repositorio, abre **Settings → Pages** y elige **GitHub Actions** como fuente de publicación.
3. Revisa la pestaña **Actions**. Al terminar el flujo, GitHub mostrará la URL del sitio en el entorno `github-pages`.

GitHub Pages sirve el sitio públicamente. La clave publishable de Supabase puede estar en el frontend; no subas claves secretas, archivos `.env` ni otros datos privados.

## 🗂️ Estructura

```text
.
├── index.html                  # Página y carga de scripts
├── css/style.css               # Diseño adaptable y temas
├── js/app.js                   # Recetas, filtros y persistencia
├── js/config.js                # Configuración pública de Supabase
├── data/recipes.js             # Recetas iniciales (SEED)
├── sql/schema.sql              # Esquema inicial de Supabase
└── .github/workflows/pages.yml # Publicación automática en Pages
```

## 🍴 Añadir una receta

Agrega un objeto al arreglo `SEED` en `data/recipes.js`. Cada receta incluye su propio campo `img`, además de `n` (nombre), `i` (ingredientes), `p` (pasos), `k` (consejo) y sus datos de cocina.

---

Hecho para que el sábado empiece con una buena idea. 🧡
