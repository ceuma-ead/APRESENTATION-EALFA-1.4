const { contexto } = __configuracoesServidor__.disciplina;

if (contexto === "") {
    document.body.innerHTML = `
      <style>
       body {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background-color: #2d2d2d;
          margin: 0;
        }
        .message-box {
          text-align: center;
          padding: 30px 20px;
          border-radius: 12px;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
          max-width: 400px;
          display: flex;
          flex-direction:column;
           background-color: #4a4a4a;
          width: 100%;
        }
        .message-box h1 {
          font-size: 28px;
          color: #fff;
        }
        .message-box p {
            padding: 30px 20px;
          border-radius: 12px;
     
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);

           background-color:  #dc3545;
          font-size: 18px;
          color: #d1d1e0;
        }
      </style>
      <div class="message-box">
        <h1>🚨 Atenção!</h1>
        <p>O contexto da AI não pode ser vazio.</p>
      </div>
    `;
}
