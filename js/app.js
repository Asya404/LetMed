// ANIMATIONS
const controller = new ScrollMagic.Controller();

// SCENE 1
const scene1 = new ScrollMagic.Scene({ triggerElement: '.tools', offset: -120, duration: 240 })
    .setClassToggle('.discussion-box-wrapper', 'show')
const scene1a = new ScrollMagic.Scene({ triggerElement: '.tools', offset: -120, duration: 240 })
    .setClassToggle('.tools-btn--1', 'blue-btn');


// SCENE 2
const scene2 = new ScrollMagic.Scene({ triggerElement: '.tools', offset: 120, duration: 120 })
    .setClassToggle('.health-box-wrapper', 'show')
const scene2a = new ScrollMagic.Scene({ triggerElement: '.tools', offset: 120, duration: 120 })
    .setClassToggle('.tools-btn--2', 'blue-btn');
const scene2b = new ScrollMagic.Scene({ triggerElement: '.tools', offset: 120, duration: 120 })
    .setClassToggle('.discussion__text', 'hide');
const scene2c = new ScrollMagic.Scene({ triggerElement: '.tools', offset: 120, duration: 120 })
    .setClassToggle('.health__text', 'show-block');
const scene2d = new ScrollMagic.Scene({ triggerElement: '.tools', offset: 120, duration: 120 })
    .setClassToggle('.section-tools__subtitle--1', 'hide');
const scene2e = new ScrollMagic.Scene({ triggerElement: '.tools', offset: 120, duration: 120 })
    .setClassToggle('.section-tools__subtitle--2', 'show-block');


// SCENE 3
const scene3 = new ScrollMagic.Scene({ triggerElement: '.tools', offset: 240 })
    .setClassToggle('.follow-box-wrapper', 'show')
const scene3a = new ScrollMagic.Scene({ triggerElement: '.tools', offset: 240 })
    .setClassToggle('.tools-btn--3', 'blue-btn');
const scene3b = new ScrollMagic.Scene({ triggerElement: '.tools', offset: 240 })
    .setClassToggle('.discussion__text', 'hide');
const scene3c = new ScrollMagic.Scene({ triggerElement: '.tools', offset: 240 })
    .setClassToggle('.health__text', 'hide');
const scene3d = new ScrollMagic.Scene({ triggerElement: '.tools', offset: 240 })
    .setClassToggle('.follow__text', 'show-block');
const scene3e = new ScrollMagic.Scene({ triggerElement: '.tools', offset: 240 })
    .setClassToggle('.section-tools__subtitle--2', 'hide');
const scene3f = new ScrollMagic.Scene({ triggerElement: '.tools', offset: 240 })
    .setClassToggle('.section-tools__subtitle--3', 'show-block');
const scene3g = new ScrollMagic.Scene({ triggerElement: '.tools', offset: 240 })
    .setClassToggle('.section-tools__subtitle--1', 'hide');


controller.addScene([
    scene1, scene1a, scene2, scene2a, scene2b, scene2c, scene2d, scene2e, scene3, scene3a, scene3b, scene3c, scene3d, scene3e, scene3f, scene3g
]);



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
const btn = document.querySelector('.nav-btn');
const menu = document.querySelector('.nav-mobile');

btn.addEventListener('click', () => {
    btn.classList.toggle('open');
    menu.classList.toggle('active');
    document.querySelector('.overlay').classList.toggle('active-overlay');
})



// SELECT
document.querySelector('.header__select').addEventListener('click', () => {
    document.querySelector('.select__list').classList.toggle('show-block');
    document.querySelector('.header__select').classList.toggle('login-frame');
    document.querySelector('.select__arrow').classList.toggle('select-active')
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