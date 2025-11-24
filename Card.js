class Card extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    console.time('Card connected');
    const template = document.createElement("template");
    template.innerHTML = `
        <header>
          <link rel="stylesheet" href="./output.css" />
        </header>
        <style>
          .card-container {
            transition: all 0.3s ease;
          }
          .card-container:hover {
            transform: translateY(-4px);
            box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
          }
          .card-header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
        </style>
        <div class="card-container bg-gradient-to-br from-white to-gray-50 shadow-lg hover:shadow-xl rounded-2xl p-6 border border-gray-100">
          <div class="card-header text-2xl font-bold mb-4">
            <slot name="header">
              Card Title
            </slot>
          </div>
          <div class="text-gray-700 leading-relaxed">
            <slot>Card content goes here</slot>
          </div>
        </div>
        `;

    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(template.content.cloneNode(true));
    console.timeEnd('Card connected');
  }
}

customElements.define("card-component", Card);