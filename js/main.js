let btnMenu = document.querySelector("#menu-mobile")
let menu = document.querySelector("nav ul")
let nav = document.querySelector("nav")
let menuItems = document.querySelectorAll('ul a[href^="#"]');

menuItems.forEach(item => {
    item.addEventListener("click", scrollToIdOnClick);
    item.addEventListener("click", () => menu.classList.toggle("open"))
})

function scrollToIdOnClick(event) {
    event.preventDefault()

    const element = event.target
    const id = element.getAttribute('href')
    const to = document.querySelector(id).offsetTop;

    window.scroll({
        top: to - 20,
        behavior: "smooth"
    })

}


btnMenu.addEventListener("click", function () {
    menu.classList.toggle("open")
})

jQuery(window).on("scroll", function () {
    if (jQuery(window).scrollTop()) {
        jQuery("nav").addClass('black')
        jQuery("nav i").addClass("white")
        jQuery("nav a").addClass("white")
        jQuery("nav ul li a").addClass("white")
    }
    else {
        jQuery("nav").removeClass('black')
        jQuery("nav i").removeClass("white")
        jQuery("nav a").removeClass("white")
        jQuery("nav ul li a").removeClass("white")
    }
})

