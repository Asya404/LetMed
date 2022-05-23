import { langObjCoop } from './translate.js';


const select = document.querySelectorAll('.select');
const selectEn = document.querySelectorAll('.select__lang--en');
const selectPl = document.querySelectorAll('.select__lang--pl');

// SELECT ARROW AND FRAME
select.forEach(el => {
    el.addEventListener('click', () => {
        el.classList.toggle('login-frame');
        el.lastElementChild.classList.toggle('select-active');
        el.firstElementChild.lastElementChild.classList.toggle('arrow-active')
    })
})


// Translates to en only if it's open
selectEn.forEach(el => {
    el.addEventListener('click', function () {
        if (this.parentElement.classList.contains('login-frame')) {
            getTranslate('en')
        }
    });
})

selectPl.forEach(el => {
    el.addEventListener('click', function () {
        getTranslate('pl')
    });
})


function getTranslate(lang) {
    document.querySelectorAll('[data-lang]').forEach(el => {
        if (el.dataset.lang) {
            el.textContent = langObjCoop[lang][el.dataset.lang]
        }
        if (el.placeholder) {
            el.placeholder = langObjCoop[lang][el.dataset.lang];
            el.textContent = ''
        }

        if (lang == 'pl') {
            document.querySelector('.hero__heading').style.maxWidth = '890px';
        } else if (lang == 'en') {
            document.querySelector('.hero__heading').style.maxWidth = '766px';
        }
    })
}




// ANIMATIONS
const controller = new ScrollMagic.Controller();
let offset_value = 500

new ScrollMagic.Scene({
    triggerElement: '.features',
    offset: 280,
    duration: 1000,
})
    .setPin('.features')
    .addTo(controller);

const items = document.querySelectorAll('.item')
for (let i = 0; i < items.length; i++) {
    new ScrollMagic.Scene({ triggerElement: '.features', offset: i * offset_value, duration: 500 })
        .setClassToggle(items[i], "show-block")
        .addTo(controller);
}



// MOBILE NAV
const btn = document.querySelector('.nav__btn');
const menu = document.querySelector('.nav-mobile');

btn.addEventListener('click', () => {
    btn.classList.toggle('open');
    menu.classList.toggle('active');
    document.querySelector('.overlay').classList.toggle('active-overlay');
})




// SMOOTH SCROLL
const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(smoothLink.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};
