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
  loading = false;

  @property({ type: Boolean })
  disabled = false;

  @property({ type: Boolean })
  error = false;

  @property({ type: String })
  errorMessage = '';

  @property({ type: String })
  helper = '';

  @property({ type: String })
  maxlength = '';

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
        <label
          class="label ${this.error ? 'has-text-danger' : ''}"
        >
          ${this.label}
        </label>
        <p
          class="control ${this.loading ? 'is-loading' : ''}"
        >
          <input
            class="input ${this.error ? 'is-danger' : ''}"
            type="${this.type}"
            placeholder="${this.placeholder}"
            ?disabled=${this.disabled || this.loading}
            maxlength="${this.maxlength}"
            .value="${this.value}"
            @input="${this.onInput}"
          >
        </p>
        ${!this.error && this.helper ? html`<p class="help">${this.helper}</p>` : ''}
        ${this.error ? html`<p class="help has-text-danger">${this.errorMessage}</p>` : ''}
      </div>
    `;
  }

  static styles = css``;

  createRenderRoot() {
    return this;
  }
}
