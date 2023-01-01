function modalAssistant() {
    event.preventDefault();
    var elem = document.getElementById("modalAssistant")
    elem.style.display = "flex";
    document.body.style.overflow = "hidden";
    elem.classList.add("scale-up-center")
    setTimeout(() => {
        elem.classList.remove("scale-up-center")
    }, 400);
}

function modalSensors() {
    event.preventDefault();
    var elem = document.getElementById("modalSensors")
    elem.style.display = "flex";
    document.body.style.overflow = "hidden";
    elem.classList.add("scale-up-center")
    setTimeout(() => {
        elem.classList.remove("scale-up-center")
    }, 400);
}

function modalCloseAssistant() {
    event.preventDefault();
    var elem = document.getElementById("modalAssistant")
    document.body.style.overflow = "auto";
    elem.classList.add("scale-down-center")
    setTimeout(() => {
        elem.classList.remove("scale-down-center")
        elem.style.display = "none";
    }, 400);
}

function modalCloseSensors() {
    event.preventDefault();
    var elem = document.getElementById("modalSensors")
    document.body.style.overflow = "auto";
    elem.classList.add("scale-down-center")
    setTimeout(() => {
        elem.classList.remove("scale-down-center")
        elem.style.display = "none";
    }, 400);
}