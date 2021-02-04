const canvas = document.getElementById("jsCanvas");
const context = canvas.getContext("2d");

canvas.width = 700;
canvas.height = 700;

context.strokeStyle = "#2c2c2c";
context.lineWidth = "2.5";

let painting = false;

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

if (canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
}
