const menuItems = [
    {
        title: "Главная",
        link: "WEB_kurs.html"
    },

    {
        title: "О романе",
        link: "WEB_kurs_about_novel.html"
    },

    {
        title: "Об авторе",
        link: "WEB_kurs_about_author.html"
    },

    {
        title: "Герои романа",
        link: "WEB_kurs_heroes.html"
    }
];

function renderMenu (containerId) {
    const container = document.getElementById(containerId);
    menuItems.forEach (item => {
        container.innerHTML += `
            <a href="${item.link}">
                ${item.title}
            </a>
        `;
    })
}

renderMenu("header-menu");
renderMenu("footer-menu");


// фиксация меню при скролле
const header = document.querySelector(".header");
window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    }
    else {
        header.classList.remove("scrolled");
    }
});


// бургер-меню
const burger = document.getElementById("burger");
const menu = document.querySelector(".menu");

burger.addEventListener("click", () => {

    // переключаем класс active для отображения/скрытия
    menu.classList.toggle("active");

    // меняем иконку
    if (menu.classList.contains("active")) {
        burger.textContent = "✕";
    }
    else {
        burger.textContent = "☰";
    }
});