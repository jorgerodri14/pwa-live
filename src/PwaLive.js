import { LitElement, html, css } from "lit";
import "./views/view-about";
import "./views/view-home";
import "./views/view-contact";

export class PwaLive extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 15px;
      }
      .title {
        color: red;
        font-weight: 300;
        font-family: Pacifico, cursive;
      }
      .page {
        display: none;
      }
      .page[active] {
        display: block;
      }
    `;
  }

  static get properties() {
    return {
      selected: { type: String },
    };
  }

  constructor() {
    super();
    this.selected = "home";
  }

  render() {
    return html` <h1 class="title">My App</h1>
      <nav>
        <a href="#" @click="${this.go}" name="home">Home</a>
        <a href="#" @click="${this.go}" name="about">About</a>
        <a href="#" @click="${this.go}" name="contact">Contact</a>
      </nav>
      <main>
        <view-home
          class="page"
          texto="algo"
          ?active="${this.selected === "home"}"
        ></view-home>
        <view-about
          class="page"
          ?active="${this.selected === "about"}"
        ></view-about>
        <view-contact
          class="page"
          ?active="${this.selected === "contact"}"
        ></view-contact>
      </main>`;
  }

  go(e) {
    e.preventDefault();
    this.selected = e.target.getAttribute("name");
  }
}
