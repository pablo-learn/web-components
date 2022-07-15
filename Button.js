class Button extends HTMLElement {
    constructor() {
        super();
        var templateContent = document.getElementById('button-template').content;
        var shadow = this.attachShadow({ mode: 'open' });
        shadow.appendChild(templateContent.cloneNode(true));
    }
}

customElements.define('button-component', Button);