const controller = new ScrollMagic.Controller();

/* SCENE 1 */
const scene1 = new ScrollMagic.Scene({
    triggerElement: '.tools',
    offset: -120,
    duration: 140
})
.setClassToggle('.discussion-box-wrapper', 'show')

const scene1a = new ScrollMagic.Scene({
    triggerElement: '.tools',
    offset: -120,
    duration: 140
})
.setClassToggle('.tools-btn--1', 'blue-btn');




/* SCENE 2 */
const scene2 = new ScrollMagic.Scene({
    triggerElement: '.tools',
    offset: 0,
    duration: 110
})
.setClassToggle('.health-box-wrapper', 'show')

const scene2a = new ScrollMagic.Scene({
    triggerElement: '.tools',
    offset: 0,
    duration: 110
})
.setClassToggle('.tools-btn--2', 'blue-btn');

const scene2b = new ScrollMagic.Scene({
    triggerElement: '.tools',
    offset: 0,
    duration: 110
})
.setClassToggle('.discussion__text', 'hide');

const scene2c = new ScrollMagic.Scene({
    triggerElement: '.tools',
    offset: 0,
    duration: 110
})
.setClassToggle('.health__text', 'show-block');




/* SCENE 3 */
const scene3 = new ScrollMagic.Scene({
    triggerElement: '.tools',
    offset: 120
})
.setClassToggle('.follow-box-wrapper', 'show')

const scene3a = new ScrollMagic.Scene({
    triggerElement: '.tools',
    offset: 120
})
.setClassToggle('.tools-btn--3', 'blue-btn');



// .addTo(controller);
controller.addScene([
    scene1, scene1a, scene2, scene2a, scene2b, scene2c, scene3, scene3a
]);