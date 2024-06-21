class PageComponent extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
  }

  connectedCallback () {
    this.render()
    window.onpopstate = () => this.handleRouteChange()
  }

  handleRouteChange () {
    this.render()
  }

  render () {

    this.shadow.innerHTML =
      /* html */` 
      <style>
        :host {
          width: 100%;
        }
        .content {
          display: grid;
          height: 100%;
          width: 100%;
        }
      </style>
      <div class="content"></div>
    `

    const path = window.location.pathname
    this.getTemplate(path)
  }

  async getTemplate (path) {
    const routes = {
      '/login': 'login.html',
      '/home': 'home.html',
      '/products': 'products.html',
      '/cart': 'cart.html',
      '/finish': 'finish.html',
      '/orders': 'orders.html',
      '/404': '404.html',
    }

    const filename = routes[path] || '404.html'

    await this.loadPage(filename)
  }

  async loadPage (filename) {
    const response = await fetch(`/pages/${filename}`)
    const html = await response.text()

    document.startViewTransition(() => {
      const contentDiv = this.shadowRoot.querySelector('.content')
      contentDiv.innerHTML = html
      document.documentElement.scrollTop = 0
    })
  }
}

customElements.define('page-component', PageComponent)
