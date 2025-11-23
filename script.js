let keys = document.querySelectorAll(".key");
let cursor = document.querySelector(".cursor");

keys.forEach((key) => {
  key.addEventListener("click", () => {
    let audio = new Audio(`/audio/${key.id}.mp3`);
    audio.play();
  });
});

document.body.addEventListener("keydown", (dets) => {
  keys.forEach((key) => {
    if (key.id === dets.key && key.classList.contains("w-key")) {
      key.style.backgroundColor = "rgb(226, 222, 222)";
      key.style.transform = "scale(0.98)";
      setTimeout(() => {
        key.style.backgroundColor = "white";
        key.style.transform = "scale(1)";
      }, 300);
    } else if (key.id === dets.key && key.classList.contains("b-key")) {
      key.style.backgroundColor = "rgb(43, 43, 43)";
      key.style.transform = "scale(0.98)";
      setTimeout(() => {
        key.style.backgroundColor = "black";
        key.style.transform = "scale(1)";
      }, 300);
    }
  });
  let audio = new Audio(`/audio/${dets.key}.mp3`);
  if (audio) {
    audio.play();
  }
});

document.body.addEventListener("mousemove", (dets) => {
  cursor.style.top = dets.y + "px";
  cursor.style.left = dets.x + "px";
});
