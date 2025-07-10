document.addEventListener("DOMContentLoaded", chargerFormulaire);

function chargerFormulaire(){
    const formContact = document.getElementById("carte-contact");
    console.log("formContact")
    const formContactLoad = fetch("/composants/formulaire/formulaire.html");
   console.log("formContactLoad")
formContact.innerHTML = formContactLoad;
console.log(formContact.innerHTML);


}


