
const okBtn = document.getElementById("ok");
const tdCell = document.getElementById("cell");

okBtn.addEventListener("touchstart", (e) => {
    e.preventDefault();
    e.stopPropagation();
    tdCell.innerText = "ok";
});


