import { langObj } from './translate.js';


const select = document.querySelectorAll('.select');
const selectEn = document.querySelectorAll('.select__lang--en');
const selectPl = document.querySelectorAll('.select__lang--pl');


// SELECT ARROW AND FRAME
select.forEach(el => {
    el.addEventListener('click', () => {
        el.classList.toggle('login-frame');
    })
})



// ADD HREF ONLY IF IT'S OPEN
selectEn.forEach(el => {
    el.addEventListener('click', function () {
        if (el.parentElement.classList.contains('login-frame')) {
            el.href = "index.html";
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
            el.textContent = langObj[lang][el.dataset.lang]
        }
        if (el.placeholder) {
            el.placeholder = langObj[lang][el.dataset.lang];
            el.textContent = ''
        }

        if (lang == 'pl') {
            document.querySelector('.hero__heading').style.maxWidth = '890px';
        }
    })
}



// MAIN BTN ON SCROLL
const mainBtns = document.querySelectorAll('.main-btn');

window.onscroll = () => {
    mainBtns.forEach(el => {
        el.classList.remove('active-btn')

        if (window.innerWidth < 768) {
            if (window.pageYOffset > 340) {
                el.classList.add('active-btn');
            }
        } else {
            if (window.pageYOffset > 680) {
                el.classList.add('active-btn');
            }
        }
    })

}



// MOBILE NAV AND OVERLAY
const btn = document.querySelector('.nav-mobile__btn');
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