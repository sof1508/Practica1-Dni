const letters = new Array("T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B",
    "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E");


const inputNumber = document.getElementById("number");
const inputLetter = document.getElementById("letter");
const h1 = document.getElementById("h1");
const h3 = document.getElementById("h3");

// Enter event
inputNumber.addEventListener('keypress', event => {
    if (event.key === "Enter") {
        main();
    }
});

inputLetter.addEventListener('keypress', event => {
    if (event.key === "Enter") {
        main();
    }
});



function main() {
    invisible();
    let number = inputNumber.value;
    let letter = inputLetter.value;

    const [error, text] = checkInputs(number, letter);

    if (error) {
        alert(text);
        document.getElementById("myForm").reset();
    } else {
        checkResto(number, letter.toUpperCase());
    }

}

function checkInputs(number, letter) {
    let error = false;
    let text = "";

    if (number.length != 8) {
        text += "Longitud del campo número del Dni incorrecta: Debe introducir un número de longitud 8.\n"
        error = true;
    }
    if (letter.length != 1) {
        text += "Longitud del campo letra del Dni incorrecta: Debe introducir solo 1 letra.\n"
        error = true;
    }
    if (number.length > 0 && !/^[0-9]+$/.test(number)) {
        text += "El campo número del Dni solo acepta carácteres númericos.\n"
        error = true;
    }
    if (letter.length > 0 && !/^[a-zA-Z]+$/.test(letter)) {
        text += "El campo letra del Dni solo acepta letras.\n"
        error = true;
    }


    return [error, text];
}

function checkResto(number, letter) {
    let resto = number % 23;

    h1.innerHTML = `La letra resultante del dni ${number} es ${letters[resto]} `;
    h1.classList.remove("invisible");

    if (letter == letters[resto]) {
        h3.innerHTML = "La letra introducida es correcta";
        h3.classList.replace("invisible", "green");
    } else {
        h3.innerHTML = "La letra introducida es incorrecta";
        h3.classList.replace("invisible", "red");;
    }

}

function invisible() {
    h1.classList.add("invisible");
    h3.classList = [];
    h3.classList.add("invisible");
}