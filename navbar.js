let logo = React.createElement("img", { className: "logo", src: "/logo.png" });
let a1 = React.createElement("a", { className: "link" }, "About Me");
let a2 = React.createElement("a", { className: "link" }, "Portfolio");
let a3 = React.createElement("a", { className: "link" }, "Services");
let a4 = React.createElement("a", { className: "link" }, "Blog");
let a5 = React.createElement("a", { className: "link" }, "Book A Call ↗");
let div1 = React.createElement("div", { className: "links" }, [
  logo,
  a1,
  a2,
  a3,
  a4,
]);
let div2 = React.createElement("div", { className: "call" }, a5);

let navbar = React.createElement("nav", null, [div1, div2]);

export default navbar;
