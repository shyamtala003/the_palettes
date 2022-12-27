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


// copy to clipboard


let copyBtn = document.querySelectorAll('.copy_code_btn');
var clipboard = new ClipboardJS(copyBtn);


clipboard.on('success', function (e) {

  let toastDiv = document.getElementsByClassName('toast')[0];
  toastDiv.classList.add("toast_open");
  setTimeout(() => {
    toastDiv.classList.remove("toast_open");
  }, 2000)

});

clipboard.on('error', function (e) {
  console.info('Action:', e.action);
  console.info('Text:', e.text);
  console.info('Trigger:', e.trigger);
});
