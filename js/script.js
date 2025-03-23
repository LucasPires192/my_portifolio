const buttonMenu = document.getElementById('button-menu');

function toggleMenu(){
    const nav = document.getElementById('menu');
    nav.classList.toggle('active');
}

if(buttonMenu){
    buttonMenu.addEventListener('click', toggleMenu);
}



