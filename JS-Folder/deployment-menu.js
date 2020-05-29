document.addEventListener("DOMContentLoaded", StartPage);

function StartPage(){
    "use strict";
    document.querySelector("#menu-button").addEventListener("click", () =>{
        document.querySelector("#menu-bar").classList.toggle("hide-bar");
    }
    );
}

/*
document.querySelector("#menu-button").addEventListener("click", ShowNav);

    function ShowNav(){
           document.querySelector("#menu-bar").classList.toggle("hide-bar");
    }*/