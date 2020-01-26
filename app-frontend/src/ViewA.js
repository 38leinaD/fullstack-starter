import { html, LitElement } from './lib/lit-element.js';
import { until } from './lib/lit-html/directives/until.js';

export default class ViewA extends LitElement {

    static get properties() {
        return {
            name: { type: String }
        };
    }

    constructor() {
        super();
        this.name = undefined;
    }

    connectedCallback() {
        super.connectedCallback();
    }

    onKeyDown(event) {
        if (event.code === 'Enter') {
            this.name = event.target.value;
        }
    }

    render() {

        return html`
            <h1>${until(this.fetchFromServer(), html`Loading...`)}</h1>
            <div>Type your name and press Enter.</div>
            <input type='text' class="input" placeholder="Your name" @keydown='${this.onKeyDown}'/>
            <div>${this.name
                ? html`Hello ${this.name}!`
                : html`---`
            }</div>
        `;
    }

    async fetchFromServer() {
        const response = await fetch('./data.json');
        const json = await response.json();

        return html`Message from server: ${json.message}`
    }
}

customElements.define('view-a', ViewA);