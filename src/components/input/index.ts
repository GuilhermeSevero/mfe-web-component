import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('z-input')
export class ZInput extends LitElement {
  @property({ type: String })
  value = '';

  @property({ type: String })
  label = '';

  @property({ type: String })
  type = '';

  @property({ type: String })
  placeholder = '';

  @property({ type: Boolean })
  error = false;

  @property({ type: String })
  errorMessage = '';

  private onInput(event: Event) {
    const customEvent = new CustomEvent('z-input', {
      bubbles: true,
      composed: true,
      detail: (event.target as HTMLInputElement).value,
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
            @input="${this.onInput}"
          >
        </p>
        ${this.error ? html`<p class="help">${this.errorMessage}</p>` : ''}
      </div>
    `;
  }

  static styles = css``;

  createRenderRoot() {
    return this;
  }
}
