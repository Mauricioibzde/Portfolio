// Toggle mobile menu
const inputBtnMenu = document.querySelector('.burger input');
const menuMobile = document.querySelector('.menu-mobile');

inputBtnMenu.addEventListener('click', () => {
  menuMobile.classList.toggle('active');
});

// Developer icons animation
function developerAnimation() {
  const divs = document.querySelectorAll(".dev-icons > div");
  divs.forEach(div => div.classList.add("show"));
}
window.addEventListener("load", () => setTimeout(developerAnimation, 500));

// Header animation
const hello = document.querySelector('.hello');
const nome = document.querySelector('.nome');
const profissao = document.querySelector('.profissao');
const nameText = "I'am Mauricio Farias da Silva";

// 1. Mostrar "Hello World!" suavemente
setTimeout(() => {
  hello.style.opacity = 1;

  // 2. Começar a digitar o nome depois de 1s
  setTimeout(() => {
    typeWriterName(nome, nameText, 100, () => {
      // 3. Revelar profissão após digitar o nome
      setTimeout(() => {
        profissao.style.opacity = 1;
      }, 500);

      // 4. Iniciar efeito de cores e piscadas do nome
      startColorBlinkEffect(nome);
    });
  }, 1000);

}, 500);

// Função typewriter para o nome
function typeWriterName(element, text, speed = 100, callback) {
  let i = 0;
  function type() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    } else {
      if (callback) callback();
    }
  }
  type();
}

// Efeito de cores e piscadas contínuas do nome
function startColorBlinkEffect(element) {
  // Pisca duas vezes rapidamente
  let blinkCount = 0;
  const blinkTimes = 2;
  const blinkInterval = setInterval(() => {
    element.style.opacity = element.style.opacity === '0' ? '1' : '0';
    blinkCount++;
    if (blinkCount >= blinkTimes * 2) {
      clearInterval(blinkInterval);
      element.style.opacity = '1';
      // Começa a troca contínua de cores
      colorRotate();
    }
  }, 300);

  function colorRotate() {
    const colors = ["#ff6969ff"];
    let colorIndex = 0;
    setInterval(() => {
      element.style.color = colors[colorIndex];
      colorIndex = (colorIndex + 1) % colors.length;
    }, 1500);
  }
}

