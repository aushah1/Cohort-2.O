let keys = document.querySelectorAll(".key");
let cursor = document.querySelector(".cursor");

keys.forEach((key) => {
  key.addEventListener("click", () => {
    let audio = new Audio(`/audio/${key.id}.mp3`);
    audio.play();
  });
});

document.body.addEventListener("keydown", (dets) => {
  let audio = new Audio(`/audio/${dets.key}.mp3`);
  if (audio) {
    audio.play();
  }
});

document.body.addEventListener("mousemove", (dets) => {
  cursor.style.top = dets.y + "px";
  cursor.style.left = dets.x + "px";
});
