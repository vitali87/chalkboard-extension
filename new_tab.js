document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("chalkboard");
  const ctx = canvas.getContext("2d");
  let drawing = false;
  let isDarkMode = false;

  // Function to resize canvas to fill the window
  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    // Restore saved drawing after resizing
    const savedDrawing = localStorage.getItem("chalkboard_drawing");
    if (savedDrawing) {
      const img = new Image();
      img.src = savedDrawing;
      img.onload = () => {
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      };
    }
  }

  // Initial canvas resize
  resizeCanvas();

  // Adjust canvas size on window resize
  window.addEventListener('resize', resizeCanvas);

  // Set initial drawing settings (Light mode by default)
  ctx.strokeStyle = "black";
  ctx.lineWidth = 2;
  ctx.lineCap = "round";
  canvas.style.backgroundColor = "white";

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

  // Function to invert canvas colors when switching modes
  function invertCanvasColors() {
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;

    // Loop through each pixel and invert the colors
    for (let i = 0; i < data.length; i += 4) {
      data[i] = 255 - data[i];        // Red
      data[i + 1] = 255 - data[i + 1];  // Green
      data[i + 2] = 255 - data[i + 2];  // Blue
    }
    
    // Put the modified pixel data back to the canvas
    ctx.putImageData(imageData, 0, 0);
  }

  // Toggle between Light and Dark mode
  const toggleModeButton = document.getElementById("toggleModeButton");
  toggleModeButton.addEventListener("click", () => {
    // Save the current drawing before switching modes
    const image = canvas.toDataURL();
    
    // Switch to Dark mode
    if (!isDarkMode) {
      isDarkMode = true;
      canvas.style.backgroundColor = "black";
      ctx.strokeStyle = "white";
      invertCanvasColors();  // Invert the colors of the drawing
      toggleModeButton.textContent = "Switch to Light Mode";
    } 
    // Switch to Light mode
    else {
      isDarkMode = false;
      canvas.style.backgroundColor = "white";
      ctx.strokeStyle = "black";
      invertCanvasColors();  // Invert the colors of the drawing back
      toggleModeButton.textContent = "Switch to Dark Mode";
    }
  });
});
