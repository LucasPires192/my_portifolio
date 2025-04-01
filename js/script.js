const buttonMenu = document.getElementById('button-menu');
const anoAtual = new Date().getFullYear();

function toggleMenu(){
    const nav = document.getElementById('menu');
    nav.classList.toggle('active');
}

if(buttonMenu){
    buttonMenu.addEventListener('click', toggleMenu);
}

document.getElementById('ano-copiright').textContent = anoAtual;