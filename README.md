# Web Components Demo

A learning project demonstrating the fundamentals of **Web Components** using vanilla JavaScript and TailwindCSS for styling.

## 📋 Overview

This project showcases how to create reusable custom HTML elements using the Web Components API. It includes a practical example of a custom button component (`<primary-button>`) that demonstrates key Web Components concepts:

- **Custom Elements**: Defining new HTML tags
- **Shadow DOM**: Encapsulating component styles and markup
- **Templates**: Reusable HTML structures
- **Slots**: Content projection for flexible component composition

## 🚀 Features

- ✨ Custom `<primary-button>` web component
- 🎨 Styled with TailwindCSS
- 🔄 Reusable and encapsulated components
- 📦 No framework dependencies - pure vanilla JavaScript
- 🎯 Named slots for icon customization

## 🛠️ Tech Stack

- **HTML5**: Structure and custom elements
- **JavaScript (ES6+)**: Web Components API
- **TailwindCSS**: Utility-first CSS framework
- **Shadow DOM**: Style and DOM encapsulation

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/pablo-learn/web-components.git
cd web-components
```

2. Install dependencies:
```bash
npm install
```

3. Build TailwindCSS:
```bash
npm run dev
```

This will watch for changes and automatically rebuild the CSS output.

## 🎯 Usage

### Running the Project

Simply open `index.html` in a modern web browser that supports Web Components:

- Chrome 53+
- Opera 40+
- Safari 10+
- Firefox 59+

Or use a local development server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js (http-server)
npx http-server
```

Then navigate to `http://localhost:8000` in your browser.

### Using the Button Component

The `<primary-button>` component can be used in your HTML like any standard element:

```html
<!-- Basic button -->
<primary-button>
  Click Me
</primary-button>

<!-- Button with custom icon -->
<primary-button>
  <span slot="icon">🤷‍♂️</span>
  AWESOME
</primary-button>
```

## 📁 Project Structure

```
web-components/
├── Button.js           # Custom button web component
├── index.html          # Demo page
├── input.css           # TailwindCSS input file
├── output.css          # Generated TailwindCSS output
├── tailwind.config.js  # TailwindCSS configuration
├── package.json        # Project dependencies and scripts
├── favicon.svg         # Site favicon
└── README.md           # This file
```

## 🔍 Component Details

### Primary Button Component

The `<primary-button>` component demonstrates:

- **Shadow DOM**: Encapsulated styling that doesn't leak to the rest of the page
- **Slots**: 
  - Named slot `icon` for custom icons
  - Default slot for button text
- **Event Handling**: Click event listener
- **TailwindCSS Integration**: Styled with utility classes

**Component Code Structure:**
```javascript
class Button extends HTMLElement {
  constructor() {
    super();
    // Create shadow root
    // Define template with slots
    // Attach event listeners
  }
}

customElements.define("primary-button", Button);
```

## 🎨 Customization

### Modifying Styles

The button uses TailwindCSS classes. To modify the appearance:

1. Edit the template in `Button.js`
2. Update the class names with desired TailwindCSS utilities
3. Rebuild the CSS with `npm run dev`

### Creating New Components

Follow the pattern in `Button.js`:

1. Create a new class extending `HTMLElement`
2. Define your template with HTML and styles
3. Attach a shadow root
4. Register the custom element with `customElements.define()`

## 📚 Learning Resources

- [MDN Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components)
- [Custom Elements v1](https://html.spec.whatwg.org/multipage/custom-elements.html)
- [Shadow DOM v1](https://dom.spec.whatwg.org/#shadow-trees)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)

## 🤝 Contributing

This is a learning project, but contributions are welcome! Feel free to:

- Report bugs
- Suggest new component examples
- Improve documentation
- Add new features

## 📝 License

ISC

## 🔗 Links

- **Repository**: [github.com/pablo-learn/web-components](https://github.com/pablo-learn/web-components)
- **Issues**: [Report a bug](https://github.com/pablo-learn/web-components/issues)

---

**Happy coding!** 🚀 Explore the power of Web Components and build your own reusable UI elements.
