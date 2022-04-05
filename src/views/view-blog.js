import { css, html } from 'lit-element';
import { PageViewElement } from './page-view-element';

class ViewBlog  extends PageViewElement {

  static get styles() {
    return css`
      :host {
        display: block;
      }
    `;
  }

  static get properties() {
    return {
      segments: {
      type : Array
      }
    };
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <div>
          <h2>Blog</h2>
          ${this.showSegment(this.segments)}  
          <!-- Pasandole this.segments como argunmento lo que estoy es pasandole una dependecia a showSegment, lo que provocara que cade vez que cambie this.segments actualice el valor -->
      </div>
    `;
  }

  showSegment(){
    return segments[1];
  }

  firstUpdated() {
    console.log('pepito')
  }
}

customElements.define('view-blog', ViewBlog);