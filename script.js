let menu = document.querySelector(".menu");
let img = document.querySelector(".battery");
let time = document.querySelector(".time");
let date = document.querySelector(".date");
let start = document.querySelector(".start");
let container = document.querySelector(".container");
let newFolder = document.querySelector(".new");
let refresh = document.querySelector(".refresh");
let left = document.querySelector(".left");
navigator.getBattery().then((battery) => {
  battery.charging
    ? (img.src = "/assets/battery-on.png")
    : (img.src = "/assets/battery-off.png");
  battery.addEventListener("chargingchange", () => {
    battery.charging
      ? (img.src = "/assets/battery-on.png")
      : (img.src = "/assets/battery-off.png");
  });
});
document.addEventListener("contextmenu", (e) => {
  e.preventDefault();
  menu.style.top = e.clientY + "px";
  menu.style.left = e.clientX + "px";
  menu.style.display = "block";
});
document.addEventListener("click", () => {
  menu.style.display = "none";
  container.style.display = "none";
});

function showDateTime() {
  const now = new Date();

  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");

  let hours = now.getHours();
  const minutes = String(now.getMinutes()).padStart(2, "0");

  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;

  time.innerHTML = `${hours}:${minutes} ${ampm}`;
  date.innerHTML = `${day}-${month}-${year}`;
}

showDateTime();
setInterval(showDateTime, 1000);

start.addEventListener("click", () => {
  container.style.display =
    container.style.display === "block" ? "none" : "block";
});
refresh.addEventListener("click", () => {
  location.reload();
});
let count = 1;
newFolder.addEventListener("click", () => {
  let item = document.createElement("div");
  item.className = "item";
  item.innerHTML = ` 
  <div class="item">
  <img src="/assets/folder.png" alt="" />
  <p>Folder${count}</p>
  </div>`;
  left.appendChild(item);
  count++;
});
