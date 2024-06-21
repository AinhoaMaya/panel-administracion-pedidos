class IconHouse extends HTMLElement {
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

        .icon-house{
          padding: 1.4rem;
          cursor: pointer;
        }

        .icon-house svg{
          width: 2rem;
          fill: hsl(0, 0%, 100%);
        }
      </style>

      <div class="icon-house">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>home</title><path d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z" /></svg>
      </div>
    `
  }
}

customElements.define('icon-house-component', IconHouse)