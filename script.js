// Typing effect

const text = "> Web Developer_";
const typingElement = document.querySelector(".hero h2");

let index = 0;

function typeEffect() {

    if (index < text.length) {
        typingElement.textContent = text.substring(0, index + 1);
        index++;

        setTimeout(typeEffect, 100);
    } else {

        setTimeout(() => {
            typingElement.textContent = "";
            index = 0;
            typeEffect();
        }, 2000);

    }
}

typeEffect();


// Console message

console.log(
    "%c Welcome to Raju's Hacker Portfolio 👨‍💻",
    "color:#00ff66;font-size:18px;font-weight:bold;"
);


// Smooth navigation

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", function(e) {

        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});
