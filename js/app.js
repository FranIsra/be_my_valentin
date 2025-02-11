window.onload = () => {
    for (let index = 0; index < 20; index++) createHeart();

    setInterval(createHeart, 150);
}

const frasesParaAceptar = [
    "Piensalo dos veces",
    "Deberias aceptar",
    "No lo pienses tanto",
    "Es una buena idea",
    "No te arrepentiras",
    "Dale una oportunidad",
    "No pierdes nada",
    "Es una buena idea",
    "Aceptar es lo correcto",
    "No lo dudes",
    "Pasemos juntos este 15 de febrero",
    "Quien sabe que puede pasar",
    "Quiero estar contigo",
];

let fraseActual = 0;

function aceptFn() {
    const cardHeader = document.querySelector('.card-header h1');
    cardHeader.innerText = "Te espero este 15 de febrero";
    const rejectBtn = document.querySelector('.reject-btn');
    rejectBtn.style.display = 'none';
    const aceptBtn = document.querySelector('.acept-btn');
    aceptBtn.style.display = 'none';
    document.body.classList.add('acept');
    document.body.classList.remove('reject');
}

function rejectFn() {
    const cardHeader = document.querySelector('.card-header h1');
    cardHeader.innerText = frasesParaAceptar[fraseActual];
    document.body.classList.add('reject');
    frasesParaAceptar.length > fraseActual + 1 ? fraseActual++ : fraseActual = 0;
}

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.top = Math.random() * 100 + 'vh';
    heart.style.animationDuration = Math.random() * 4 + 3 + 's';
    heart.style.opacity = Math.random() / 2 - 0.3;
    heart.style.height = heart.style.width;
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 6000);
}
