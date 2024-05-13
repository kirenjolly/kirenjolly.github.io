// Splash timeout
const splash = document.querySelector('.splash-section');

document.addEventListener("DOMContentLoaded", (e) => {
    setTimeout(() => {
        splash.classList.add('display-none');
    }, 2000)
})

'use strict';

const elementEl = document.querySelector('#elementEl');

// typewrite effect
function typeWriter(el) {
    const textArray = el.innerHTML.split('');
    el.innerHTML = '';
    textArray.forEach((letter, i) =>
        setTimeout(() => (el.innerHTML += letter), 95 * i)
    );
    // setInterval(() => typeWriter(el), 8000);
}

typeWriter(elementEl);

// Particles config
particlesJS.load('particles-js', 'assets/particlesjs-intra.json', function () {
    console.log('callback - particles.js config loaded');
});

particlesJS.load('particles-js-splash', 'assets/particlesjs-config.json', function () {
    console.log('callback - particles.js config loaded');
});

particlesJS.load('particles-js-skills', 'assets/particles-1.json', function () {
    console.log('callback - particles.js config loaded');
});

particlesJS.load('particles-js-projects', 'assets/particlesjs-nasa.json', function () {
    console.log('callback - particles.js config loaded');
});




// Experience color
var links = document.querySelectorAll('#company-name-flex a');

function changeColor(e) {
    for (var i = 0; i < links.length; i++) {
        if (e.target.innerHTML != links[i].innerHTML) {
            links[i].style.color = 'white';
            links[i].style.borderLeftColor = '#0F0F0F';
        }
        else {
            e.target.style.color = '#14e956';
            e.target.style.borderLeftColor = '#14e956';
        }
    }

    if(e.target.innerHTML == 'Target Corporation') {
        $("#wipro-exp").hide();
        $("#target-exp").show();
    }
    else {
        $("#target-exp").hide();
        $("#wipro-exp").show();
    }
}

for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', changeColor);
}