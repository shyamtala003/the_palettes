// code for dark/white mode toggler

let themeToggler = document.querySelectorAll('.theme_toggler');
themeToggler.forEach(element => {
  element.addEventListener('click', () => {
    toggleTheme(element);
  })
});

let toggleTheme = (element) => {

  let menuTogglerBtn = document.getElementById('menu_toggler');

  if (element.dataset.theme == "dark") {
    element.dataset.theme = "light";
    document.body.classList.add("light_theme");
    element.firstElementChild.setAttribute("src", "./icons/moon.webp");

    menuTogglerBtn.firstChild.setAttribute('src', "./icons/close_dark.webp");
  } else {
    element.dataset.theme = "dark";
    document.body.classList.remove("light_theme");
    element.firstElementChild.setAttribute("src", "./icons/sun.webp");

    menuTogglerBtn.firstChild.setAttribute('src', "./icons/close-light.webp");
  }
}


// code for responsive menu open close 

let menuBtn = document.getElementById('menu_toggler');

menuBtn.onclick = () => {
  let btnIcon = menuBtn.firstElementChild;
  let resonsiveMenu = document.querySelector(".responsive_menu");
  if (document.body.classList.contains("light_theme")) {
    if (btnIcon.getAttribute("src") === "./icons/menu_light.webp" || btnIcon.getAttribute("src") === "./icons/menu_dark.webp") {
      setTimeout(() => {
        btnIcon.src = `./icons/close_dark.webp`;
      }, 400);
      resonsiveMenu.classList.add("open_navbar");
    } else {
      setTimeout(() => {
        btnIcon.setAttribute("src", "./icons/menu_dark.webp");
      }, 400);
      resonsiveMenu.classList.remove("open_navbar");
    }
  } else {
    if (btnIcon.getAttribute("src") === "./icons/menu_light.webp" || btnIcon.getAttribute("src") === "./icons/menu_dark.webp") {
      setTimeout(() => {
        btnIcon.src = `./icons/close-light.webp`;
      }, 400);
      resonsiveMenu.classList.add("open_navbar");
    } else {
      setTimeout(() => {
        btnIcon.setAttribute("src", "./icons/menu_light.webp");
      }, 400);
      resonsiveMenu.classList.remove("open_navbar");
    }
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