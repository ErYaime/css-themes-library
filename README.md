# 🔳 css-themes-library

> **Ecosistema de temas CSS modulares y ligeros, diseñados bajo una estética brutalista y técnica. Arquitectura escalable lista para usar.**

[![License: MIT](https://img.shields.io/badge/License-MIT-black.svg)](https://opensource.org/licenses/MIT)
![Version](https://img.shields.io/badge/Version-1.0-blue.svg)
![Status](https://img.shields.io/badge/Status-Active-brightgreen.svg)

Esta librería proporciona estilos **sólidos, directos y eficientes** para aplicaciones web que priorizan claridad estructural y rendimiento.

---

# 💎 Temas disponibles

## 01 · Tema Prisma (v1.0)

Tema insignia de la librería, inspirado en **interfaces técnicas, terminales industriales y diseño brutalista**.

**Características**

- Estética brutalista
- Bordes rectos (`border-radius: 0`)
- Bordes visibles de `2px`
- Header fijo con **glassmorphism**
- Menú lateral adaptable
- Controles `range` con seguimiento dinámico de color
- Arquitectura CSS modular

---

# 🛠 Estructura del repositorio

```text
css-themes-library/
│
├── 01-tema-prisma/
│   ├── variables.css
│   ├── reset.css
│   ├── tipografia.css
│   ├── estructura.css
│   ├── botones.css
│   ├── main.css
│   └── prisma.js
│
├── LICENSE
└── README.md
```

**Descripción de módulos**

| Archivo | Función |
|------|------|
| `variables.css` | Paleta de colores y geometría |
| `reset.css` | Normalización CSS |
| `tipografia.css` | Jerarquía tipográfica |
| `estructura.css` | Layout y navegación |
| `botones.css` | Botones e inputs |
| `main.css` | Punto de entrada que importa los módulos |
| `prisma.js` | Lógica de UX |

---

# 🚀 Instalación rápida (CDN)

No requiere compilación ni dependencias.

Añada esto en el `<head>` de su HTML:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/ErYaime/css-themes-library/01-tema-prisma/main.css">

<script src="https://cdn.jsdelivr.net/gh/ErYaime/css-themes-library/01-tema-prisma/prisma.js" defer></script>
```

---

# 💻 Quick Start

Ejemplo mínimo de implementación:

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    
    <title>Demo - Tema Prisma v1.0</title>
    
    <link rel="stylesheet" href="01-tema-prisma/main.css">
    <script src="01-tema-prisma/prisma.js" defer></script>
</head>
<body>

    <input type="checkbox" id="interruptor-menu" class="ocultar-interruptor">

    <header class="cabecera-principal">
        <div class="logo-titulo">
            <h1>Tema Prisma <span class="etiqueta">V1.0-CLEAN</span></h1>
        </div>
        
        <label for="interruptor-menu" class="boton-hamburguesa">☰</label>
        
        <nav class="barra-navegacion">
            <label for="interruptor-menu" class="boton-cerrar">✕</label>
            <ul>
                <li><a href="#semantica">Semántica</a></li>
                <li><a href="#layouts">Grid & Flexbox</a></li>
                <li><a href="#multimedia">Multimedia</a></li>
                <li><a href="#formularios">Formularios</a></li>
                <li><a href="#faq">FAQ</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <section id="semantica">
            <header>
                <h2>1. Semántica y Tipografía</h2>
            </header>
            
            <article>
                <p>La <dfn>semántica</dfn> es la base de nuestro sistema. El horario es <time datetime="02:00">02:00 AM</time>.</p>
                
                <p>Comandos: <kbd>Ctrl</kbd> + <kbd>C</kbd>. Salida: <samp>Success</samp>. Variable: <var>x</var>.</p>

                <address>
                    <strong>Centro de Operaciones</strong><br>
                    Sector Informático 7<br>
                    <a href="mailto:admin@temaprisma.local">admin@temaprisma.local</a>
                </address>
            </article>
        </section>

        <div class="linea-separadora"></div>

        <section id="layouts">
            <h2>2. Layouts Adaptativos</h2>
            <div class="grid-contenedor">
                <article class="tarjeta efecto-sombra interactivo">
                    <h3>Módulo Alpha</h3>
                    <p>Contenido que se adapta al ancho del contenedor.</p>
                    <footer>
                        <button type="button" class="efecto-sombra interactivo">Inspeccionar</button>
                    </footer>
                </article>

                <article class="tarjeta efecto-sombra interactivo">
                    <h3>Módulo Beta</h3>
                    <p>
			Si esta tarjeta queda sola abajo, ocupará el 100%. <br>
			Puedes probar a modificar el código y añadir mas tarjetas.
		    </p>
                    <footer>
                        <button type="button" class="efecto-sombra interactivo">Desplegar</button>
                    </footer>
                </article>
            </div>
        </section>

        <div class="linea-separadora"></div>

        <section id="multimedia">
            <h2>3. Multimedia Enmarcada</h2>
            <figure class="contenedor-multimedia efecto-sombra">
                <iframe width="100%" height="300" src="https://www.openstreetmap.org/export/embed.html?bbox=-3.71%2C40.41%2C-3.69%2C40.42&amp;layer=mapnik"></iframe>
                <figcaption>Fig 1. Mapa de operaciones con estilos externos.</figcaption>
            </figure>
        </section>

        <div class="linea-separadora"></div>

        <section id="formularios">
            <h2>4. Control de Rango Brutalista</h2>
            <form action="#">
                <fieldset class="efecto-sombra">
                    <legend>Sensores de Intensidad</legend>
                    <label for="f_rango">Calibración:</label>
                    <input type="range" id="f_rango" min="0" max="100" value="75">
                    
                    <label for="f_password">Acceso:</label>
                    <input type="password" id="f_password" placeholder="••••••••" autocomplete="current-password">
                    
                    <button type="submit" class="efecto-sombra interactivo">Ejecutar</button>
                </fieldset>
            </form>
        </section>

        <div class="linea-separadora"></div>

        <section id="faq">
            <h2>5. FAQ</h2>
            <details class="acordeon efecto-sombra interactivo">
                <summary>¿Está el código limpio?</summary>
                <div class="contenido-acordeon">
                    <p>Por supuesto. Cero estilos inline detectados.</p>
                </div>
            </details>
        </section>
    </main>

    <footer>
        <p>&copy; 2026. Desarrollado por ErYaime.</p>
    </footer>

</body>
</html>
```

---

# ❓ FAQ

<details>

<summary><b>¿Por qué no hay bordes redondeados?</b></summary>

El tema Prisma utiliza `border-radius: 0px` para mantener una estética **técnica, directa y estructural**.

Puede cambiarlo modificando la variable:

```
--radio-borde
```

en `variables.css`.

</details>

---

<details>

<summary><b>¿Cómo funciona el cierre automático del menú?</b></summary>

El script `prisma.js` detecta:

- clics en enlaces del menú
- clics fuera del panel

Cuando ocurre, desactiva el interruptor oculto del menú.

Esto mejora la UX en dispositivos móviles.

</details>

---

<details>

<summary><b>¿Puedo usarlo en proyectos comerciales?</b></summary>

Sí. La licencia MIT permite:

- uso comercial
- modificación
- redistribución

</details>

---

# 👨‍💻 Autor

**ErYaime**

---

# ⚖️ Licencia

Este proyecto se distribuye bajo **Licencia MIT**.

Consulte el archivo `LICENSE` para más información.
