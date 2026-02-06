const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let confettiPieces = [];

function createConfetti() {
    confettiPieces = [];
    for (let i = 0; i < 200; i++) {
        confettiPieces.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            r: Math.random() * 6 + 4,
            d: Math.random() * 20,
            color: `hsl(${Math.random() * 360}, 100%, 50%)`,
            tilt: Math.random() * 10
        });
    }
}

function drawConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    confettiPieces.forEach((p) => {
        ctx.beginPath();
        ctx.fillStyle = p.color;
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
    });

    updateConfetti();
}

function updateConfetti() {
    confettiPieces.forEach((p) => {
        p.y += Math.cos(p.d) + 3;
        p.x += Math.sin(p.d);
        if (p.y > canvas.height) {
            p.y = -10;
        }
    });
}

function startConfetti() {
    createConfetti();
    setInterval(drawConfetti, 20);
}
