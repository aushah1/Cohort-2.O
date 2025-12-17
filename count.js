let count = (count, text) => {
  let number = React.createElement("h3", { className: "number" }, count);
  let para = React.createElement("p", { className: "text" }, text);
  return React.createElement("div", { className: "count" }, [number, para]);
};

export default count;
