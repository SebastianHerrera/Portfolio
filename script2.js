window.onscroll = function(){miFuncion2()};

var python = document.getElementById("python");
var html = document.getElementById("html");
var css = document.getElementById("css");
var javascript = document.getElementById("javascript");
var java = document.getElementById("java");
var angular = document.getElementById("angular");
var react = document.getElementById("react");
var sql = document.getElementById("sql");

var distancia_python;

function miFuncion2(){
    distancia_python = window.innerHeight - python.getBoundingClientRect().top;
    if (distancia_python >=200){
        python.classList.add("python-efecto")
    }
    distancia_html = window.innerHeight - html.getBoundingClientRect().top;
    if (distancia_html >=200){
        html.classList.add("html-efecto")
    }
    distancia_css = window.innerHeight - css.getBoundingClientRect().top;
    if (distancia_css >=200){
        css.classList.add("css-efecto")
    }
    distancia_javascript = window.innerHeight - javascript.getBoundingClientRect().top;
    if (distancia_javascript >=200){
        javascript.classList.add("javascript-efecto")
    }
    distancia_angular = window.innerHeight - angular.getBoundingClientRect().top;
    if (distancia_angular >=200){
        angular.classList.add("angular-efecto")
    }
    distancia_react = window.innerHeight - react.getBoundingClientRect().top;
    if (distancia_react >=200){
        react.classList.add("react-efecto")
    }
    distancia_sql = window.innerHeight - sql.getBoundingClientRect().top;
    if (distancia_sql >=200){
        sql.classList.add("sql-efecto")
    }
    distancia_java = window.innerHeight - java.getBoundingClientRect().top;
    if (distancia_java >=200){
        java.classList.add("java-efecto")
    }
    
}