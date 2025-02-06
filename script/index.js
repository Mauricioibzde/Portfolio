


//


const icons = [
    "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    "https://upload.wikimedia.org/wikipedia/commons/3/38/HTML5_Badge.svg",
    "https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    "https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg",
    "https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg"
];

const iconContainer = document.getElementById("iconContainer");

function createIcons() {
    iconContainer.innerHTML = "";
    const duplicatedIcons = icons.concat(icons);
    duplicatedIcons.forEach(src => {
        const iconElement = document.createElement("div");
        iconElement.classList.add("icon");
        iconElement.innerHTML = `<img src="${src}" alt="">`;
        iconContainer.appendChild(iconElement);
    });
}

createIcons();

//

//


function toggleMenu() {
    document.body.classList.toggle('menu-open');
}


//

//

const texts = ["Dancer", "Graphic Designer", "IT Technician"];
        let index = 0;
        const textElement = document.getElementById("dynamicText");

        function changeText() {
            textElement.classList.remove("show");
            setTimeout(() => {
                index = (index + 1) % texts.length;
                textElement.textContent = texts[index];
                textElement.classList.add("show");
            }, 1000);
        }
        
        textElement.classList.add("show");
        setInterval(changeText, 3000);


//

//

