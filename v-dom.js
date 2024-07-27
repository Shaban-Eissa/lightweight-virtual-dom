const renderNode = (vnode) => {
  let el;

  const { nodeName, attributes, children } = vnode;

  if (typeof vnode === "string") return document.createTextNode(vnode);

  if (typeof nodeName === "string") {
    el = document.createElement(nodeName);

    for (let key in attributes) {
      el.setAttribute(key, attributes[key]);
    }
  } else if (typeof nodeName === "function") {
    // Handle functional components
    const component = nodeName();
    el = renderNode(component);
  }

  (children || []).forEach((child) => el.appendChild(renderNode(child)));

  return el;
};

export const renderComponent = (componentFn, parent) => {
  const newVNode = componentFn();
  parent.innerHTML = ""; // Clear existing content
  const newEl = renderNode(newVNode);
  parent.appendChild(newEl);
};

export const diff = (dom, vnode, parent) => {
  if (dom) {
    if (typeof vnode === "string") {
      if (dom.nodeValue !== vnode) {
        dom.nodeValue = vnode;
      }
      return dom;
    }
    if (typeof vnode.nodeName === "function") {
      const component = vnode.nodeName();
      const rendered = renderNode(component);
      diff(dom, rendered);
      return dom;
    }

    // Handle children
    if (vnode.children.length !== dom.childNodes.length) {
      dom.appendChild(renderNode(vnode.children[vnode.children.length - 1]));
    }

    dom.childNodes.forEach((child, i) => diff(child, vnode.children[i]));

    return dom;
  } else {
    const newDom = renderNode(vnode);
    parent.appendChild(newDom);
    return newDom;
  }
};
