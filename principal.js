document.addEventListener('DOMContentLoaded', () => {
    console.log('Dashboard cargado correctamente.');

    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            // Podríamos añadir efectos adicionales aquí
        });
    });
});
