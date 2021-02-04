const canvas = document.getElementById("jsCanvas");
const context = canvas.getContext("2d");

let painting = false;

const onMouseMove = (event) => {
    const { offsetX: x, offsetY: y } = event;
};

const onMouseDown = (event) => {
    painting = true;
};

const onMouseUp = (event) => {
    stopPainting();
};

const stopPainting = () => {
    painting = false;
};

if (canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", onMouseDown);
    canvas.addEventListener("mouseup", onMouseUp);
    canvas.addEventListener("mouseleave", stopPainting);
}
