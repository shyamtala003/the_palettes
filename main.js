let menuBtn = document.getElementById('menu_toggler');

menuBtn.onclick=()=>{
    let btnIcon = menuBtn.firstElementChild;
    let resonsiveMenu=document.querySelector(".responsive_menu");
    if(btnIcon.getAttribute("src")==="./icons/menu_light.webp")
    {
        setTimeout(() => {
            btnIcon.src=`./icons/close-light.webp`;
        }, 400);
        resonsiveMenu.classList.add("open_navbar");
    }else
    {
        setTimeout(() => {
            btnIcon.setAttribute("src","./icons/menu_light.webp");
        }, 400);
        resonsiveMenu.classList.remove("open_navbar");
    }
}