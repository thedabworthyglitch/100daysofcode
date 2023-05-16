// Selecting query
const button = document.querySelector("button");
const body = document.querySelector("body");

// Adding colors
const colors = ["blue", "green", "pink", "yellow", "red", "brown", "purple", "orange", "gold", "aqua", "white", "gray", "azure", "olive", "firebrick"];

// function for changing the background
function changeTheBackground() {
    const colorIndex = parseInt(Math.random() * colors.length)
    body.style.backgroundColor = colors[colorIndex];
};

// Adding event listener
button.addEventListener("click", changeTheBackground);