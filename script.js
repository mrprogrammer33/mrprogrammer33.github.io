function aceptar() {
    document.getElementById("gif").style.display = "block";
}

function moverNo() {
    let btnNo = document.getElementById("no");
    let x = Math.random() * (window.innerWidth - btnNo.offsetWidth);
    let y = Math.random() * (window.innerHeight - btnNo.offsetHeight);
    btnNo.style.left = x + "px";
    btnNo.style.top = y + "px";

    let newSize = parseInt(window.getComputedStyle(btnNo).fontSize) - 2;
    btnNo.style.fontSize = newSize + "px";

    if (newSize <= 5) {
        btnNo.style.display = "none"; // Ocultar el botón cuando sea muy pequeño
    }
}
