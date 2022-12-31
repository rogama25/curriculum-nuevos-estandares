function modalAssistant() {
    event.preventDefault();
    var elem = document.getElementById("modalAssistant")
    elem.style.display = "flex";
    document.body.style.overflow = "hidden";
}

function modalSensors() {
    event.preventDefault();
    var elem = document.getElementById("modalSensors")
    elem.style.display = "flex";
    document.body.style.overflow = "hidden";
}

function modalCloseAssistant() {
    event.preventDefault();
    var elem = document.getElementById("modalAssistant")
    elem.style.display = "none";
    document.body.style.overflow = "auto";
}

function modalCloseSensors() {
    event.preventDefault();
    var elem = document.getElementById("modalSensors")
    elem.style.display = "none";
    document.body.style.overflow = "auto";
}