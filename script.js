// ================= BOOT SCREEN =================

const bootScreen = document.getElementById("bootScreen");
const bootText = document.getElementById("bootText");
const bootBar = document.getElementById("bootBar");
const bootStatus = document.getElementById("bootStatus");

const bootLines = [
    "Initializing system...",
    "Loading portfolio modules...",
    "Checking system integrity...",
    "Loading HTML engine...",
    "Loading CSS engine...",
    "Initializing JavaScript...",
    "Establishing secure connection...",
    "Loading user profile...",
    "Access permissions granted ✓",
    "System ready ✓"
];

let bootIndex = 0;

function bootAnimation() {

    if (bootIndex < bootLines.length) {

        const line = document.createElement("div");

        line.className = "boot-line";
        line.textContent = bootLines[bootIndex];

        bootText.appendChild(line);

        const progress =
            ((bootIndex + 1) / bootLines.length) * 100;

        bootBar.style.width = progress + "%";

        bootStatus.textContent =
            bootLines[bootIndex];

        bootIndex++;

        setTimeout(bootAnimation, 500);

    } else {

        bootStatus.textContent = "ACCESS GRANTED ✓";

        setTimeout(() => {

            bootScreen.classList.add("hide");

        }, 1000);
    }
}


// Page load হলে Boot শুরু হবে

window.addEventListener("load", () => {

    setTimeout(() => {
        bootAnimation();
    }, 500);

});


// ================= TYPING EFFECT =================

const typing = document.getElementById("typing");

const roles = [
    "Frontend Web Developer",
    "Cybersecurity Enthusiast",
    "JavaScript Developer",
    "Problem Solver"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentRole = roles[roleIndex];

    if (!deleting) {

        typing.textContent =
            currentRole.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentRole.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typing.textContent =
            currentRole.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            roleIndex++;

            if (roleIndex >= roles.length) {
                roleIndex = 0;
            }
        }
    }

    setTimeout(
        typeEffect,
        deleting ? 50 : 90
    );
}

typeEffect();


// ================= MOBILE MENU =================

const menuBtn =
    document.getElementById("menuBtn");

const navMenu =
    document.getElementById("navMenu");

if (menuBtn && navMenu) {

    menuBtn.addEventListener("click", () => {

        navMenu.classList.toggle("active");

    });
}


// Mobile menu link click করলে menu বন্ধ হবে

document.querySelectorAll("#navMenu a").forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

    });

});


// ================= CONTACT FORM =================

const contactForm =
    document.getElementById("contactForm");

const formMessage =
    document.getElementById("formMessage");

if (contactForm) {

    contactForm.addEventListener("submit", (event) => {

        event.preventDefault();

        formMessage.textContent =
            "✓ Message queued successfully...";

        contactForm.reset();

    });

}


// ================= MATRIX EFFECT =================

const canvas =
    document.getElementById("matrix");

const ctx =
    canvas.getContext("2d");

let width;
let height;
let columns;
let drops;

const characters =
    "01ABCDEFGHIJKLMNOPQRSTUVWXYZ#$%&";


function setupMatrix() {

    width = canvas.width =
        window.innerWidth;

    height = canvas.height =
        window.innerHeight;

    const fontSize = 14;

    columns =
        Math.floor(width / fontSize);

    drops =
        new Array(columns).fill(1);
}


function drawMatrix() {

    ctx.fillStyle =
        "rgba(0, 0, 0, 0.05)";

    ctx.fillRect(
        0,
        0,
        width,
        height
    );

    ctx.font =
        "14px monospace";

    for (let i = 0; i < drops.length; i++) {

        const text =
            characters[
                Math.floor(
                    Math.random() *
                    characters.length
                )
            ];

        ctx.fillStyle =
            "#00ff88";

        ctx.fillText(
            text,
            i * 14,
            drops[i] * 14
        );

        if (
            drops[i] * 14 > height &&
            Math.random() > 0.975
        ) {

            drops[i] = 0;

        }

        drops[i]++;
    }
}


setupMatrix();

setInterval(drawMatrix, 45);


window.addEventListener("resize", () => {

    setupMatrix();

});


// ================= LIVE SYSTEM STATUS =================

const cpuValue =
    document.getElementById("cpuValue");

const memoryValue =
    document.getElementById("memoryValue");

const cpuBar =
    document.getElementById("cpuBar");

const memoryBar =
    document.getElementById("memoryBar");


function updateSystemStatus() {

    const cpu =
        Math.floor(Math.random() * 40) + 30;

    const memory =
        Math.floor(Math.random() * 25) + 50;

    if (cpuValue) {
        cpuValue.textContent =
            cpu + "%";
    }

    if (memoryValue) {
        memoryValue.textContent =
            memory + "%";
    }

    if (cpuBar) {
        cpuBar.style.width =
            cpu + "%";
    }

    if (memoryBar) {
        memoryBar.style.width =
            memory + "%";
    }
}


setInterval(
    updateSystemStatus,
    2000
);