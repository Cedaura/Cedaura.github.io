# Fonctionnement du carrousel

## Structure HTML

- Le carrousel est composé d’une image principale (`mainImage`) et de plusieurs vignettes (`.thumb`).
- Chaque vignette possède un attribut `data-src` qui indique le chemin de l’image à afficher dans la boîte principale lors du clic.

```html
<div class="carousel">
    <img id="mainImage" class="main fade" src="..." alt="main">
    <div class="thumb" data-src="..."><img src="..." alt="..."></div>
    <!-- autres vignettes -->
</div>
```

## CSS

- `.carousel` : définit la taille, la position et le style général du carrousel.
- `.main` : positionne l’image principale au centre et applique des effets visuels.
- `.thumb` : positionne les vignettes autour de l’image principale.
- `.thumb img` : ajuste les images à la taille de leur boîte avec `object-fit: cover`.
- `.fade-out` : applique une transition d’opacité lors du changement d’image.

## JavaScript

- Sélectionne l’image principale et toutes les vignettes.
- Ajoute un écouteur d’événement `click` sur chaque vignette.
- Lors du clic :
  1. Récupère le chemin de la nouvelle image via `data-src`.
  2. Si l’image est déjà affichée, ne fait rien.
  3. Ajoute la classe `fade-out` à l’image principale pour lancer l’animation.
  4. Après 0,5 s (durée de l’animation CSS), change la source de l’image principale et retire la classe `fade-out`.

```javascript
const mainImage = document.getElementById('mainImage');
const thumbs = document.querySelectorAll('.thumb');

thumbs.forEach(thumb => {
    thumb.addEventListener('click', () => {
        const newSrc = thumb.getAttribute('data-src');
        if (mainImage.src.includes(newSrc)) return;
        mainImage.classList.add('fade-out');
        setTimeout(() => {
            mainImage.src = newSrc;
            mainImage.classList.remove('fade-out');
        }, 500);
    });
});
```

## Résumé

- Le carrousel permet de changer l’image principale en cliquant sur une vignette.
- L’effet de transition rend le changement d’image fluide et esthétique.
- Le CSS garantit que les images sont bien ajustées et que le carrousel reste responsive.
