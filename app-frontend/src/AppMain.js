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
<div class="container">
                ${this.router != null ?
                html`
                    

                    <nav class="navbar" role="navigation" aria-label="main navigation">
                      <div class="navbar-brand">
                        <a class="navbar-item" href="https://bulma.io">
                          <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
                        </a>

                        <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                          <span aria-hidden="true"></span>
                          <span aria-hidden="true"></span>
                          <span aria-hidden="true"></span>
                        </a>
                      </div>

                      <div id="navbarBasicExample" class="navbar-menu">
                        <div class="navbar-start">
                          <a class="navbar-item">
                            Home
                          </a>

                          <a class="navbar-item">
                            Documentation
                          </a>

                          <div class="navbar-item has-dropdown is-hoverable">
                            <a class="navbar-link">
                              More
                            </a>

                            <div class="navbar-dropdown">
                              <a class="navbar-item" href="${this.router.urlForName('list')}">
                                About
                              </a>
                              <a class="navbar-item" href="${this.router.urlForName('details')}">
                                Jobs
                              </a>
                              <a class="navbar-item">
                                Contact
                              </a>
                              <hr class="navbar-divider">
                              <a class="navbar-item">
                                Report an issue
                              </a>
                            </div>
                          </div>
                        </div>

                        <div class="navbar-end">
                          <div class="navbar-item">
                            <div class="buttons">
                              <a class="button is-primary">
                                <strong>Sign up</strong>
                              </a>
                              <a class="button is-light">
                                Log in
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </nav>



                ` : html``}
            
           
                <section id="outlet" class="section">
                </section>
            </div>

            <footer class="footer">
              <div class="content has-text-centered">
                <p>
                  <strong>Bulma</strong> by <a href="https://jgthms.com">Jeremy Thomas</a>. The source code is licensed
                  <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
                  is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
                </p>
              </div>
            </footer>

        `;
    }

    createRenderRoot() {
        return this;
    }
}

customElements.define('app-main', AppMain);