const mobileMedia = window.matchMedia("(max-width: 425px)");
const tabletMedia = window.matchMedia("(min-width: 426px) and (max-width: 768px)");

function ajustarContenido() {
    const contenido1 = document.getElementById("item-1");
    const contenido2 = document.getElementById("item-2");
    const contenido3 = document.getElementById("item-3");
    const contenido4 = document.getElementById("item-4");
    const contenido5 = document.getElementById("item-5");
    const contenido6 = document.getElementById("item-6");
    const contenido7 = document.getElementById("item-7");
    const contenido8 = document.getElementById("item-8");

    if (tabletMedia.matches)
    {
        contenido1.textContent = "4 columnas";
        contenido2.textContent = "4 columnas";
        contenido3.textContent = "4 columnas";
        contenido4.textContent = "12 columnas";
        contenido5.textContent = "12 columnas";
        contenido6.textContent = "2 columnas";
        contenido7.textContent = "7 columnas";
        contenido8.textContent = "3 columnas";
    }
    else if (mobileMedia.matches) 
        {
            contenido1.textContent = "12 columnas";
            contenido2.textContent = "12 columnas";
            contenido3.textContent = "12 columnas";
            contenido4.textContent = "12 columnas";
            contenido5.textContent = "12 columnas";
            contenido6.textContent = "12 columnas";
            contenido7.textContent = "12 columnas";
            contenido8.textContent = "12 columnas";
        }
    else{
        contenido1.textContent = "3 columnas";
        contenido2.textContent = "3 columnas";
        contenido3.textContent = "6 columnas";
        contenido4.textContent = "6 columnas";
        contenido5.textContent = "6 columnas";
        contenido6.textContent = "8 columna";
        contenido7.textContent = "4 columnas";
        contenido8.textContent = "12 columnas";
    }
}

ajustarContenido();

tabletMedia.addEventListener('change', ajustarContenido);
mobileMedia.addEventListener('change', ajustarContenido);