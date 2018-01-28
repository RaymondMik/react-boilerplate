//import './style.css';
import './styles/app.sass';
import { returnLogo, returnText } from './components/module.js';
import NasaLogo from './assets/images/NASA_logo.png'

function renderLogo() {
    var img = document.createElement('img');

    img.src = returnLogo(NasaLogo);
    img.classList.add('imgClass');

    return img;
}

function renderParagraph() {
    var paragraph = document.createElement('p');

    paragraph.innerHTML = returnText();
    paragraph.classList.add('pClass');

    return paragraph;
}

document.body.appendChild(renderLogo());
document.body.appendChild(renderParagraph());