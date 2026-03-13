/* =========================================
   Tema: 01-tema-prisma
   Archivo: prisma.js
   Descripción: Motor de usabilidad avanzada y UX
   ========================================= */

document.addEventListener('DOMContentLoaded', () => {
    const interruptor = document.getElementById('interruptor-menu');
    const enlacesMenu = document.querySelectorAll('.barra-navegacion a');
    const panelMenu = document.querySelector('.barra-navegacion');
    const botonHamburguesa = document.querySelector('.boton-hamburguesa');

    // --- FUNCIÓN A: GESTIÓN DEL MENÚ ---
    if (interruptor) {
        enlacesMenu.forEach(enlace => {
            enlace.addEventListener('click', () => { interruptor.checked = false; });
        });

        document.addEventListener('click', (evento) => {
            if (interruptor.checked && !panelMenu.contains(evento.target) && 
                !botonHamburguesa.contains(evento.target) && evento.target !== interruptor) {
                interruptor.checked = false;
            }
        });
    }

    // --- FUNCIÓN B: COLOR DINÁMICO EN RANGOS ---
    const ranges = document.querySelectorAll('input[type="range"]');
    
    function handleRangeUpdate(el) {
        // Calcula el porcentaje actual del slider
        const value = (el.value - el.min) / (el.max - el.min) * 100;
        // Inyecta el porcentaje en la variable CSS del elemento
        el.style.setProperty('--value', `${value}%`);
    }

    ranges.forEach(range => {
        handleRangeUpdate(range); // Inicialización al cargar
        range.addEventListener('input', () => handleRangeUpdate(range));
    });
});