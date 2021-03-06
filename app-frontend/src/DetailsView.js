import { html, LitElement } from './lib/lit-element.js';
import { until } from './lib/lit-html/directives/until.js';

export default class DetailsView extends LitElement {

    static get properties() {
        return {
            someprop: { type: String }
        };
    }

    constructor() {
        super();
        this.someprop = undefined;
    }

    connectedCallback() {
        super.connectedCallback();
    }

    render() {

        return html`
            <h1 class="title">Title</h1>
            <p>Not much to see here...</p>
        `;
    }

}

customElements.define('details-view', DetailsView);