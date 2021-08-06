import { html, css, LitElement } from 'lit';

export class ZInput extends LitElement {
  static get properties() {
    return {
      value: { type: String },
      label: { type: String },
      type: { type: String },
      placeholder: { type: String },
      error: { type: Boolean },
      errorMessage: { type: String },
    };
  }

  createRenderRoot() {
    return this;
  }

  $onInput(event) {
    const customEvent = new CustomEvent('z-input', {
      bubbles: true,
      composed: true,
      detail: event.target.value,
    });
    this.dispatchEvent(customEvent);
  }

  render() {
    return html`
      <div class="field">
        <label class="label">${this.label}</label>
        <p class="control">
          <input
            class="input"
            type="${this.type}"
            placeholder="${this.placeholder}"
            .value="${this.value}"
            @input="${this.$onInput}"
          >
        </p>
        ${this.error ? html`<p class="help">${this.errorMessage}</p>` : ''}
      </div>
    `;
  }

  static get styles() {
    return css``;
  }
}
