/*------------------BUTTON-MENU----------------------------------*/

document.querySelector("#menu-button").addEventListener("click", ShowNav);

 function ShowNav(){
        document.querySelector("#menu-bar").classList.toggle("hide-bar");
 }