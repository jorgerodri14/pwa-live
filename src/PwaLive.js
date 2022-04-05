import { LitElement, html, css } from "lit";
import { installRouter } from "pwa-helpers";

import "./views/view-about";
import "./views/view-home";
import "./views/view-contact";
import "./views/view-map";
import "./views/view-blog";

import "dile-tabs/dile-tabs";
import "dile-pages/dile-pages";
import decodeUrl from "./utils/decodeUrl";

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
    `;
  }

  static get properties() {
    return {
      page: { type: String },
      segments: { type: Array },
    };
  }

  constructor() {
    super();
    this.page = "home";

    installRouter((location) => this.handleNavigation(location.pathname));
    this.addEventListener("navigate", (e) => this.navigate(e.detail));
  }

  render() {
    return html`
      <h1 class="title">My App</h1>
      <a href="/home">Home</a>
      <a href="/about">About</a>
      <a href="/contact">Contacto</a>
      <a href="/map">Mapa</a>
      <!-- <dile-tabs
        selected="${this.page}"
        attrForSelected="name"
        @dile-tabs-selected-changed="${this.selectedChanged}"
      >
        <dile-tab name="home">Home</dile-tab>
        <dile-tab name="about">About</dile-tab>
        <dile-tab name="contact">Contact</dile-tab>
        <dile-tab name="map">Mapa</dile-tab>
      </dile-tabs> -->
      <dile-pages selected="${this.page}" attrForSelected="name">
        <view-home
          texto="algo"
          name="home"
          ?active="${this.page === "home"}"
        ></view-home>
        <view-about
          name="about"
          ?active="${this.page === "about"}"
        ></view-about>
        <view-contact
          name="contact"
          ?active="${this.page === "contact"}"
        ></view-contact>
        <view-map name="map" ?active="${this.page === "map"}"></view-map>ˆ
        <view-blog name="blog" ?active="${this.page === "blog"}" .segments="${this.segments}"></view-blog>
      </dile-pages>
      <button @click="${() => this.navigate("map")}">Ir al mapa</button>
    `;
  }

  selectedChanged(e) {
    this.page = e.detail;
    this.navigate(page);
  }

  handleNavigation(pathname) {
    const { page, segments } = decodeUrl(pathname);
    this.page = page;
    this.segments = segments;
  }

  navigate(page) {
    window.history.pushState({}, "", "/" + page);
    this.handleNavigation(window.location.pathname);
  }
}
