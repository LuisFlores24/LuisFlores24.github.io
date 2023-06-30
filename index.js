// ENCRYPTER //
function encrypter(){
    let text = document.getElementById("enBox").value.trim();
    let titleMessag = document.getElementById("titleMessage");
    let Message = document.getElementById("paragraph");
    let img = document.getElementById("nfImg");

    let encryptedText = text
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat")
    
    if (text.length != 0){
        document.getElementById("enBox").value = encryptedText;
        titleMessag.textContent = "Message found";
        Message.textContent = "Successful encrypted text";
        img.src = "./img/encriptado.svg";
    } else {
      img.src = "./img/notFound.svg"
      titleMessag.textContent = "No message was found";
      Message.textContent = "Put the text you want to encrypt or decrypt.";
      swal("Ooops!", "You must enter a text 😐", "warning");
    }
}

// DECRYPTER //
function decrypter(){
    let text = document.getElementById("enBox").value.trim();
    let titleMessag = document.getElementById("titleMessage");
    let Message = document.getElementById("paragraph");
    let img = document.getElementById("nfImg");

    let decryptedText = text
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u")
    
    if (text.length != 0){
        document.getElementById("enBox").value = decryptedText;
        titleMessag.textContent = "(⊙_◎)";
        Message.textContent = "Successful decrypted text （￣︶￣）↗　";
        img.src = "./img/desencriptado.svg"
    } else {
      img.src = "./img/notFound.svg"
      titleMessag.textContent = "No message was found";
      Message.textContent = "Put the text you want to encrypt or decrypt.";
      swal("Ooops!", "You must enter a text 😐", "warning");
    }
}

// COPY FUNCTION //
function copy(){
    let text = document.getElementById("enBox").value.trim();
    let copiedText = document.getElementById("enBox").value;
    let titleMessag = document.getElementById("titleMessage");
    let Message = document.getElementById("paragraph");
    let img = document.getElementById("nfImg");
    
    if (text.length == 0){
        img.src = "./img/notFound.svg"
        titleMessag.textContent = "No message was found";
        Message.textContent = "Put the text you want to encrypt or decrypt.";
        swal("Ooops!", "You must enter a text 😐", "warning");
    } else {
      navigator.clipboard.writeText(copiedText)
      .then(() => {
        img.src = "./img/copy.svg";
        titleMessag.textContent = "Copied to clipboard";
        Message.textContent = "The text has been copied successfully, you can paste it somewhere else!"
      })

      .catch(() => {
        titleMessag.textContent = "Error copying text to clipboard";
        console.error("Error copying text to clipboard:", error);
      });
    }
}