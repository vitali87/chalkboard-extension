document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("chalkboard");
  const ctx = canvas.getContext("2d");
  let drawing = false;

  // Set drawing settings
  ctx.strokeStyle = "black";
  ctx.lineWidth = 2;
  ctx.lineCap = "round";

  // Restore the drawing from local storage if it exists
  const savedDrawing = localStorage.getItem("chalkboard_drawing");
  if (savedDrawing) {
    const img = new Image();
    img.src = savedDrawing;
    img.onload = () => {
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    };
  }

  // Mouse events to control drawing
  canvas.addEventListener("mousedown", (e) => {
    drawing = true;
    ctx.beginPath();
    ctx.moveTo(e.offsetX, e.offsetY);
  });

  canvas.addEventListener("mousemove", (e) => {
    if (drawing) {
      ctx.lineTo(e.offsetX, e.offsetY);
      ctx.stroke();
    }
  });

  canvas.addEventListener("mouseup", () => {
    drawing = false;
    ctx.closePath();
    saveDrawing(); // Save the drawing after each mouseup event
  });

  canvas.addEventListener("mouseleave", () => {
    drawing = false;
    ctx.closePath();
  });

  // Save the current canvas state to local storage
  function saveDrawing() {
    const image = canvas.toDataURL("image/png");
    localStorage.setItem("chalkboard_drawing", image);
  }

  // Save button functionality
  const saveButton = document.getElementById("saveButton");
  saveButton.addEventListener("click", () => {
    const image = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = image;
    link.download = "chalkboard_drawing.png";
    link.click();
  });

  // Clear button functionality
  const clearButton = document.getElementById("clearButton");
  clearButton.addEventListener("click", () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);  // Clear the entire canvas
    localStorage.removeItem("chalkboard_drawing"); // Remove the saved drawing from local storage
  });
});
