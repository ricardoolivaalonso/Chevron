let links = document.querySelectorAll("a")
let nothing = (e) => { e.preventDefault(); }
window.addEventListener("click", nothing);

ScrollReveal().reveal('.reveal', {
    reset: true,
    mobile: true,
    delay: 150,
    duration: 450,
    opacity: .9,
    viewFactor: 0.1,
    origin: 'bottom',
    distance: '10px',
    easing: 'ease-in-out'
});
