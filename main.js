import count from "./count.js";

let top = React.createElement("div", { className: "top" }, [
  count("+200", "Project completed"),
  count("+50", "startup raised"),
]);

let h1 = React.createElement("h1", { className: "title" }, "Hello");
let p = React.createElement("p", null, "— It's D.Nova a Design wizerd");
let middle = React.createElement("div", { className: "middle" }, [h1, p]);
let bottom = React.createElement(
  "div",
  { className: "bottom" },
  "Scroll down ↓"
);

let left = React.createElement("div", { className: "left" }, [
  top,
  middle,
  bottom,
]);
let img = React.createElement("img", { src: "/profile.png" });

let right = React.createElement("div", { className: "profile" }, img);

let year = React.createElement("h5", null, "2025");
let line = React.createElement("div", { className: "line" });
let work = React.createElement("h5", null, "Product designer");

let side = React.createElement("div", { className: "side" }, [
  year,
  line,
  work,
]);

let main = React.createElement("main", null, [side, left, right]);

export default main;
