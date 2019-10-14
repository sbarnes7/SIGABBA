// JavaScript source code
function sendMessage() {
    var input = document.getElementById("mes").value;
    var mode = document.getElementById("mod").value;
    document.getElementById("output-box").innerHTML = input + mode;
}