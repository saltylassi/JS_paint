const canvas = document.getElementById("jsCanvas");
const context = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");
const rangeBar = document.getElementById("jsRange");
const fillButton = document.getElementById("jsMode");

canvas.width = 700;
canvas.height = 700;

context.strokeStyle = "#2c2c2c";
context.lineWidth = "2.5";

let painting = false;
let isFill = false;

const onMouseMove = (event) => {
    const { offsetX: x, offsetY: y } = event;
    if (!painting) {
        context.beginPath();
        context.moveTo(x, y);
    } else {
        context.lineTo(x, y);
        context.stroke();
    }
};

const startPainting = () => {
    painting = true;
};

const stopPainting = () => {
    painting = false;
};

const handleColorChange = (event) => {
    context.strokeStyle = event.target.style.backgroundColor;
};

const handleRangeChange = (event) => {
    context.lineWidth = rangeBar.value;
};

const handleModeClick = (event) => {
    if (isFill) {
        fillButton.innerText = "Draw";
    } else {
        fillButton.innerText = "Fill";
    }

    isFill = !isFill;
};

if (canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
}

if (rangeBar) {
    rangeBar.addEventListener("input", handleRangeChange);
}

if (fillButton) {
    fillButton.addEventListener("click", handleModeClick);
}

Array.from(colors).forEach((color) => {
    color.addEventListener("click", handleColorChange);
});
