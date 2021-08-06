export class ZInput extends HTMLElement {
  constructor() {
    super();

    this.value = '';
    this.label = '';
    this.type = '';
    this.placeholder = '';
    this.error = false;
    this.errormessage = '';
  }

  connectedCallback() {
    this.render();

    this.$toggleError();

    this.querySelector('input').addEventListener('input', this.$onInput);
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      this[name] = newValue;

      switch (name) {
        case 'value':
          this.querySelector('input').value = newValue;
          break;

        case 'error':
          this.$toggleError();
          break;

        default:
          this.render();
      }
    }
  }

  static get observedAttributes() {
    return [
      'value',
      'label',
      'type',
      'placeholder',
      'error',
      'errormessage',
    ];
  }

  $toggleError() {
    const errElement = this.querySelector('p.help');
    if (this.error) {
      errElement.classList.remove('is-hidden');
    } else {
      errElement.classList.add('is-hidden');
    }
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
    this.innerHTML = `
      <div class="field">
        <label class="label">${this.label}</label>
        <p class="control">
          <input
            class="input"
            type="${this.type}"
            placeholder="${this.placeholder}"
            value="${this.value}"
          >
        </p>
        <p class="help">${this.errormessage}</p>
      </div>
    `;
  }
}
