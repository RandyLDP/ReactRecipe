document.querySelector("body").addEventListener("click", event => {
    console.log(
        `You clicked on a "${event.target.tagName.toLowerCase()}" element`
    );
});

document.querySelector("body").addEventListener("contextmenu", event => {
    console.log(
        `You right-clicked on a "${event.target.tagName.toLowerCase()}" element`
    );
});

document.querySelectorAll("p").forEach(p =>
    p.addEventListener("mouseover", event => {
        console.log(
            `You moused over the "${event.target.tagName.toLowerCase()}" element`
        );
    })
);

document.querySelectorAll("p").forEach(p =>
    p.addEventListener("mouseout", event => {
        console.log(
            `You moused off of the "${event.target.tagName.toLowerCase()}" element`
        );
    })
);

document.addEventListener("keydown", event => {
    console.log(`You pressed the "${event.key}" key on your keyboard.`);
});