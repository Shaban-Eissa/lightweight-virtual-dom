import { diff } from "./v-dom.js";

export const renderComponent = (component, container) => {
  const newVNode = component();
  diff(container.firstChild, newVNode, container);
};
