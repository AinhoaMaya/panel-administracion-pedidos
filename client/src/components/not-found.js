class NotFound extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
    this.columns = this.getAttribute('columns') || 1
  }

  connectedCallback () {
    this.render()
  }

  render () {
    this.shadow.innerHTML =
      /* html */`
        <style>
          p{
            font-family: "Roboto", sans-serif;
            color: hsl(0, 0%, 100%);
          }

          .text-content{
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            width: 100vw;
          }

          .text-not-found{
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
          }

          .text-not-found svg{
            width: 7rem;
            height: 7rem;
            margin-bottom: 1rem;
          }

          img{
            object-fit: cover;
            width: 50%;
          }

          .home-button{
            background-color: hsl(49, 84%, 35%);
            border: none;
            border-radius: 0.5rem;
            cursor: pointer;
            color: hsl(0, 0%, 100%);
            font-size: 13px;
            font-weight: 300;
            outline: none;
            padding: 0.5rem 2rem;
            text-transform: uppercase;
          }

          .home-button a {
            color: inherit;
            text-decoration: none;
          }
        </style>

        <div class="text-content">
          <div class="text-not-found">
            <p>OOPS...</p>
            <img src="./public/not-found.webp">
            <p>NO ENCUENTRO LA PÁGINA</p>
            <button class="home-button">
              <a href="/">Inicio</a>
            </button>
          </div>
        </div>
      `
  }
}

customElements.define('not-found-component', NotFound)
