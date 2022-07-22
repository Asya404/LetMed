import { langObj } from '../js/translate.js';


const select = document.querySelectorAll('.select');
const selectEn = document.querySelector('.select__lang--en');
const selectPl = document.querySelector('.select__lang--pl');


// SELECT ARROW AND FRAME
select.forEach(el => {
    el.addEventListener('click', () => {
        el.classList.toggle('login-frame');
        el.lastElementChild.classList.toggle('select-active');
        el.firstElementChild.lastElementChild.classList.toggle('arrow-active')
    })
})

const mainBtn = document.querySelector('.main-btn');
mainBtn.classList.remove('active-btn');
window.onscroll = () => {
    mainBtn.classList.remove('active-btn');
    if (window.pageYOffset > 0) {
        // mainBtn.style.position = "fixed";
      mainBtn.classList.add('active-btn');
    }
}


// Load index only if it's open
selectEn.addEventListener('click', function () {
    if (this.parentElement.classList.contains('login-frame')) {
        selectEn.href="index.html";
    }
});

selectPl.addEventListener('click', function () {
    getTranslate('pl')
});


function getTranslate(lang) {
    document.querySelectorAll('[data-lang]').forEach(el => {
        if (el.dataset.lang) {
            el.textContent = langObj[lang][el.dataset.lang]
        }
        if (el.placeholder) {
            el.placeholder = langObj[lang][el.dataset.lang];
            el.textContent = ''
        }

        // if (lang == 'pl') {
        //     document.querySelector('.hero__heading').style.maxWidth = '850px';
        //     document.querySelector('.hero__text').style.maxWidth = '630px';
        // } else if (lang == 'en') {
        //     document.querySelector('.hero__heading').style.maxWidth = '666px';
        //     document.querySelector('.hero__text').style.maxWidth = '482px';
        // }
    })
}




// SECTION QUESTIONS
const questions = document.querySelectorAll('.question');

questions.forEach(question => {
    question.addEventListener('click', (e) => {
        if (!question.classList.contains('faq-active')) {
            questions.forEach(el => el.classList.remove('faq-active'));
        }
        question.classList.toggle('faq-active');
    });
});




// MOBILE NAV NAD OVERLAY
const btn = document.querySelector('.nav__btn');
const menu = document.querySelector('.nav-mobile');
const overlay = document.querySelector('.nav__overlay');
const smoothLinks = document.querySelectorAll('a[href^="#"]');

btn.addEventListener('click', () => {
    btn.classList.toggle('open');
    menu.classList.toggle('active');
    overlay.classList.toggle('active-overlay');
})


// SMOOTH SCROLL MOBILE
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(smoothLink.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        menu.classList.remove('active');
        overlay.classList.remove('active-overlay');
        btn.classList.remove('open');
    });
};





// // CAROUSEL
$('.slider1').owlCarousel({
    items: 1,
    center: true,
    loop: true,
    nav: false,
    dots: false,
    autoplay: true,
    slideTransition: 'linear',
    autoplayTimeout: 4000,
    autoplaySpeed: 4000,
    responsive: {
        480: { items: 1.5 },
        600: { items: 2 },
        850: { items: 3 },
        965: { items: 2.5 },
        1200: { items: 3 }
    }
});

$('.slider2').owlCarousel({
    items: 1,
    center: true,
    loop: true,
    nav: false,
    dots: false,
    autoplay: true,
    slideTransition: 'linear',
    autoplayTimeout: 4000,
    autoplaySpeed: 4000,
    rtl: true,
    responsive: {
        480: { items: 1.5 },
        600: { items: 2 },
        850: { items: 3 },
        965: { items: 2.5 },
        1200: { items: 3 }
    }
});