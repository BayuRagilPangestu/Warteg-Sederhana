// Toogle
const navbarNav = document.querySelector('.navbar-nav');

// Ketika nemu di klik
document.querySelector('#menu-bar').onclick = () => {
    navbarNav.classList.toggle('active');
};

// Klik luar slidebar untuk menghilangkan nav
const menu = document.querySelector('#menu-bar');
document.addEventListener('click', function (e) {
    if(!menu.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
})

// Slider Image
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n){
    showSlides(slideIndex += n);
}

function showSlides(n){
    var i;
    var slides = document.getElementsByClassName("slide");
    if (n > slides.length)
    {
        slideIndex = 1;
    }
    if (n < 1)
    {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++)
    {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}

// Reservasi button terkirim
function reservasi() {
    alert("Reservasi Telah Terkirim");
}

// Feedback button terkirim
function feedback() {
    alert("Feedback terkirim!");
}
const form = document.querySelector("form");
const inputs = form.querySelectorAll("input");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  inputs.forEach((input) => {
    input.value = "";
  });
});