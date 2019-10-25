//.canvas
//.Hex
//button
const hexValues = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
const canvasBcg = document.querySelector('.canvas');
const hex = document.querySelector('.Hex');
const colorBtn = document.querySelector('button');

colorBtn.addEventListener('click', changeColor);

function changeColor() {
    let hexCode = '#';

    for (i=0; i < 6; i++) {
        let random = Math.floor(Math.random() * hexValues.length);
        hexCode += hexValues[random];
    }
    canvasBcg.style.background = hexCode;
    hex.innerHTML = hexCode;
}