import { html, LitElement } from './lib/lit-element.js';
import { until } from './lib/lit-html/directives/until.js';

export default class ListView extends LitElement {

    static get properties() {
        return {
            message: { type: String }
        };
    }

    constructor() {
        super();
    }

    connectedCallback() {
        super.connectedCallback();
    }

    async onKeyDown(event) {
        if (event.code === 'Enter') {
                        event.preventDefault();
            try {
                const response = await fetch(`http://localhost:8080/resources/hello?name=${event.target.value}`);
                const greeting = await response.text();
                this.message = greeting;
            }
            catch (e) {
                alert(e);       
            }
        }
    }

    render() {

        return html`
            <h1 class="title">Title</h1>

            <form>
                <div class="form-group">
                    <label for="name">Type your name and press 'Enter' to get a personal greeting...</label>
                    <input type="text" class="form-control" id="name" @keydown="${this.onKeyDown}"">
                </div>
            </form>
            
            ${this.message != null ? html`
            <div class="alert alert-warning" role="alert">
              ${this.message}
            </div>
            ` : html``}
        `;
    }

    createRenderRoot() {
        return this;
    }

    async fetchFromServer() {
        const response = await fetch('./data.json');
        const json = await response.json();

        return html`Message from server: ${json.message}`
    }
}

customElements.define('list-view', ListView);