/*===Hero Typewriter Effect Stuff here*/

const texts= ["Hola!","Bonjour!","Hallo!","Ciao!","こんにちは!","안녕하세요!","مرحبا!"];
const typingSpeed= 150;
const deletingSpeed= 75;
const delayBetweenTexts= 1000;
const delayAfterDelete= 500;


let textindex=0;
let charindex=0;
let isDeleting=false;
const el = document.getElementById("typewriter");

function type(){
    const currentText= texts[textindex];
if (isDeleting) {
    el.textContent = currentText.substring(0, charindex--);
    if (charindex < 0) {
        isDeleting = false;
        textindex = (textindex + 1) % texts.length;
        setTimeout(type, delayAfterDelete);
        return;
    }
    setTimeout(type, deletingSpeed);
}else {
    el.textContent = currentText.substring(0, charindex++);
    if (charindex > currentText.length) {
        isDeleting = true;
        setTimeout(type, delayBetweenTexts);
        return;
        }
        setTimeout(type, typingSpeed)
}
}

type();