document.addEventListener("DOMContentLoaded", function () {
    let bg = document.body;

    window.addEventListener("scroll", function () {
        let scrollTop = window.scrollY;
        bg.style.backgroundPosition = `center ${scrollTop * 0.5}px`;
    });
});
