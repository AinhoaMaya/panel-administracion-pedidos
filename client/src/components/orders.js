class Orders extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
    this.data = []
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
        reference: '000000000002',
        date: '20-05-2024 11:13',
        price: '180€'
      },
      {
        reference: '000000000003',
        date: '21-05-2024 12:14',
        price: '190€'
      },
      {
        reference: '000000000004',
        date: '22-05-2024 13:15',
        price: '200€'
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

        button, span{
          color: hsl(0, 0%, 100%);
          font-family: "Roboto", sans-serif;
        }

        button, input{
          cursor: pointer;
        }

        .products{
          align-items: center;
          display: flex;
          flex-direction: column;
          margin: auto;
          width: 90%;
        }

        .header-cart{
          align-items: center;
          background-color: hsl(0, 0%, 0%);
          display: flex;
          justify-content: space-between;
          padding: 1rem;
          width: 100%;
        }

        .header-arrow svg{
          fill: hsl(0, 0%, 100%);
          width: 1.7rem;
        }

        .previous-products{
          align-items: center;
          display: flex;
          justify-content: space-between;
          width: 100%;
          border-bottom: 0.5px solid hsl(0, 0%, 100%);
          padding: 0.8rem 0;
        }

        .reference, .previous-product-title, .previous-product-title-price{
          display: flex;
          flex-direction: column;
          font-weight: 600;
          font-size: 18px;
          gap: 1rem;
        }

        .reference-order input, .reference-data input{
          padding: 0.3rem;
          width: 100%;
        }

        .reference-order-button input{
          border: none;
          border-radius: 0.5rem;
          color: hsl(0, 0%, 0%);
          font-weight: 500;
          outline: none;
          padding: 0.4rem 1rem;
          width: 100%;
        }

        .reference-data-button input{
          border: none;
          border-radius: 0.5rem;
          color: hsl(0, 0%, 0%);
          font-weight: 500;
          outline: none;
          padding: 0.4rem 0;
          width: 100%;
        }

        .data-product{
          font-size: 14px;
          font-weight: 400;
        }

        .price-product{
          text-align: right;
        }

        .price{
          display: inline-block;
        }

        .price-product-button button{
          border: none;
          border-radius: 0.5rem;
          color: hsl(0, 0%, 0%);
          font-weight: 500;
          outline: none;
          padding: 0.2rem 0.8rem;
        }
      </style>

      <div class="products">
        <div class="previous-products">
          <div class="reference">
            <div class="reference-order">
              <input type="text" id="reference" name="reference" placeholder="Referencia del pedido">
            </div>
            <div class="reference-data">
              <input type="date" value="dd/mm/aaaa" />

            </div>
          </div>
      
          <div class="reference">
            <div class="reference-order-button">
              <input type="submit" value="Buscar por referencia">
            </div>
            <div class="reference-data-button">
              <input type="submit" value="Buscar por fecha">
            </div>
          </div>
        </div>
      </div>
    `
    const products = this.shadow.querySelector('.products');

    this.data.forEach(order => {
      const previousProduct = document.createElement('div');
      previousProduct.classList.add('previous-products');
      products.appendChild(previousProduct);

      const previousProductTitle = document.createElement('div');
      previousProductTitle.classList.add('previous-product-title');
      previousProduct.appendChild(previousProductTitle);

      const titleProduct = document.createElement('div');
      titleProduct.classList.add('title-product');
      previousProductTitle.appendChild(titleProduct);

      const titleProductSpan = document.createElement('span');
      titleProductSpan.textContent = order.reference;
      titleProduct.appendChild(titleProductSpan);

      const dataProduct = document.createElement('div');
      dataProduct.classList.add('data-product');
      previousProductTitle.appendChild(dataProduct);

      const dataProductSpan = document.createElement('span');
      dataProductSpan.textContent = order.date;
      dataProduct.appendChild(dataProductSpan);

      const previousProductPrice = document.createElement('div');
      previousProductPrice.classList.add('previous-product-title-price');
      previousProduct.appendChild(previousProductPrice);

      const priceProduct = document.createElement('div');
      priceProduct.classList.add('price-product');
      previousProductPrice.appendChild(priceProduct);

      const priceProductSpan = document.createElement('span');
      priceProductSpan.classList.add('price');
      priceProductSpan.textContent = order.price;
      priceProduct.appendChild(priceProductSpan);

      const priceProductButton = document.createElement('div');
      priceProductButton.classList.add('price-product-button');
      previousProductPrice.appendChild(priceProductButton);

      const productButton = document.createElement('button');
      productButton.textContent = 'Ver pedido';
      priceProductButton.appendChild(productButton);
    });
  }
}

customElements.define('orders-component', Orders)