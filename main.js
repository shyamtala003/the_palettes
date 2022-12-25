let menuBtn = document.getElementById('menu_toggler');

menuBtn.onclick=()=>{
    let btnIcon = menuBtn.firstElementChild;
    let resonsiveMenu=document.querySelector(".responsive_menu");

    if(btnIcon.classList.contains("ri-menu-3-line"))
    {
        btnIcon.classList.remove("ri-menu-3-line");
        btnIcon.classList.add("ri-close-line");
        resonsiveMenu.classList.add("open_navbar");
    }else
    {
        btnIcon.classList.remove("ri-close-line");
        btnIcon.classList.add("ri-menu-3-line");
        resonsiveMenu.classList.remove("open_navbar");
    }
}