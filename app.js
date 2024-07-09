let originals = ['a', 'e', 'i', 'o', 'u'];
let encripted_results = ['ai', 'enter', 'imes', 'ober', 'ufat'];

// Esta fucion recorre el texto original y encripta
// cada vocal encontrada utilizando su respectivo resultado encriptado
// si el caracter no es una vocal, entonces, simplemente, 
// se agrega el caracter directamente al texto resultante
function encript(text) {
    let result = '';
    let splittedText = text.toLowerCase().split('');
    splittedText.forEach((character) => {
        let foundIndex = originals.indexOf(character);
        if (foundIndex !== -1) {
            result += encripted_results[foundIndex];
        } else {
            result += character;
        }
    });
    return result;
}

// Dado que todos los resultados de la encriptación inician con la misma vocal
// que los originó (a --> ai, e --> enter,...), entonces, para desencriptar un texto,
// si  es que encontramos una vocal, sólo necesitamos tomar dicha vocal y, a continuación,
// buscarla en el arreglo de resultados, luego avanzar tantos espacios en el texto
// como sea la longitud del respectivo resultado encriptado de dicha vocal, teniendo 
// en cuenta que el loop for también incrementará el contador (i) en 1
function decript(text) {
    let result = '';
    let splittedText = text.split('');
    for(let i = 0; i < splittedText.length; i++) {
        let character = splittedText[i];
        let foundIndex = originals.indexOf(character);
        if (foundIndex !== -1) {
            result += character;
            i = i + encripted_results[foundIndex].length -1;
        } else {
            result += character;
        }
    }
    return result;
}

function validateText(e) {
    let text = e.value.trim();
    let emptyResultDiv = document.getElementById("empty-result-div");
    let notEmptyResultDiv = document.getElementById("not-empty-result-div");
    
    if (text.length > 0) {
        emptyResultDiv.style.display = "none";
        notEmptyResultDiv.style.display = "flex";
    } else {
        emptyResultDiv.style.display = "flex";
        notEmptyResultDiv.style.display = "none";
        document.getElementById("result_textarea").innerHTML = "";
    }
}

function encript_input_text() {
    let text = document.getElementById("input-text").value;
    let result = encript(text);
    document.getElementById("result_textarea").innerHTML = result;
}

function decript_input_text() {
    let text = document.getElementById("input-text").value;
    let result = decript(text);
    document.getElementById("result_textarea").innerHTML = result;
}

function copyToClipboard() {
    navigator.clipboard.writeText(document.getElementById("result_textarea").innerHTML);
}