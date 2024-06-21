class Home extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
    this.title = this.getAttribute('text')
  }

  connectedCallback () {
    this.render()
  }

  render () {
    this.shadow.innerHTML =
      /* html */` 
      <style>
      :host {
        display: block;
        width: 100%;
        height: 100vh;
      }

      button{
        cursor: pointer;
      }
      
      .orders-buttons{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        width: 100%;
      }

      .button-new-order button, .button-last-order button{
        padding: 0.6rem;
        border-radius: 0.7rem;
        border: none;
        outline: none;
        color: hsl(271, 53%, 52%);
        background-color: hsl(0, 0%, 100%);
        font-size: 17px;
        font-weight: 600;
        min-width: 350px;
      }
      </style>

      <nav class="orders">
        <div class="orders-buttons">
          <div class="button-new-order">
            <button>Nuevo pedido</button>
          </div>
          <div class="button-last-order">
            <button>Pedidos anteriores</button>
          </div>
        </div>
      </nav>
    `
  }
}

customElements.define('home-component', Home)
