class Button extends HTMLElement {
    constructor() {
        super();
        const template = document.createElement("template");
        template.innerHTML = `
        <header>
          <link rel="stylesheet" href="./output.css" />
        </header>
        <style>
        </style>
        <button class="bg-rose-400 hover:bg-rose-600 text-white font-bold py-2 px-4 rounded ${this.getAttribute('class') || ''}">
          <slot name="icon">
            ❤️
          </slot>
          <slot>slot default</slot>
        </button>
        `;

        var shadowRoot = this.attachShadow({ mode: "open" });
        shadowRoot.appendChild(template.content.cloneNode(true));

        // on click
        const button = this.shadowRoot.querySelector("button").addEventListener("click", this.handleClick);
      }
      handleClick(e) {
        console.log('This button was clicked');
      }
}

customElements.define("primary-button", Button);
