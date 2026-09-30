// =========================
// COMMON FUNCTION
// =========================

function revealSection(id) {

    const section = document.getElementById(id);

    section.classList.add("show-section");

    setTimeout(function () {

        section.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }, 100);

}


// =========================
// OPEN SURPRISE
// =========================

function openSurprise() {

    revealSection("message");


    const music =
        document.getElementById("birthday-music");


    music.volume = 0.5;


    music.play().catch(function () {

        console.log("Music could not start automatically.");

    });

}


// =========================
// SHOW TIMELINE
// =========================

function showTimeline() {

    revealSection("timeline-section");

}


// =========================
// SHOW PHOTOS
// =========================

function showPhotos() {

    revealSection("photos-section");

    setTimeout(function () {

        const photos =
            document.querySelectorAll(".photo-card");

        photos.forEach(function (photo, index) {

            setTimeout(function () {

                photo.classList.add("show-photo");

            }, index * 250);

        });

    }, 500);

}

// =========================
// SHOW GIFT
// =========================

function showGift() {

    revealSection("gift-section");

}


// =========================
// OPEN GIFT
// =========================

function openGift() {

    const giftMessage =
        document.getElementById("gift-message");

    const giftButton =
        document.getElementById("gift-button");

    const giftBox =
        document.getElementById("gift-box");


    // Show gift message

    giftMessage.classList.add("show-gift");


    // Hide open gift button

    giftButton.style.display = "none";


    // Make gift box look opened

    giftBox.classList.add("gift-open");

        createGiftBurst();

setTimeout(function () {

    giftBox.innerHTML = "🎁✨";

}, 600);


    // Scroll slightly down

    setTimeout(function () {

        giftMessage.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    }, 300);

}


// =========================
// SHOW FINAL MESSAGE
// =========================

function showFinal() {

    revealSection("final-section");

    setTimeout(function () {

        createConfetti();

    }, 700);

}


function createConfetti() {

    const pieces = [
        "🎉",
        "🎊",
        "💕",
        "❤️",
        "✨",
        "🎀",
        "🥳"
    ];

    for (let i = 0; i < 35; i++) {

        const confetti =
            document.createElement("div");

        confetti.classList.add("confetti");

        confetti.innerHTML =
            pieces[Math.floor(Math.random() * pieces.length)];

        confetti.style.left =
            Math.random() * 100 + "vw";

        confetti.style.animationDelay =
            Math.random() * 2 + "s";

        confetti.style.fontSize =
            (18 + Math.random() * 15) + "px";

        document.body.appendChild(confetti);


        setTimeout(function () {

            confetti.remove();

        }, 6000);

    }

}

// =========================
// TYPING ANIMATION
// =========================

const typingText =
    "Today is not just another day... it's the day someone very special was born. 🥹✨";

let typingIndex = 0;

function typeMessage() {

    const element =
        document.getElementById("typing-text");

    if (typingIndex < typingText.length) {

        element.innerHTML += typingText.charAt(typingIndex);

        typingIndex++;

        setTimeout(typeMessage, 45);

    }

}

window.addEventListener("load", function () {

    typeMessage();

});

// =========================
// BIRTHDAY COUNTDOWN
// =========================

function updateCountdown() {

    const now = new Date();

    let birthday =
        new Date(now.getFullYear(), 9, 7, 0, 0, 0);

    // If this year's birthday has passed,
    // count down to next year's birthday
    if (now > birthday) {

        birthday =
            new Date(now.getFullYear() + 1, 9, 7, 0, 0, 0);

    }

    const difference =
        birthday - now;

    const days =
        Math.floor(difference / (1000 * 60 * 60 * 24));

    const hours =
        Math.floor(
            (difference / (1000 * 60 * 60)) % 24
        );

    const minutes =
        Math.floor(
            (difference / (1000 * 60)) % 60
        );

    const seconds =
        Math.floor(
            (difference / 1000) % 60
        );

    document.getElementById("countdown").innerHTML =
        "🎂 " +
        days + " Days " +
        hours + " Hours " +
        minutes + " Minutes " +
        seconds + " Seconds 🎀";

}

updateCountdown();

setInterval(updateCountdown, 1000);

// =========================
// GIFT BURST EFFECT
// =========================

function createGiftBurst() {

    const burst =
        document.getElementById("gift-burst");

    const pieces = [
        "❤️",
        "💕",
        "✨",
        "🎀",
        "💗",
        "🥰",
        "🌸",
        "⭐"
    ];

    for (let i = 0; i < 12; i++) {

        const piece =
            document.createElement("span");

        piece.classList.add("burst-piece");

        piece.innerHTML =
            pieces[Math.floor(Math.random() * pieces.length)];

        const angle =
            (Math.PI * 2 / 12) * i;

        const distance =
            80 + Math.random() * 60;

        const x =
            Math.cos(angle) * distance;

        const y =
            Math.sin(angle) * distance;

        piece.style.setProperty(
            "--x",
            x + "px"
        );

        piece.style.setProperty(
            "--y",
            y + "px"
        );

        burst.appendChild(piece);

        setTimeout(function () {
            piece.remove();
        }, 1300);

    }

}

// =========================
// BIRTHDAY WISH
// =========================

function makeWish() {

    const wishMessage =
        document.getElementById("wish-message");

    const wishButton =
        document.getElementById("wish-button");

    wishMessage.classList.add("show-wish");

    wishButton.style.display = "none";

    createConfetti();

    setTimeout(function () {

        wishMessage.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    }, 300);


    setTimeout(function () {

    const foreverSection =
        document.getElementById("forever-section");

    foreverSection.classList.add("show-forever");

    foreverSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}, 2500);

}