import navbar from "./navbar.js";
import main from "./main.js";

const root = ReactDOM.createRoot(document.querySelector("#root"));
let web = React.createElement("div", { className: "web" }, [navbar, main]);

root.render(web);
