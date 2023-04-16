window.onscroll = function(){miFuncion()};

var aboutMe = document.getElementById("aboutme");

var distancia_aboutme;

function miFuncion(){
    distancia_aboutme = window.innerHeight - aboutMe.getBoundingClientRect().top;
    if (distancia_aboutme >=200){
        aboutMe.classList.add("aboutme-efecto")
    }
}