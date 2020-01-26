import { html, LitElement } from './lib/lit-element.js';

export default class ErrorView extends LitElement {

    render() {

        return html`
            <h1>Unkown page</h1>
 			This page does not exist
        `;
    }
}

customElements.define('error-view', ErrorView);