import { LitElement, html, css } from "lit-element";
import { PageViewElement } from "./page-view-element";

class ViewHome extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
      }
    `;
  }

  static get properties() {
    return {
      texto: { type: String },
    };
  }

  render() {
    return html`<div>
      <h2>Home</h2>
      <p>Esto es la home!</p>
      <input type="text" value="${this.texto}" />
    </div>`;
  }
}

customElements.define("view-home", ViewHome);
