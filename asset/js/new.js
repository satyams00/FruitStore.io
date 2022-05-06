const navB = document.querySelector('.ss_navBar');
window.onscroll = function(){
    if(this.scrollY != 0){
        navB.style.position = "fixed";
        navB.style.width = "100%";
        navB.style.background = "black";
    }else{
        navB.style.position = "fixed";
        navB.style.width = "100%";
        navB.style.background = "transparent";
    }
}
