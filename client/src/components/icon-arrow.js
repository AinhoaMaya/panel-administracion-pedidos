class IconArrow extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
    this.width = this.getAttribute('width')
    this.height = this.getAttribute('height')
  }

  async connectedCallback() {
    await this.loadData();
    await this.render();
  }

  loadData() {
    // const response = await fetch('')
    this.data = []
  }

  render () {
    this.shadow.innerHTML =
      /* html */` 
      <style>
        :host{
          display: block;
          width: ${this.width};
          height: ${this.height};
        }

        .icon-arrow{
          padding: 1.4rem;
          cursor: pointer;
        }

        .icon-arrow svg{
          width: 2rem;
          fill: hsl(0, 0%, 100%);
        }
      </style>

      <div class="icon-arrow">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>arrow-left</title><path d="M19,13H6.75L12,18.25L11.34,19L4.84,12.5L11.34,6L12,6.75L6.75,12H19V13Z" /></svg>
      </div>
    `
  }
}

customElements.define('icon-arrow-component', IconArrow)