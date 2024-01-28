const btnLeft = document.querySelector("#btn_left"),
      btnRight = document.querySelector("#btn-right"),
      slider = document.querySelector("#slider"),
      sliderSection = document.querySelectorAll(".slider-section"),
      btnReset = document.querySelector(".reset_btn"),
      btnPower = document.querySelector(".start_btn");

let operacion = 0,
    counter = 0,
    widthImg = 100 / sliderSection.length,
    consolaEncendida = true;

btnLeft.addEventListener("click", e => moveToLeft());
btnRight.addEventListener("click", e => moveToRight());
btnReset.addEventListener("click", e => resetConsole());
btnPower.addEventListener("click", e => togglePower());

function resetConsole() {
    counter = 0;
    operacion = 0;
    slider.style.transform = `translate(-${operacion}%)`;
    slider.style.transition = "none";
    updateConsoleState();
}

function moveToRight() {
    if (!consolaEncendida) return;
    if (counter >= sliderSection.length-1) {
        counter = 0;
        operacion = 0;
        slider.style.transform = `translate(-${operacion}%)`;
        slider.style.transition = "none";
        return;
    } 
    counter++;
    operacion = operacion + widthImg;
    slider.style.transform = `translate(-${operacion}%)`;
    slider.style.transition = "all ease .6s";
    updateConsoleState();
}  

function moveToLeft() {
    if (!consolaEncendida) return;
    counter--;
    if (counter < 0 ) {
        counter = sliderSection.length-1;
        operacion = widthImg * (sliderSection.length-1);
        slider.style.transform = `translate(-${operacion}%)`;
        slider.style.transition = "none";
        return;
    } 
    operacion = operacion - widthImg;
    slider.style.transform = `translate(-${operacion}%)`;
    slider.style.transition = "all ease .6s";
    updateConsoleState();
}

function togglePower() {
    consolaEncendida = !consolaEncendida;
    updateConsoleState();
}

function updateConsoleState() {
    if (consolaEncendida) {
        slider.style.filter = "brightness(100%)";
        document.querySelector('.consola').classList.remove('apagada');
    } else {
        slider.style.filter = "brightness(5%)";
        document.querySelector('.consola').classList.add('apagada');
    }
}


