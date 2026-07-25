/*==================================================
                MAGIC SHOP
                SCRIPT.JS
==================================================*/

/*==========================================
                ELEMENTOS
==========================================*/

const stars = document.getElementById("stars");
const particles = document.getElementById("particles");

const welcome = document.getElementById("welcome");
const envelope = document.querySelector(".envelope");
const heart = document.getElementById("heart");

const letterSection = document.getElementById("letterSection");
const typedText = document.getElementById("typedText");
const galleryButton = document.getElementById("galleryButton");

const gallery = document.getElementById("gallery");
const photos = document.querySelectorAll(".photo");

const restart = document.getElementById("restart");

const music = document.getElementById("music");
const musicButton = document.getElementById("musicButton");

const music2 = document.getElementById("music2");
const musicButton2 = document.getElementById("musicButton2");

/*==========================================
                ESTRELLAS
==========================================*/

if (stars) {

    for (let i = 0; i < 180; i++) {

        const star = document.createElement("div");

        star.className = "star";

        const size = Math.random() * 3 + 1;

        star.style.width = size + "px";
        star.style.height = size + "px";

        star.style.left = Math.random() * 100 + "%";
        star.style.top = Math.random() * 100 + "%";

        star.style.animationDelay = Math.random() * 5 + "s";

        stars.appendChild(star);

    }

}

/*==========================================
                PARTÍCULAS
==========================================*/

if (particles) {

    const icons = ["💜", "✨", "⭐", "♡", "✰", "✿", "❄︎"];

    setInterval(() => {

        const particle = document.createElement("div");

        particle.className = "particle";

        particle.textContent =
            icons[Math.floor(Math.random() * icons.length)];

        particle.style.left = Math.random() * 100 + "vw";
        particle.style.fontSize = (16 + Math.random() * 18) + "px";
        particle.style.animationDuration = (8 + Math.random() * 5) + "s";

        particles.appendChild(particle);

        setTimeout(() => particle.remove(), 13000);

    }, 450);

}

/*==========================================
                CARTA
==========================================*/

const message = `My dear colega, amiga, nakama, best friend, hermana de otra madre...

No puedo creer que ya han pasado 20 años desde que el universo decidió traerte a este pequeño mundo. Omg, omg, el tiempo literalmente avanza muy rápido, y me siento muy afortunada de haber compartido tantos momentos contigo. JAJAJAJJAJ, aunque no tengamos muchas fotos, los recuerdos detrás de todo es lo que realmente importa y lo se lleva en el corazón. Aunque tampoco recordemos cuando nos conocimos exactamente, lo que tengo con seguridad es que nuestra amistad tiene ese algo, ese algo que te hace sentir que siempre hay alguien que te entiende, que te apoya y que te hace reír hasta que te duela la barriga (como en el colegio). Y eso realmente lo aprecio mucho, porque la vida es mejor cuando se comparte con personas como tú. Eres una gran persona, aunque a veces no encuentro las palabras para decirlo o bueno no lo digo, quiero que sepas que mientras yo exista siempre tendrás una persona con quien contar, que te apoya a ojos cerrados, y te quiere muchote. I love you so much. Y bueno, espero que este día sea magnífico, que lo disfrutes como nunca, recuerdaa no se cumplen 20 años dos veces en la vida, así que deja que la locura te consuma. Saranghae y pilitas que "Memento mori, memento vivere. No olvides que eres una persona extraordinaria y con la capacidad y locura suficiente para lograr todo lo que te propongas, así a la fucking gente que diga que no puedes, demúestrales que están equivocados. 
AHORA SI: 
FELICES 20 MY SOULMATEEEE`;

let index = 0;
let typing = null;
let playing = false;

/*==========================================
            EFECTO ESCRITURA
==========================================*/

function typeWriter() {

    if (index < message.length) {

        typedText.textContent += message.charAt(index);

        index++;

        typing = setTimeout(typeWriter, 35);

    } else {

        galleryButton.style.display = "block";

    }

}

/*==========================================
            ABRIR SOBRE
==========================================*/

heart.addEventListener("click", () => {

    heart.style.pointerEvents = "none";

    envelope.classList.add("open");

    if (music.paused) {

        music.play().catch(() => { });

        playing = true;

        musicButton.innerHTML = "⏸";

    }

    setTimeout(() => {

        welcome.classList.add("hide");

    }, 900);

    setTimeout(() => {

        welcome.style.display = "none";

        letterSection.style.display = "flex";

        letterSection.classList.add("show");

        clearTimeout(typing);

        typedText.textContent = "";

        index = 0;

        galleryButton.style.display = "none";

        typeWriter();

    }, 1800);

});

/*==========================================
                GALERÍA
==========================================*/

galleryButton.addEventListener("click", () => {

    letterSection.style.display = "none";

    gallery.style.display = "block";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    photos.forEach((photo, i) => {

        setTimeout(() => {

            photo.classList.add("show");

        }, i * 1000);

    });

});

/*==========================================
                MÚSICA
==========================================*/

musicButton.innerHTML = "▶︎";
musicButton2.innerHTML = "𝄞";


musicButton.addEventListener("click", () => {

    if (music.paused) {

        music.play();

        // Detener la otra canción
        music2.pause();
        music2.currentTime = 0;

        musicButton.innerHTML = "⏸";
        musicButton2.innerHTML = "𝄞";

    } else {

        music.pause();

        musicButton.innerHTML = "▶︎";

    }

});


musicButton2.addEventListener("click", () => {

    if (music2.paused) {

        music2.play();

        // Detener la primera canción
        music.pause();
        music.currentTime = 0;

        musicButton2.innerHTML = "⏸";
        musicButton.innerHTML = "▶︎";

    } else {

        music2.pause();

        musicButton2.innerHTML = "𝄞";

    }

});
/*==========================================
                REINICIAR
==========================================*/

restart.addEventListener("click", () => {

    clearTimeout(typing);

    // NO detener música
    // music.pause();
    // music.currentTime = 0;

    gallery.style.display = "none";

    letterSection.style.display = "none";

    letterSection.classList.remove("show");

    welcome.style.display = "flex";
    welcome.classList.remove("hide");

    envelope.classList.remove("open");

    heart.style.pointerEvents = "auto";

    typedText.textContent = "";

    index = 0;

    galleryButton.style.display = "none";

    photos.forEach(photo => {

        photo.classList.remove("show");

        photo.style.zIndex = "1";

    });

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

/*==========================================
            EFECTO FOTOS
==========================================*/

photos.forEach(photo => {

    photo.addEventListener("mouseenter", () => {

        photo.style.zIndex = "10";

    });

    photo.addEventListener("mouseleave", () => {

        photo.style.zIndex = "1";

    });

});

