document.addEventListener('DOMContentLoaded', function () {
    // Agrega un evento de clic a los títulos de sección para resaltarlos
    const sectionTitles = document.querySelectorAll('section h2');
    sectionTitles.forEach(title => {
        title.addEventListener('click', function () {
            this.style.color = 'blue';
        });
    });

    // Ejemplo adicional de funcionalidad: Cambiar el color de fondo al hacer clic en el encabezado
    const header = document.querySelector('header');
    header.addEventListener('click', function () {
        this.style.backgroundColor = 'lightgray';
    });
});
