class Finish extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
    this.data = []
    this.text = this.getAttribute('text')
    this.width = this.getAttribute('width')
    this.height = this.getAttribute('height')
  }

  async connectedCallback() {
    await this.loadData();
    await this.render();
  }

  loadData() {
    // const response = await fetch('')
    this.data = [
      {

      }
    ]
  }

  render () {
    this.shadow.innerHTML =
      /* html */` 
      <style>
        :host{
          display: flex;
          align-items: center;
          justify-content: center;
          width: ${this.width};
          height: ${this.height};
          justify-content: center;
        }

        h2, button, p{
          color: hsl(0, 0%, 100%);
          font-family: "Roboto", sans-serif;
          margin: 0;
        }

        .completed-order-container{
          align-items: center;
          display: flex;
          flex-direction:column;
          gap: 1.5rem;
        }

        .completed-order{
          align-items: center;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          padding: 0 2rem;
          width: 100%;
        }

        .completed-order-content{
          font-size: 17px;
          text-align: center;
        }

        .completed-order-button button{
          background-color: hsl(0, 0%, 100%);
          border: none;
          border-radius: 0.7rem;
          color: hsl(0, 0%, 0%);
          font-size: 17px;
          font-weight: 600;
          min-width: 350px;
          outline: none;
          padding: 0.6rem;  
        }
      </style>

      <div class="completed-order-container">
        <div class="completed-order"></div>
        
        <div class="completed-order-button">
          <button>Volver a inicio</button>
        </div>
      </div>
    `
    const order = this.shadow.querySelector('.completed-order');

    const completedOrderTitle = document.createElement('div');
    order.appendChild(completedOrderTitle);
    completedOrderTitle.classList.add('completed-order-title');

    const orderTitle = document.createElement('h2');
    completedOrderTitle.appendChild(orderTitle);
    orderTitle.textContent = "Pedido realizado con éxito."

    const completedOrderContent = document.createElement('div');
    order.appendChild(completedOrderContent);
    completedOrderContent.classList.add('completed-order');

    const orderText = document.createElement('p');
    completedOrderContent.appendChild(orderText);
    orderText.textContent = "En breve recibirá un correo con los detalles. La referencia de su pedido es 0000000002"
    orderText.classList.add('completed-order-content');
  }
}

customElements.define('finish-component', Finish)