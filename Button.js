class Button extends HTMLElement {
    constructor() {
        super();
        
        const template = document.createElement("template");
        template.innerHTML = `
        <header>
          <script src="https://cdn.tailwindcss.com"></script>
        </header>
        <style>
        @import "https://cdn.tailwindcss.com";
         /*  button {
            border: none;
            color: white;
            padding: 15px 32px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 16px;
            cursor: pointer;
            background-color: green;
          } */
        </style>
        <button class="${this.getAttribute('class') || ''}">
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

customElements.define("button-component", Button);
