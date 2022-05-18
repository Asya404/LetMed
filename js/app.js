import langObj from './translate.js';


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
            el.textContent = langObj[lang][el.dataset.lang]
        }
        if (el.placeholder) {
            el.placeholder = langObj[lang][el.dataset.lang];
            el.textContent = ''
        }

        if (lang == 'pl') {
            document.querySelector('.hero__heading').style.maxWidth = '850px';
            document.querySelector('.hero__text').style.maxWidth = '630px';
        } else if (lang == 'en') {
            document.querySelector('.hero__heading').style.maxWidth = '666px';
            document.querySelector('.hero__text').style.maxWidth = '482px';
        }
    })
}



// ANIMATIONS
const controller = new ScrollMagic.Controller();

const boxes = document.querySelectorAll('.box-wrapper')
for (let i = 0; i < boxes.length; i++) {

    new ScrollMagic.Scene({ triggerElement: '.tools', offset: 120, duration: 1000 })
        .setClassToggle(boxes[0], "hide")
        .addTo(controller);

    new ScrollMagic.Scene({ triggerElement: '.tools', offset: 120, duration: 240 })
        .setClassToggle(boxes[1], "show")
        .addTo(controller);

    new ScrollMagic.Scene({ triggerElement: '.tools', offset: 360 })
        .setClassToggle(boxes[2], "show")
        .addTo(controller);
}


const btns = document.querySelectorAll('.tools__btn')
for (let i = 0; i < btns.length; i++) {

    new ScrollMagic.Scene({ triggerElement: '.tools', offset: -520, duration: 640 })
        .setClassToggle(btns[0], "blue-btn")
        .addTo(controller);

    new ScrollMagic.Scene({ triggerElement: '.tools', offset: 120, duration: 240 })
        .setClassToggle(btns[1], "blue-btn")
        .addTo(controller);

    new ScrollMagic.Scene({ triggerElement: '.tools', offset: 360 })
        .setClassToggle(btns[2], "blue-btn")
        .addTo(controller);
}


const texts = document.querySelectorAll('.tools__text')
for (let i = 0; i < btns.length; i++) {

    new ScrollMagic.Scene({ triggerElement: '.tools', offset: -120, duration: 240 })
        .setClassToggle(texts[0], "show-block")
        .addTo(controller);

    new ScrollMagic.Scene({ triggerElement: '.tools', offset: 120, duration: 240 })
        .setClassToggle(texts[1], "show-block")
        .addTo(controller);

    new ScrollMagic.Scene({ triggerElement: '.tools', offset: 360 })
        .setClassToggle(texts[2], "show-block")
        .addTo(controller);
}


const subtitles = document.querySelectorAll('.section-tools__subtitle')
for (let i = 0; i < btns.length; i++) {

    new ScrollMagic.Scene({ triggerElement: '.tools', offset: -520, duration: 640 })
        .setClassToggle(subtitles[0], "show-block")
        .addTo(controller);

    new ScrollMagic.Scene({ triggerElement: '.tools', offset: 120, duration: 240 })
        .setClassToggle(subtitles[1], "show-block")
        .addTo(controller);

    new ScrollMagic.Scene({ triggerElement: '.tools', offset: 360 })
        .setClassToggle(subtitles[2], "show-block")
        .addTo(controller);
}




// SECTION QUESTIONS
const questions = document.querySelector('.questions');

questions.addEventListener('click', function (e) {
    const active = document.querySelector('.question-active');
    if (active && active != e.target.closest('.question')) {
        console.log(active)
        active.classList.remove('question-active');
    }
    if (e.target.closest('.question')) {
        e.target.closest('.question').classList.toggle('question-active');
    }
})



// MOBILE NAV
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
            behavior: 'smooth',
            // block: 'start'
        });
        menu.classList.remove('active');
        overlay.classList.remove('active-overlay');
        btn.classList.remove('open');
    });
};





// CAROUSEL
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