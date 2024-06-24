'use strict';

// Splash timeout
const splash = document.querySelector('.splash-section');

const HtmlBody = document.querySelector("body");

document.addEventListener("DOMContentLoaded", (e) => {
    HtmlBody.classList.toggle("overlay");
    setTimeout(() => {
        splash.classList.add('display-none');
        HtmlBody.classList.remove("overlay");
        type(0, 0);
    }, 2000)
})


// typewriter
const texts = ["Hello, I'm Kiren Jolly !", "Full Stack Developer."];
const typeWriterText = document.querySelector('#typeText');

function type(word, letter) {
    typeWriterText.innerHTML += texts[word][letter];
    letter = (letter + 1) % texts[word].length
    if (letter == 0) {
        word++;
        if (word < texts.length) {
            typeWriterText.innerHTML += "<br>";
        }
    }
    if (word < texts.length) {
        setTimeout(type, 100, word, letter);
    }
}


// Particles config
particlesJS.load('particles-js', 'assets/particlesjs-intra.json', function () {
    console.log('callback - particles.js config loaded');
});

particlesJS.load('particles-js-splash', 'assets/particlesjs-config.json', function () {
    console.log('callback - particles.js config loaded');
});

// particlesJS.load('particles-js-splash-footer', 'assets/particlesjs-config.json', function () {
//     console.log('callback - particles.js config loaded');
// });

particlesJS.load('particles-js-skills', 'assets/particles-1.json', function () {
    console.log('callback - particles.js config loaded');
});

particlesJS.load('particles-js-projects', 'assets/particlesjs-nasa.json', function () {
    console.log('callback - particles.js config loaded');
});

particlesJS.load('particles-js-projects-mobile', 'assets/particlesjs-nasa.json', function () {
    console.log('callback - particles.js config loaded');
});




// Experience color
var links = document.querySelectorAll('.company-item');

function changeColor(e) {
    let innerHTML
    for (var i = 0; i < links.length; i++) {
        if (e.target.classList.contains('company-item')) {
            innerHTML = e.target.children[1].innerHTML;
        }
        else {
            innerHTML = e.target.parentElement.children[1].innerHTML;
        }
        if (innerHTML != links[i].children[1].innerHTML) {
            links[i].style.color = 'white';
            links[i].style.borderLeftColor = '#0F0F0F';
        }
        else {
            links[i].style.color = '#14e956';
            links[i].style.borderLeftColor = '#14e956';
        }
    }

    if (innerHTML == 'Target Corporation') {
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

// Hamburger
const body = document.querySelector("body");
const main = document.querySelector("main");
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const navLink = document.querySelectorAll(".nav-links li");

hamburger.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));

function mobileMenu() {
    hamburger.classList.toggle("active-link");
    navLinks.classList.toggle("active-link");
    body.classList.toggle("overlay");
    main.classList.toggle("blur-background");
}

function closeMenu() {
    hamburger.classList.remove("active-link");
    navLinks.classList.remove("active-link");
    body.classList.remove("overlay");
    main.classList.remove("blur-background");
}


document.onclick = function (e) {
    if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
        closeMenu();
    }
}

//Contact form
$("#contact-form").on("submit", function (event) {
    event.preventDefault();
    let name = event.target.elements.item(0).value;
    let email = event.target.elements.item(1).value;
    let message = event.target.elements.item(2).value
    console.log(message);
    $(".submit-feedback").css("display", "block");
    $("#contact-form").trigger("reset");
});

// mail to, collect data from submit form for the email bodyl