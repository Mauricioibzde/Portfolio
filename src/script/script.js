const inputBtnMenu = document.querySelector('.burger input');
const menuMobile = document.querySelector('.menu-mobile');

console.log(inputBtnMenu , menuMobile);

inputBtnMenu.addEventListener('click', function() {
  menuMobile.classList.toggle('active');
});


const nome = document.querySelector('.nome');


console.log(nome);
// Effect TypeWriter
function typeWriter(elemento) {
      
      const cores = ["#fa4949ff", "#55fc74ff", "#6524ffff", "#f9e601", "#f901f6"];
      let i = 0;

   
      setInterval(() => {
        elemento.style.color = cores[i];
        i = (i + 1) % cores.length; 
      }, 5000);
    }

    typeWriter(nome);




  function developerAnimation() {
    const divs = document.querySelectorAll(".dev-icons > div");

    
    divs.forEach(div => {
      div.classList.add("show");
    });
  }

  window.addEventListener("load", () => {
    setTimeout(developerAnimation, 500); 
  });

