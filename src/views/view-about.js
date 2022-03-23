import { css, html } from "lit-element";
import { PageViewElement } from "./page-view-element";

class ViewAbout extends PageViewElement {
  static get styles() {
    return css`
      :host {
        display: block;
      }
    `;
  }

  render() {
    return html`<div>
      <h2>Sobre</h2>
    </div>`;
  }
}

customElements.define("view-about", ViewAbout);
