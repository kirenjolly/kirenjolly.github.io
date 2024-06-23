let stack = document.querySelector("#resume-stack");

[...stack.children].reverse().forEach(
    i => stack.append(i)
);

stack.addEventListener("click", resumeStackSwap);

function resumeStackSwap(e) {
    let card = document.querySelector(".card:last-child");
    if (e.target.id != card.children[0].id) return;
    card.style.animation = "swap 700ms forwards";

    setTimeout(() => {
        card.style.animation = "";
        stack.prepend(card);
    }, 700);
}

setInterval(resumeStackSwapTimeout, 2000);

function resumeStackSwapTimeout() {
    let card = document.querySelector(".card:last-child");
    card.style.animation = "swap 700ms forwards";

    setTimeout(() => {
        card.style.animation = "";
        stack.prepend(card);
    }, 700);
}

// cafe stack

let cafeStack = document.querySelector("#cafe-stack");

[...cafeStack.children].reverse().forEach(
    i => cafeStack.append(i)
);

cafeStack.addEventListener("click", cafeStackSwap);

function cafeStackSwap(e) {
    let card = document.querySelector(".resume-stack-card:last-child");
    if (e.target.id != card.children[0].id) return;
    card.style.animation = "swap 700ms forwards";

    setTimeout(() => {
        card.style.animation = "";
        cafeStack.prepend(card);
    }, 700);
}


setInterval(cafeStackSwapTimeout, 2000); 

function cafeStackSwapTimeout(e) {
    let card = document.querySelector(".resume-stack-card:last-child");
    card.style.animation = "swap 700ms forwards";

    setTimeout(() => {
        card.style.animation = "";
        cafeStack.prepend(card);
    }, 700);
}

// quick bites stack

let quickBitesStack = document.querySelector("#quick-bites-stack");

[...quickBitesStack.children].reverse().forEach(
    i => quickBitesStack.append(i)
);

quickBitesStack.addEventListener("click", quickBitesStackSwap);

function quickBitesStackSwap(e) {
    let card = document.querySelector(".quick-bites-stack-card:last-child");
    if (e.target.id != card.children[0].id) return;
    card.style.animation = "swap 700ms forwards";

    setTimeout(() => {
        card.style.animation = "";
        quickBitesStack.prepend(card);
    }, 700);
}


setInterval(quickBitesStackSwapTimeout, 2000); 

function quickBitesStackSwapTimeout(e) {
    let card = document.querySelector(".quick-bites-stack-card:last-child");
    card.style.animation = "swap 700ms forwards";
    
    setTimeout(() => {
        card.style.animation = "";
        quickBitesStack.prepend(card);
    }, 700);
}