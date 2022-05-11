const menuIcon = document.querySelector(".burgerIcon");
const menuSlideout = document.querySelector("nav");
const links = document.querySelectorAll("nav a");
const card = document.querySelectorAll(".innerCard");

    menuIcon.addEventListener("click", function () {
        menuIcon.classList.toggle("active");
        menuSlideout.classList.toggle("activeNav");
    });

    links.forEach(link => {
        link.addEventListener("click", function () {
            menuSlideout.classList.remove("activeNav");
            menuIcon.classList.remove("active");
        })
    })

    card.forEach(item => {
        item.addEventListener("click", (e) => {
            const cc = e.target.parentElement;
            cc.classList.toggle("flip");
        })
    })