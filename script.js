// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Animación del Navbar al hacer scroll
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    });

    // Animación de flip para las tarjetas
    document.querySelectorAll('.tarjeta').forEach(tarjeta => {
        tarjeta.addEventListener('mouseenter', () => {
            tarjeta.classList.add('flip');
        });
        tarjeta.addEventListener('mouseleave', () => {
            tarjeta.classList.remove('flip');
        });
    });

    // Animación de desvanecimiento del texto hero
    const heroTexto = document.querySelector('.hero-texto');
    heroTexto.classList.add('fade-in');

    // Animación de deslizamiento para el filtro
    const filtroTarjeta = document.querySelector('#filtro-tarjeta');
    const buscarIcono = document.querySelector('#buscar-icono');

    buscarIcono.addEventListener('click', () => {
        filtroTarjeta.classList.toggle('visible');
    });
});

// seccion de fotos cargadas//
document.getElementById('photo-upload').addEventListener('change', function (event) {
    const files = event.target.files;
    const previewContainer = document.getElementById('image-preview-container');
    previewContainer.innerHTML = ''; // Limpiar contenedor

    Array.from(files).forEach(file => {
        const reader = new FileReader();
        reader.onload = function (e) {
            const imgWrapper = document.createElement('div');
            imgWrapper.classList.add('image-wrapper');

            const imgElement = document.createElement('img');
            imgElement.src = e.target.result;
            imgElement.classList.add('image-preview');

            const removeButton = document.createElement('span');
            removeButton.classList.add('remove-button');
            removeButton.innerHTML = '&times;'; // Carácter de la cruz (×)
            removeButton.onclick = function () {
                imgWrapper.remove(); // Eliminar la imagen al hacer clic en la cruz
            };

            imgWrapper.appendChild(imgElement);
            imgWrapper.appendChild(removeButton);
            previewContainer.appendChild(imgWrapper);
        };
        reader.readAsDataURL(file);
    });
});




