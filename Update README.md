# 🖥️ Virtual DOM Demo

This project is a simple demonstration of virtual DOM implementation. It showcases how to manage component updates and re-rendering using a virtual DOM approach without relying on external libraries or frameworks.

## 🗂️ Overview

In this demo, we create a minimal virtual DOM implementation to render and update a list of emojis. The project consists of a few key files:

* **`app.js`**: Contains the main logic for rendering the application and updating the state.
* **`vdom.js`**: Implements the virtual DOM diffing and rendering functions.
* **`component.js`**: Provides a base class for components.

## 🏗️ Project Structure

### `app.js`

The main application logic is contained in this file. It includes:

1. **State Management**: The state is managed externally to ensure proper updates. We use a global variable `peopleState` to store the list of emojis.
    
2. **Functional Components**:
    
    * **`App`**: The root component that renders the `People` component.
    * **`People`**: Displays a list of emojis and updates the list every second.
3. **Rendering**:
    
    * **`render`**: A function that initializes rendering and updates the DOM based on virtual nodes.
4. **Updating List**:
    
    * **`updateList`**: A function that adds one new emoji to the list every second and triggers a re-render.

### `vdom.js`

This file contains the core virtual DOM implementation:

1. **`renderNode`**:
    
    * Converts virtual nodes to actual DOM elements.
    * Handles both string nodes (text) and functional components.
2. **`diff`**:
    
    * Compares the existing DOM with a new virtual node and updates the DOM accordingly.
    * Handles cases where the number of children changes or components need to be updated.
3. **`renderComponent`**:
    
    * Renders a component by calling its function, generating the virtual DOM, and updating the actual DOM.


## 🚀 Usage

1. **Clone the Repository**:
    
    ```bash
    git clone https://github.com/Shaban-Eissa/lightweight-virtual-dom
    cd lightweight-virtual-dom
    ```
    
2. **Set Up the Project**:
    
    * Ensure you have a basic HTML file with a `#root` element where the application will be rendered.
    
    Example `index.html`:
    
    ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Lightweight VDOM</title>
    </head>
    <body>
      <div id="root"></div>
      <script src="app.js"></script>
    </body>
    </html>
    ```
    
3. **Open the Project**:
    
    * Open `index.html` in your web browser to see the demo in action.

## 🛠️ How It Works

* **Virtual DOM**: The virtual DOM is a lightweight representation of the actual DOM. Changes to the virtual DOM are compared with the current DOM (diffing), and only the necessary updates are made to the actual DOM.
    
* **Functional Components**: Components are implemented as functions that return virtual nodes. They handle rendering and state updates without requiring a class-based approach.
    
* **State Management**: State is managed externally in this demo to simplify the functional component implementation. Updates to the state trigger re-rendering of the affected components.
    

## ⚠️ Notes

* **Performance**: This demo is a simplified version of what you might find in libraries like React. For production use, consider using established libraries and frameworks that handle many edge cases and optimizations.
    
* **Extensibility**: The current implementation can be extended to support more complex features such as events, more advanced state management, and other component lifecycle methods.
    
