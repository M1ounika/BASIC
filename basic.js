// Select button and box
const button = document.getElementById("changeColorBtn");
const box = document.getElementById("colorBox");

// Function to generate random color
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Add click event to button
button.addEventListener("click", () => {
  const randomColor = getRandomColor();
  box.style.backgroundColor = randomColor;
});
