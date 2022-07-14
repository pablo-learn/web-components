// Create a class for the element
class WordCount extends HTMLElement {
    constructor() {
        // Always call super first in constructor
        super();

        var template = document
            .getElementById('button-template')
            .content;
        // Create a shadow root
        var shadow = this.attachShadow({ mode: 'open' });

        // Create text node and add word count to it
        /*   var text = document.createElement('span');
          text.textContent = ''; */

        // Append it to the shadow root
        shadow.appendChild(template);
    }
}

// Define the new element
customElements.define('button-component', WordCount);