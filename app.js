const canvas = document.getElementById("jsCanvas");
const context = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");
const rangeBar = document.getElementById("jsRange");
const fillButton = document.getElementById("jsMode");
const saveButton = document.getElementById("jsSave");

canvas.width = 700;
canvas.height = 700;

context.fillStyle = "white";
context.fillRect(0, 0, 700, 700);

context.strokeStyle = "#2c2c2c";
context.fillStyle = "#2c2c2c";
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
    context.fillStyle = event.target.style.backgroundColor;
};

const handleRangeChange = (event) => {
    context.lineWidth = rangeBar.value;
};

const handleModeClick = (event) => {
    if (isFill) {
        fillButton.innerText = "Fill";
    } else {
        fillButton.innerText = "Draw";
    }
    isFill = !isFill;
};

const handleClick = (event) => {
    const { offsetX: x, offsetY: y } = event;

    if (isFill) {
        context.fillRect(0, 0, 700, 700);
    } else {
        // context.fillRect(x, y, context.lineWidth, context.lineWidth);
        context.fillRect(x, y, context.lineWidth, context.lineWidth);
    }
};

const handleSave = () => {
    const temp = document.createElement("a");
    temp.href = canvas.toDataURL("image/jpeg");
    temp.download = "noName.png";
    temp.click();
};

const init = () => {
    if (canvas) {
        canvas.addEventListener("mousemove", onMouseMove);
        canvas.addEventListener("mousedown", startPainting);
        canvas.addEventListener("mouseup", stopPainting);
        canvas.addEventListener("mouseleave", stopPainting);
        canvas.addEventListener("click", handleClick);
        canvas.addEventListener("contextmenu", (event) => event.preventDefault());
    }

    if (rangeBar) {
        rangeBar.addEventListener("input", handleRangeChange);
    }

    if (fillButton) {
        fillButton.addEventListener("click", handleModeClick);
    }

    if (saveButton) {
        saveButton.addEventListener("click", handleSave);
    }

    Array.from(colors).forEach((color) => {
        color.addEventListener("click", handleColorChange);
    });
};

init();
