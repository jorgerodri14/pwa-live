import { css, html } from "lit-element";
import { PageViewElement } from "./page-view-element";

class ViewHome extends PageViewElement {
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
      <a href="/blog/bienvenidos">Ir a la nota de bienvenida</a>
    </div>`;
  }
}

customElements.define("view-home", ViewHome);
