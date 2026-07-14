const background = document.querySelector(".background");

for (let i = 0; i < 35; i++) {

    const particle = document.createElement("span");

    particle.classList.add("particle");

    particle.style.left = Math.random() * 100 + "%";

    particle.style.top = Math.random() * 100 + "%";

    particle.style.animationDuration =
        (4 + Math.random() * 6) + "s";

    particle.style.animationDelay =
        Math.random() * 5 + "s";

    particle.style.opacity =
        Math.random() * .8;

    particle.style.transform =
        `scale(${0.5 + Math.random()})`;

    background.appendChild(particle);

}

.particle{

    position:absolute;

    width:5px;

    height:5px;

    border-radius:50%;

    background:var(--gold);

    box-shadow:
        0 0 10px rgba(255,215,0,.8);

    animation:
        particleFloat linear infinite;

}



@keyframes particleFloat{

    0%{

        transform:
            translateY(0);

        opacity:0;

    }

    20%{

        opacity:1;

    }

    80%{

        opacity:1;

    }

    100%{

        transform:
            translateY(-120px);

        opacity:0;

    }

}
