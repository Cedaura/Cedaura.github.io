const mainImage = document.getElementById('mainImage');
const thumbs = document.querySelectorAll('.thumb');

thumbs.forEach(thumb => {
    thumb.addEventListener('click', () => {
        const newSrc = thumb.getAttribute('data-src');
        if (mainImage.src.includes(newSrc)) return; // déjà affichée

        // Ajoute la classe fade-out
        mainImage.classList.add('fade-out');

        // Après l'animation, change la source et enlève fade-out
        setTimeout(() => {
            mainImage.src = newSrc;
            mainImage.classList.remove('fade-out');
        }, 500); // durée identique au CSS (0.5s)
    });
});
