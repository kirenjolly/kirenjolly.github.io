let stack = document.querySelector(".stack");

[...stack.children].reverse().forEach(
    i => stack.append(i)
);

stack.addEventListener("click", swap);

function swap(e) {
    let card = document.querySelector(".card:last-child");
    if (e.target.id != card.children[0].id) return;
    card.style.animation = "swap 700ms forwards";

    setTimeout(() => {
        card.style.animation = "";
        stack.prepend(card);
    }, 700);
}