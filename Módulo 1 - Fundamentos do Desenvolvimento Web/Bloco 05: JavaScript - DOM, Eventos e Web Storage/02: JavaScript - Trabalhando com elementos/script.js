// arquivo script.js

    // 1. Acesse o elemento elementoOndeVoceEsta.

console.log(document.getElementById('elementoOndeVoceEsta')) // Atenção


    // 2. Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.

let color =  document.getElementById('elementoOndeVoceEsta').parentElement;
color.style.color = 'green';

console.log(color); //Atenção linha verde

    // 3. Acesse o primeiroFilhoDoFilho e adicione um texto a ele.
let primeiroFilhoDoFilho = elementoOndeVoceEsta.firstElementChild;
primeiroFilhoDoFilho.innerText = 'bitch please'

//4. Acesse o primeiroFilho a partir de pai .
document.getElementById('pai').firstElementChild

//5. Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta .
document.getElementById('elementoOndeVoceEsta').previousElementSibling

//6. Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta .
document.getElementById('elementoOndeVoceEsta').nextSibling

// 7. Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.
document.getElementById('elementoOndeVoceEsta').nextElementSibling

// 8. Agora acesse o terceiroFilho a partir de pai.
document.getElementById('pai').lastElementChild.previousElementSibling
