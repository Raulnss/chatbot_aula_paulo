var nada = false;
function activar() {
    if (nada == true) {
        nada = false
    } else {
        nada = true
    }
}
function lupa() {
    if (nada == true) {
        var para = window.document.getElementById('paragrafo').style.fontSize = "130%";
    }
}
function lupam() {
    var para = window.document.getElementById('paragrafo').style.fontSize = "100%";
}