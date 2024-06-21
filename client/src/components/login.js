class Login extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
    this.title = this.getAttribute('title')
  }

  connectedCallback () {
    this.render()
  }

  render () {
    this.shadow.innerHTML =
      /* html */` 
      <style>
        :host{
          width: 100%;
        }

        .login-title{
          padding: 2rem;
          color: hsl(0, 0%, 100%);
          display: flex;
          font-family: "Roboto", sans-serif;
          justify-content: center;
        }

        .login-form, .form-email, .form-password{
          display: flex;
          flex-direction: column;
          width: 100%;
          gap: 0.5rem;
        }

        .login-form{
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          align-items: center;
        }

        label{
          color: hsl(0, 0%, 100%);
          font-family: "Roboto", sans-serif;
        }

        input{
          height: 2rem;
          background-color: hsl(224, 81%, 52%);
          border: none;
          border-bottom: 1px solid hsl(0, 0%, 100%);
        }

        .form-buttons{
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
          gap: 0.5rem;
        }

        .form-send-button{
          width: 100%;
          padding: 0.5rem;
          border-radius: 0.5rem;
          border: none;
          outline: none;
          color: hsl(0, 0%, 100%);
          background-color: hsl(271, 53%, 52%);
          font-size: 15px;
          font-weight: 500;
        }

        .form-forgot-password{
          width: 100%;
          padding: 0.5rem;
          border-radius: 0.5rem;
          border: none;
          outline: none;
          color: hsl(0, 0%, 100%);
          background: none;
          font-size: 17px;
          font-weight: 600;
        }
      </style>

      <div class="login-title">
        <h2>${this.title}</h2>
      </div>

      <form class="login-form">
        <div class="form-email">
          <label for="email">Email</label>
          <input type="email" id="email" name="email" required>
        </div>
        <div class="form-password">
          <label for="password">Password</label>
          <input type="password" id="password" name="password" required>
        </div>
        <div class="form-buttons">
          <button type="submit" class="form-send-button">Enviar</button>
          <button type="button" class="form-forgot-password">Olvidé mi contraseña</button>
        </div>
      </form>
    `
  }
}

customElements.define('login-component', Login)
