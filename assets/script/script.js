const cells = document.querySelectorAll(".cell");
let currentPlayer = "X";
const player = document.getElementById("player");
const btn = document.getElementById("btn");
cells.forEach((cell) => {
  cell.addEventListener("click", handleClick);
});
function handleClick() {
  if (!this.textContent) {
    this.textContent = currentPlayer;
    this.classList.add(currentPlayer);
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    if (currentPlayer === "O") {
      player.innerText = "player O";
    } else {
      player.innerText = "player X";
    }
  }
}

btn.addEventListener("click", ()=>{
  location.reload()
});
