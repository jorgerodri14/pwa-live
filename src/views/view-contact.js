import { css, html } from "lit-element";
import { PageViewElement } from "./page-view-element";

class ViewContact extends PageViewElement {
  static get styles() {
    return css`
      :host {
        display: block;
      }
    `;
  }

  render() {
    return html` <div>
      <h2>Contacto</h2>
      <p>Lorem ipsum</p>
    </div>`;
  }
}

customElements.define("view-contact", ViewContact);
