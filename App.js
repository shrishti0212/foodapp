const parent =React.createElement(
    "div",
    {id:"parent"},
    React.createElement("div",{id:"child"},
        React.createElement("div",{},"I am h1 tag")
    )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent); 
console.log(parent);

 