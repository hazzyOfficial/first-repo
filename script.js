
// what does this line of code do?
const button = document.getElementById("box");

button.addEventListener("click", function(e) {
    alert("button has been clicked");
});

// addEventListener(type, listener, useCapture)


document.addEventListener("DOMContentLoaded", () => {
    const box = document.createElement("div");
    box.style.width = "50px";
    box.style.height = "50px";
    box.style.backgroundColor = "red";
    box.style.position = "absolute";
    box.style.left = "0px";
    document.body.appendChild(box);
    
    let position = 0;
    
    document.addEventListener("keydown", (event) => {
        if (event.key === "d") {
            position += 5;
            box.style.left = position + "px";
        }
    });
});