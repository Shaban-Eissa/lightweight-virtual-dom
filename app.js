import h from "./hyperscript.js";
import { renderComponent } from "./v-dom.js";

const getRandomItemFromArray = (list) => {
  return list[Math.floor(Math.random() * list.length)];
};

// State management for People component
let peopleState = {
  list: ["🕺", "💃", "😀", "🙋‍", "💼", "🕶️️", "👏", "🤳", "🕵️", "👩‍🔧"],
};

// Variable to track if the interval has been set
let intervalSet = false;

const App = () => {
  return h("div", { class: "app" }, h("h1", null, "Simple vDOM"), h(People));
};

const People = () => {
  const updateList = () => {
    // Add only one new emoji each time updateList is called
    const newEmoji = getRandomItemFromArray(peopleState.list);
    peopleState.list = [...peopleState.list, newEmoji];
    renderComponent(App, document.querySelector("#root"));
  };

  // Set interval to update the list every second, but only once
  if (!intervalSet) {
    setInterval(updateList, 1000);
    intervalSet = true; // Prevent multiple intervals from being set
  }

  return h("ul", null, ...peopleState.list.map((item) => h("li", null, item)));
};

const render = (vnode, parent) => {
  const newVNode = vnode();
  diff(parent.firstChild, newVNode, parent);
};

const rootElement = document.querySelector("#root");
renderComponent(App, rootElement);
