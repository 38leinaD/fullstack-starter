import { html, LitElement } from './lib/lit-element.js';
import { Router } from './lib/@vaadin/router.js';

import './ListView.js'
import './DetailsView.js'
import './ErrorView.js'

export default class AppMain extends LitElement {

    constructor() {
        super();
    }

    connectedCallback() {
        super.connectedCallback();
    }

    firstUpdated(changedProperties) {
        this.initRouter();
    }

    initRouter() {
        const outlet = document.querySelector('#outlet');
        this.router = new Router(outlet);

        window.addEventListener('vaadin-router-location-changed', (event) => {
            //this.requestUpdate();
        });

        this.router.setRoutes([
            {
                name: 'list', path: '/', component: 'list-view'
            },
            {
                name: 'details', path: '/details', component: 'details-view'
            },
            {
                path: '(.*)', component: 'error-view'
            },
        ]);

        window.addEventListener('vaadin-router-location-changed', (event) => {

        });

        this.requestUpdate();
    }

    createRenderRoot() {
        return this;
    }

    render() {
        return html`
        <main>
            <header>
                <h2>Fullstack App Starter</h2>
            </header>
                ${this.router != null ?
                html`
                    <nav class="navbar navbar-expand-lg navbar-light bg-light">

                      <a class="navbar-brand" href="#">Navbar</a>
                      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                      </button>

                      <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                          <li class="nav-item active">
                            <a class="nav-link" href="${this.router.urlForName('list')}">List <span class="sr-only">(current)</span></a>
                          </li>
                        </ul>
                        <form class="form-inline my-2 my-lg-0">
                          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                      </div>
                    </nav>
                ` : html``}
            
            <article id="outlet">
            </article>
            <footer>
                <small>&copy; 2020</small>
            </footer>
        </main>
        `;
    }

    createRenderRoot() {
        return this;
    }
}

customElements.define('app-main', AppMain);