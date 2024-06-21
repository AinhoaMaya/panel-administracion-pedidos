class Title extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
    // this.element = this.getAttribute('element')
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

        .title{
          color: hsl(0, 0%, 100%);
          display: flex;
          align-items: center;
          font-family: "Roboto", sans-serif;
          font-weight: 600;
          font-size: 18px;
          padding: 1.4rem;
          width: 100%;
        }
      </style>

      <div class="title">${this.title}</div>
    `

    // const loginTitles = this.shadow.querySelector('.login-title')
    // const title = document.createElement(this.element)
    // title.textContent = this.text
    // loginTitles.appendChild(title)
  }
}

customElements.define('title-component', Title)
