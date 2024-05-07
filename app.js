
function burgermenu() {
    const menu = document.querySelector(".navbar-links");
    const burger = document.querySelector(".burger");

    burger.addEventListener("click", () => {
        menu.classList.toggle("active");
        burger.classList.toggle("toggle");
    });
}

burgermenu();
