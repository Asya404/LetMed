// STICKY NAVIGATION
const header = document.querySelector(".header");
window.onscroll = () => {
  if (window.pageYOffset > 550) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
};

// SECTION QUESTIONS
const questions = document.querySelectorAll(".question");
questions.forEach((question) => {
  question.addEventListener("click", () => {
    question.classList.toggle("active");
    const answer = question.querySelector(".question__answer");
    $(answer).slideToggle();
  });
});

// MOBILE NAV NAD OVERLAY
const btn = document.querySelector(".nav__btn");
const menu = document.querySelector(".nav-mobile");
const overlay = document.querySelector(".nav__overlay");
const smoothLinks = document.querySelectorAll('a[href^="#"]');

btn.addEventListener("click", () => {
  btn.classList.toggle("open");
  menu.classList.toggle("active");
  overlay.classList.toggle("active");
});

// SMOOTH SCROLL MOBILE
for (let smoothLink of smoothLinks) {
  smoothLink.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(smoothLink.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
    menu.classList.remove("active");
    overlay.classList.remove("active");
    btn.classList.remove("open");
  });
}

// CAROUSEL
$(".slider1").owlCarousel({
  items: 1,
  center: true,
  loop: true,
  nav: false,
  dots: false,
  autoplay: true,
  slideTransition: "linear",
  autoplayTimeout: 4000,
  autoplaySpeed: 4000,
  responsive: {
    480: { items: 1.5 },
    600: { items: 2 },
    850: { items: 3 },
    965: { items: 2.5 },
    1200: { items: 3 },
  },
});

$(".slider2").owlCarousel({
  items: 1,
  center: true,
  loop: true,
  nav: false,
  dots: false,
  autoplay: true,
  slideTransition: "linear",
  autoplayTimeout: 4000,
  autoplaySpeed: 4000,
  rtl: true,
  responsive: {
    480: { items: 1.5 },
    600: { items: 2 },
    850: { items: 3 },
    965: { items: 2.5 },
    1200: { items: 3 },
  },
});
