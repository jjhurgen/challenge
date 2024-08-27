function encodeText() {
    let inputText = document.getElementById("input-text").value;
    let messageTitle = document.getElementById("message-title");
    let messageText = document.getElementById("message-text");
    let icon = document.getElementById("icon");
    let outputText = document.getElementById("output-text");
    let copyButton = document.getElementById("copy-button");

    // Reemplazar caracteres
    let encryptedText = inputText
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");

    // Mostrar el resultado y ocultar el icono
    if (inputText.length > 0) {
        outputText.value = encryptedText;
        messageTitle.textContent = "Texto encriptado con éxito!";
        messageText.textContent = "";
        icon.style.display = "none"; // Ocultar icono
        document.querySelector(".result-message").style.display = "flex";
        copyButton.style.display = "block"; // Mostrar botón copiar
    } else {
        swal("Error", "Debes ingresar algún texto para encriptar", "error");
    }
}

function decodeText() {
    let inputText = document.getElementById("input-text").value;
    let messageTitle = document.getElementById("message-title");
    let messageText = document.getElementById("message-text");
    let icon = document.getElementById("icon");
    let outputText = document.getElementById("output-text");
    let copyButton = document.getElementById("copy-button");

    // Reemplazar caracteres
    let decryptedText = inputText
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");

    // Mostrar el resultado y ocultar el icono
    if (inputText.length > 0) {
        outputText.value = decryptedText;
        messageTitle.textContent = "Texto desencriptado con éxito!";
        messageText.textContent = "";
        icon.style.display = "none"; // Ocultar icono
        document.querySelector(".result-message").style.display = "flex";
        copyButton.style.display = "block"; // Mostrar botón copiar
    } else {
        swal("Error", "Debes ingresar algún texto para desencriptar", "error");
    }
}

function copyText() {
    let outputText = document.getElementById("output-text");
    let inputText = document.getElementById("input-text");
    let copyButton = document.getElementById("copy-button");
    let icon = document.getElementById("icon");

    outputText.select();

    // Limpiar el textarea de resultado y volver a mostrar la imagen
    outputText.value = "";
    inputText.focus();
    copyButton.style.display = "none";
    icon.style.display = "block"; // Mostrar icono
    document.querySelector(".result-message").style.display = "none";
}
