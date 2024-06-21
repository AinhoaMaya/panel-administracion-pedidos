class Header extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
    this.text = this.getAttribute('text')
    this.width = this.getAttribute('width')
  }

  connectedCallback () {
    this.render()
  }

  render () {
    this.shadow.innerHTML =
      /* html */` 
      <style>
        :host{
          display: block;
          width: ${this.width};
        }

        header{
          align-items: center;
          background-color: hsl(0, 0%, 0%);
          display: flex;
          height: 4rem;
          justify-content: center;
          width: 100%;
        }
      </style>

      <header>
        <slot></slot>
      </header>
    `
  }
}

customElements.define('header-component', Header)
