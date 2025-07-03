document.addEventListener('DOMContentLoaded', chargerMenu);

async function chargerMenu() {
  try {
    const header = document.getElementById('header');
    const reponse = await fetch('/html/header.html');

    if (!reponse.ok) {
      throw new Error('Erreur lors du chargement du menu');
    }

    const html = await reponse.text();
    header.innerHTML = html;

  } catch (erreur) {
    console.error('Erreur :', erreur);
  }

 let menuBtn = document.getElementById('menu-btn');
 let menulist = document.getElementById('menu-list');
menuBtn.addEventListener('click', function() {
menulist.classList.toggle('hidden');
menuBtn.classList.toggle('expanded');});


}




