// ANIMATIONS
const controller = new ScrollMagic.Controller();


const boxes = document.querySelectorAll('.box-wrapper')
for(let i=0; i<boxes.length; i++) {

    new ScrollMagic.Scene({ triggerElement: '.tools', offset: -120, duration: 240 })
    .setClassToggle(boxes[0], "show")
	.addTo(controller);  

    new ScrollMagic.Scene({ triggerElement: '.tools', offset: 120, duration: 120 })
    .setClassToggle(boxes[1], "show")
	.addTo(controller);  
    
    new ScrollMagic.Scene({ triggerElement: '.tools', offset: 240 })
    .setClassToggle(boxes[2], "show")
	.addTo(controller); 
}


const btns = document.querySelectorAll('.tools-btn')
for(let i=0; i<btns.length; i++) {

    new ScrollMagic.Scene({ triggerElement: '.tools', offset: -120, duration: 240 })
    .setClassToggle(btns[0], "blue-btn")
	.addTo(controller);  

    new ScrollMagic.Scene({ triggerElement: '.tools', offset: 120, duration: 120 })
    .setClassToggle(btns[1], "blue-btn")
	.addTo(controller);  
    
    new ScrollMagic.Scene({ triggerElement: '.tools', offset: 240 })
    .setClassToggle(btns[2], "blue-btn")
	.addTo(controller); 
}


const texts = document.querySelectorAll('.tools__text')
for(let i=0; i<btns.length; i++) {

    new ScrollMagic.Scene({ triggerElement: '.tools', offset: -120, duration: 240 })
    .setClassToggle(texts[0], "show-block")
	.addTo(controller);  

    new ScrollMagic.Scene({ triggerElement: '.tools', offset: 120, duration: 120 })
    .setClassToggle(texts[1], "show-block")
	.addTo(controller);  
    
    new ScrollMagic.Scene({ triggerElement: '.tools', offset: 240 })
    .setClassToggle(texts[2], "show-block")
	.addTo(controller); 
}


const subtitles = document.querySelectorAll('.section-tools__subtitle')
for(let i=0; i<btns.length; i++) {

    new ScrollMagic.Scene({ triggerElement: '.tools', offset: -120, duration: 240 })
    .setClassToggle(subtitles[0], "show-block")
	.addTo(controller);  

    new ScrollMagic.Scene({ triggerElement: '.tools', offset: 120, duration: 120 })
    .setClassToggle(subtitles[1], "show-block")
	.addTo(controller);  
    
    new ScrollMagic.Scene({ triggerElement: '.tools', offset: 240 })
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
const btn = document.querySelector('.nav-btn');
const menu = document.querySelector('.nav-mobile');

btn.addEventListener('click', () => {
    btn.classList.toggle('open');
    menu.classList.toggle('active');
    document.querySelector('.overlay').classList.toggle('active-overlay');
})



// SELECT
$('.select')[0].addEventListener('click', () => {
    $('.select__list')[0].classList.toggle('select-active');
    $('.select')[0].classList.toggle('login-frame');
    $('.select__arrow')[0].classList.toggle('arrow-active')
})

$('.select')[1].addEventListener('click', () => {
    $('.select__list')[1].classList.toggle('select-active');
    $('.select')[1].classList.toggle('login-frame');
    $('.select__arrow')[1].classList.toggle('arrow-active')
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
        965: { items: 2.5},
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
        965: { items: 2.5},
        1200: { items: 3 }
    }
});