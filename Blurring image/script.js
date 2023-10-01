var bg = document.querySelector(".bg");
var perText = document.querySelector(".loading-text");


let load = 0;
var timer = setInterval(calculate, 30);

function calculate() {
    load++;
    if (load > 99) {
        clearInterval(timer);
    }

    perText.innerHTML = `${load}%`
    perText.style.opacity = scale(load, 0, 100, 1, 0); //scale number(load) from 0 to 100 and map it with range from 1 to 0 (cause opacity value is backwards)
    bg.style.filter = `blur(${scale(load, 0, 100, 0, 30)}px)`
}

//https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers

function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}
