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

<title>Proyecto Prisma</title>

<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/ErYaime/css-themes-library/01-tema-prisma/main.css">

<script src="https://cdn.jsdelivr.net/gh/ErYaime/css-themes-library/01-tema-prisma/prisma.js" defer></script>

</head>

<body>

<input type="checkbox" id="interruptor-menu" class="ocultar-interruptor">

<header class="cabecera-principal">

<h1>Tema Prisma <span class="etiqueta">V1.0</span></h1>

<label for="interruptor-menu" class="boton-hamburguesa">☰</label>

<nav class="barra-navegacion">
<ul>
<li><a href="#intro">Inicio</a></li>
<li><a href="#config">Configuración</a></li>
</ul>
</nav>

</header>

<main>

<section class="grid-contenedor">

<article class="tarjeta efecto-sombra interactivo">

<h3>Módulo de Control</h3>

<p>Interfaz brutalista lista para producción.</p>

<input type="range" min="0" max="100" value="75">

<button class="efecto-sombra interactivo">
Ejecutar Comando
</button>

</article>

</section>

</main>

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
