
let colors = [];

let cuadrados = document.querySelectorAll(".square");

let pickedColor;

let colorDisplay = document.querySelector("#colorDisplay");

let clickedColor;

let message = document.querySelector("#message");

let h1 = document.querySelector("h1");
colors = generateRandomColors(6);
let reset = document.querySelector("#reset");
let dificil = document.querySelector("#dificil");
let facil = document.querySelector("#facil");
let cantidadColores;



for (let i = 0; i < cuadrados.length; i++) {
    cuadrados[i].style.backgroundColor = colors[i];
    pickedColor = pickColor();
    colorDisplay.innerHTML = pickedColor;

    cuadrados[i].addEventListener("click", function () {
     
        clickedColor = colors[i];

        if (pickedColor === clickedColor) {
        
            changeColors(pickedColor);
            message.textContent = "¡Correcto!";
            reset.textContent = "Quieres Jugar de Nuevo";
            h1.style.backgroundColor = clickedColor;
        } else {
            cuadrados[i].style.backgroundColor = "#232323";
            message.textContent = "Inténtalo nuevamente";
        }
    })
};


function changeColors(color) {
    for (let i = 0; i < cuadrados.length; i++) {
        
        cuadrados[i].style.backgroundColor = color;
    }
}

function pickColor() {
    var pickRandomColor = Math.floor(Math.random() * colors.length);

    pickedColor = colors[pickRandomColor];
    return pickedColor;

};


function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    return ("rgb(" + r + ", " + g + ", " + b + ")");
};

function generateRandomColors(cantidadColores) {
    let newColors = [];
    for (let i = 0; i < cantidadColores; i++) {
        newColors.push(randomColor());
    }
    console.log(newColors);
    return newColors;
}

reset.addEventListener("click", function () {
    colors = generateRandomColors(cantidadColores);
    pickedColor = pickColor();
    colorDisplay.innerHTML = pickedColor;
    for (i = 0; i < cuadrados.length; i++) {
    
            cuadrados[i].style.backgroundColor = colors[i];
        
    }
    message.textContent = "";
    reset.textContent = "Nuevos Colores";

})

Hard.addEventListener("click", function () {
    Hard.classList.add("selected");
    Easy.classList.remove("selected");
    cantidadColores = 6;
    colors = generateRandomColors(cantidadColores);
    pickedColor = pickColor();
    colorDisplay.innerHTML = pickedColor;
    for (i = 0; i < cuadrados.length; i++) {
        if (colors[i]) {
            cuadrados[i].style.backgroundColor = colors[i];
            cuadrados[i].style.display= "block";
        } 
    }
    message.textContent = "";
    reset.textContent = "Nuevos Colores";
})

Easy.addEventListener("click", function () {
    Hard.classList.remove("selected");
    Easy.classList.add("selected");
    cantidadColores = 3;
    colors = generateRandomColors(cantidadColores);
    pickedColor = pickColor();
    colorDisplay.innerHTML = pickedColor;
    for (i = 0; i < cuadrados.length; i++) {
        if (colors[i]) {
            cuadrados[i].style.backgroundColor = colors[i];
        } else {
            cuadrados[i].style.display = "none";
        }
    }
    message.textContent = "";
    reset.textContent = "Nuevos Colores";

})






