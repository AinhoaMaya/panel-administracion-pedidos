class Main extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
    this.width = this.getAttribute('width')
    this.height = this.getAttribute('height')
    this.alignItems = this.getAttribute('align-items') || 'flex-start'
    this.justifyContent = this.getAttribute('justify-content')  || 'flex-start'
  }

  connectedCallback () {
    this.render()
  }

  render () {
    this.shadow.innerHTML =
      /* html */` 
      <style>
        :host{
          align-self: ${this.alignItems};
          justify-self: ${this.justifyContent};
          width: ${this.width};
          height: ${this.height};
        }

        main{
          display: flex;
          flex-direction: column;
          gap: 2rem;
          height: 100%;
          align-items: ${this.alignItems};
          justify-content: ${this.justifyContent};
          width: 100%;
        }
      </style>

      <main>
        <slot></slot>
      </main>
    `
  }
}

customElements.define('main-component', Main)
