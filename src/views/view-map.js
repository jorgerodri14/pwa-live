import { css, html } from "lit-element";
import { PageViewElement } from "./page-view-element";

class ViewMap extends PageViewElement {
  static get styles() {
    return css`
      :host {
        display: block;
      }
    `;
  }

  static get properties() {
    return {};
  }

  constructor() {
    super();
  }

  render() {
    return html` <div>
      <h2>Mapa del sitio</h2>
      <p>
        <select @change="${this.selectedChanged}">
          <option value="" disabled selected hidden>
            Seleccionar una página
          </option>
          <option value="home">Home</option>
          <option value="about">About</option>
          <option value="contact">Contacto</option>
        </select>
      </p>
    </div>`;
  }

  selectedChanged(e) {
    const page = e.target.value;
    this.dispatchEvent(
      new CustomEvent("navigate", {
        bubbles: true,
        composed: true,
        detail: page,
      })
    );
    console.log(e.target.value);
  }
}

customElements.define("view-map", ViewMap);
