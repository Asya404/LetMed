import {langObjCoop} from './translate.js';


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
var controller = new ScrollMagic.Controller();

// loop through all elements
$('.fade-in').each(function() {
  
  // build a tween
  var tween = TweenMax.from($(this), 0.7, {autoAlpha: 0, y: '+=100', x: '0', ease:Linear.easeNone});

  // build a scene
  var scene = new ScrollMagic.Scene({
    triggerElement: this,
	triggerHook: 0.7,
	offset: 0,
    reverse: false
  })
  .setTween(tween)
  .addTo(controller);
  
});



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
