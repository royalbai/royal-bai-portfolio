const menuIcon = document.querySelector(".burgerIcon");
const menuSlideout = document.querySelector("nav");

menuIcon.addEventListener("click", function () {
    menuIcon.classList.toggle("active");
    menuSlideout.classList.toggle("activeNav");
});

const links = document.querySelectorAll("nav a")
// console.log(links);

links.forEach(link => {
    // console.log(link);
    link.addEventListener("click", function () {
        // console.log("Clicked");
        menuSlideout.classList.remove("activeNav");
        menuIcon.classList.remove("active");
    })
})