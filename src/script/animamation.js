// Ícones interativos
const devIcons = [...document.querySelectorAll('.dev-icons > div')];

devIcons.forEach((icon, index) => {
  icon.addEventListener('click', () => console.log('Icon clicked:', index));
  icon.addEventListener('mouseenter', () => icon.classList.add('active'));
  icon.addEventListener('mouseleave', () => icon.classList.remove('active'));
});

// Partículas flutuantes
const colors = ["#222222ff", "#111111ff", "#3a3a3aff", "#4d4d4dff", "#000000ff"];
const numParticles = 200; // 200 é mais performático que 400
const particles = [];
const container = document.body; // usar body ou um container fixo

// Função para criar partículas
function createParticles() {
  for (let i = 0; i < numParticles; i++) {
    const div = document.createElement("div");
    div.classList.add("bg-animation-div");

    const size = 0.5 + Math.random() * 2;
    div.style.width = `${size}rem`;
    div.style.height = `${size}rem`;
    div.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    div.style.opacity = 0.3 + Math.random() * 0.7;
    div.style.borderRadius = `${Math.random() * 50}%`; // mistura círculos e ovais
    div.style.position = 'fixed';
    div.style.left = `${Math.random() * window.innerWidth}px`;
    div.style.top = `${Math.random() * window.innerHeight}px`;
    div.style.willChange = 'transform'; // otimiza animação

    container.appendChild(div);

    particles.push({
      el: div,
      x: parseFloat(div.style.left),
      y: parseFloat(div.style.top),
      vx: (Math.random() - 0.5) * 1.5,
      vy: (Math.random() - 0.5) * 1.5,
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 2
    });
  }
}

// Função de animação
function animateParticles() {
  const width = window.innerWidth;
  const height = window.innerHeight;

  particles.forEach(p => {
    p.x += p.vx;
    p.y += p.vy;
    p.rotation += p.rotationSpeed;

    // loop infinito
    if (p.x > width) p.x = 0;
    if (p.x < 0) p.x = width;
    if (p.y > height) p.y = 0;
    if (p.y < 0) p.y = height;

    p.el.style.transform = `translate(${p.x}px, ${p.y}px) rotate(${p.rotation}deg)`;
  });

  requestAnimationFrame(animateParticles);
}

// Inicializar
createParticles();
animateParticles();

// Atualizar dimensões ao redimensionar
window.addEventListener('resize', () => {
  // opcional: recalcular posição ou apenas deixar loop continuar
});
