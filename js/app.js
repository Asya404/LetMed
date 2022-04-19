const controller = new ScrollMagic.Controller();

/* SCENE 1 */
const scene1 = new ScrollMagic.Scene({
    triggerElement: '.tools',
    offset: -120,
    duration: 240
})
.setClassToggle('.discussion-box-wrapper', 'show')

const scene1a = new ScrollMagic.Scene({
    triggerElement: '.tools',
    offset: -120,
    duration: 240
})
.setClassToggle('.tools-btn--1', 'blue-btn');




/* SCENE 2 */
const scene2 = new ScrollMagic.Scene({
    triggerElement: '.tools',
    offset: 120,
    duration: 120
})
.setClassToggle('.health-box-wrapper', 'show')

const scene2a = new ScrollMagic.Scene({
    triggerElement: '.tools',
    offset: 120,
    duration: 120
})
.setClassToggle('.tools-btn--2', 'blue-btn');

const scene2b = new ScrollMagic.Scene({
    triggerElement: '.tools',
    offset: 120,
    duration: 120
})
.setClassToggle('.discussion__text', 'hide');

const scene2c = new ScrollMagic.Scene({
    triggerElement: '.tools',
    offset: 120,
    duration: 120
})
.setClassToggle('.health__text', 'show-block');




/* SCENE 3 */
const scene3 = new ScrollMagic.Scene({
    triggerElement: '.tools',
    offset: 240
})
.setClassToggle('.follow-box-wrapper', 'show')

const scene3a = new ScrollMagic.Scene({
    triggerElement: '.tools',
    offset: 240
})
.setClassToggle('.tools-btn--3', 'blue-btn');

const scene3b = new ScrollMagic.Scene({
    triggerElement: '.tools',
    offset: 240
})
.setClassToggle('.discussion__text', 'hide');

const scene3c = new ScrollMagic.Scene({
    triggerElement: '.tools',
    offset: 240
})
.setClassToggle('.health__text', 'hide');

const scene3d = new ScrollMagic.Scene({
    triggerElement: '.tools',
    offset: 240
})
.setClassToggle('.follow__text', 'show-block');



// .addTo(controller);
controller.addScene([
    scene1, scene1a, scene2, scene2a, scene2b, scene2c, scene3, scene3a, scene3b, scene3c, scene3d
]);



/* SECTION QUESTIONS */
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

/* MOBILE NAV */
const btn = document.querySelector('.nav-btn');
const menu = document.querySelector('.nav-mobile');

btn.addEventListener('click', () => {
    btn.classList.toggle('open');
    menu.classList.toggle('active');
    document.querySelector('.overlay').classList.toggle('active-overlay');
})

$("#menu, #logo, #services").on("click", "a", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
       top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1000);
 });


