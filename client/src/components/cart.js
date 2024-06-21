class Cart extends HTMLElement {
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
        "price": "180.00€",
        "quantity": "2x90.00€",
        "totalText": "Total",
        "totalPrice": "180.00€",
        "taxesText": "Impuestos no incluidos"
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

        h2, h3, span{
          color: hsl(0, 0%, 100%);
          font-family: "Roboto", sans-serif;
          font-weight: 700;
          margin: 0;
        }

        .orders{
          align-items: center;
          display: flex;
          gap: 12rem;
          justify-content: center;
          padding: 1.4rem 0;
          width: 100%;
        }

        .order-product-details, .order-price-quantity{
          display: flex;
          flex-direction: column;
          font-weight: 500;
          font-size: 18px;
          gap: 1rem;
        }

        .quantity{
          font-size: 16px;
          font-weight: 400;
        }

        .total-price{
          bottom: 6rem;
          display: flex;
          justify-content: space-between;
          display: flex;
          justify-content: center;
          gap: 6rem;
          width: 100%;
          padding: 1.4rem 0;
          position: fixed;
          }

        .total-price-title{
          font-size: 18px;
          font-weight: 600;
        }

        .total-price-title h3{
          font-size: 16px;
          font-weight: 400;
        }

        .total-price-content{
          font-size: 22px;
          font-weight: 600;
        }

        button{
          cursor: pointer;
        }
        
        .button-finish-order{
          bottom: 2rem;
          display: flex;
          justify-content: center;
          position: fixed;
          width: 100%;
        }

        .button-finish-order button{
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
        <div class="total-price"></div>

        <div class="button-finish-order">
          <button>Finalizar pedido</button>
        </div>
    `
    const orders = this.shadow.querySelector('.orders');
    const totalPriceContainer = this.shadow.querySelector('.total-price');

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

      const orderPriceSpan = document.createElement('span');
      orderPrice.appendChild(orderPriceSpan);
      orderPriceSpan.textContent = order.price;
      orderPriceSpan.classList.add('price');

      const priceQuantity = document.createElement('div');
      orderPriceQuantity.appendChild(priceQuantity);
      priceQuantity.classList.add('price-quantity');

      const priceQuantitySpan = document.createElement('span');
      priceQuantity.appendChild(priceQuantitySpan);
      priceQuantitySpan.textContent = order.quantity;
      priceQuantitySpan.classList.add('quantity');

      const totalPriceTitle = document.createElement('div');
      totalPriceContainer.appendChild(totalPriceTitle);
      totalPriceTitle.classList.add('total-price-title');

      const priceTitle = document.createElement('h2');
      totalPriceTitle.appendChild(priceTitle);
      priceTitle.textContent = order.totalText;

      const priceSubtitle = document.createElement('h3');
      totalPriceTitle.appendChild(priceSubtitle);
      priceSubtitle.textContent = order.taxesText;

      const totalPriceContent = document.createElement('div');
      totalPriceContainer.appendChild(totalPriceContent);
      totalPriceContent.classList.add('total-price-content');

      const totalPriceSpan = document.createElement('span');
      totalPriceContent.appendChild(totalPriceSpan);
      totalPriceSpan.textContent = order.totalPrice;
    });
  }
}

customElements.define('cart-component', Cart)