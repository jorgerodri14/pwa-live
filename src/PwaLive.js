import { LitElement, html, css } from "lit";
import "./views/view-about";
import "./views/view-home";
import "./views/view-contact";
import "dile-tabs/dile-tabs";
import "dile-pages/dile-pages";

export class PwaLive extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 15px;
        --dile-tab-background-color: transparent;
        --dile-tab-select-background-color: transparent;
        --dile-tab-select-text-color: #10200;
      }
      .title {
        color: red;
        font-weight: 300;
        font-family: Pacifico, cursive;
      }
      /* .page {
        display: none;
      }
      .page[active] {
        display: block;
      } */
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
      <!-- <nav>
        <a href="#" @click="${this.go}" name="home">Home</a>
        <a href="#" @click="${this.go}" name="about">About</a>
        <a href="#" @click="${this.go}" name="contact">Contact</a>
      </nav> -->
      <dile-tabs
        selected="${this.selected}"
        attrForSelected="name"
        @dile-tabs-selected-changed="${this.selectedChanged}"
      >
        <dile-tab name="home">Home</dile-tab>
        <dile-tab name="about">About</dile-tab>
        <dile-tab name="contact">Contact</dile-tab>
      </dile-tabs>
      <dile-pages selected="${this.selected}" attrForSelected="name">
        <!-- <view-home
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
        ></view-contact> -->
        <!-- Dejamos el active porque así nos ahorramos ciclos de cpu en el renderizado aunque con dile-pages no es necesarios -->
        <view-home texto="algo" name="home"></view-home>
        <view-about
          name="about"
          ?active="${this.selected === "about"}"
        ></view-about>
        <view-contact
          name="contact"
          ?active="${this.selected === "contact"}"
        ></view-contact>
      </dile-pages>`;
  }

  selectedChanged(e) {
    this.selected = e.detail;
  }

  // go(e) {
  //   e.preventDefault();
  //   this.selected = e.target.getAttribute("name");
  // }
}
