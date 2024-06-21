class Products extends HTMLElement {
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
        "product": "Cocacola",
        "detail": "16u, 330ml",
        "price": "90.00€",
        "minus": "-",
        "add": "+"
      }
    ]
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

        .orders{
          align-items: center;
          display: flex;
          justify-content: space-between;
          padding: 1.4rem;
        }

        .order-product-details, .order-price-quantity{
          color:hsl(0, 0%, 100%);
          display: flex;
          flex-direction: column;
          font-family: "Roboto", sans-serif;
          font-weight: 500;
          font-size: 18px;
          gap: 1rem;
        }

        .order-price{
          text-align: right;
        }

        .price{
          display: inline-block;
        }

        .plus-minus-button{
          align-items: center;
          display: flex;
          height: auto;
        }

        .plus-minus-button input{
          background-color: rgb(127, 112, 214);
          border: none;
          color: hsl(0, 0%, 100%);
          font-weight: 600;
          font-size: 18px;
          height: 100%;
          outline: none;
          padding: 0.1rem 0.4rem;
          width: 25px;
        }

        .plus-minus-button-reduce{
          background-color: hsl(0, 0%, 100%);
          border: none;
          color: hsl(0, 0%, 0%);
          cursor: pointer;
          min-height: 1.5rem;
          width: 25px;
        }

        .plus-minus-button-reduce button, .plus-minus-button-add button{
          border-radius: 1rem;
        }

        .plus-minus-button-add{
          background-color: hsl(0, 0%, 100%);
          border: none;
          color: hsl(0, 0%, 0%);
          cursor: pointer;
          min-height: 1.5rem;
          width: 25px;
        }

        /* Para eliminar las flechas del input */
        input::-webkit-outer-spin-button, input::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }

        /* Para centrar el número del input */
        input[type="number"] {
          text-align: center;
        }

        button{
          cursor: pointer;
        }

        .orders-buttons{
          align-items: center;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          width: 100%;  
        }

        .button-new-order {
          bottom: 2rem;
          display: flex;
          justify-content: center;
          position: fixed;
          width: 100%;  
        }

        .button-new-order button{
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

      <div class="orders"></div>

      <div class="button-new-order">
        <button>Nuevo pedido</button>
      </div>
    `
    const orders = this.shadow.querySelector('.orders');

    this.data.forEach(order => {
      const orderProductDetails = document.createElement('div');
      orders.appendChild(orderProductDetails);
      orderProductDetails.classList.add('order-product-details');
    
      const orderProduct = document.createElement('div');
      orderProductDetails.appendChild(orderProduct);
      orderProduct.classList.add('order-product');
    
      const orderProductSpan = document.createElement('span');
      orderProduct.appendChild(orderProductSpan);
      orderProductSpan.textContent = order.product;
    
      const orderDetails = document.createElement('div');
      orderProductDetails.appendChild(orderDetails);
      orderDetails.classList.add('order-details');
    
      const orderDetailsSpan = document.createElement('span');
      orderDetails.appendChild(orderDetailsSpan);
      orderDetailsSpan.textContent = order.detail;
    
      const orderPriceQuantity = document.createElement('div');
      orders.appendChild(orderPriceQuantity);
      orderPriceQuantity.classList.add('order-price-quantity');
    
      const orderPrice = document.createElement('div');
      orderPriceQuantity.appendChild(orderPrice);
      orderPrice.classList.add('order-price');
    
      const priceSpan = document.createElement('span');
      orderPrice.appendChild(priceSpan);
      priceSpan.textContent = order.price;
      priceSpan.classList.add('price');
    
      const plusMinusButton = document.createElement('div');
      orderPriceQuantity.appendChild(plusMinusButton);
      plusMinusButton.classList.add('plus-minus-button');
    
      const reduceButton = document.createElement('button');
      plusMinusButton.appendChild(reduceButton);
      reduceButton.textContent = order.minus;
      reduceButton.classList.add('plus-minus-button-reduce');
    
      const inputElement = document.createElement('input');
      plusMinusButton.appendChild(inputElement);
      inputElement.setAttribute('type', 'number');
      inputElement.setAttribute('value', '1');
      inputElement.classList.add('plus-minus-button-input');
    
      const addButton = document.createElement('button');
      plusMinusButton.appendChild(addButton);
      addButton.textContent = order.add;
      addButton.classList.add('plus-minus-button-add');
    });
  }
}

customElements.define('products-component', Products)