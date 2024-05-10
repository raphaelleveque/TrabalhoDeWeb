import Style from "./Login.module.css"
import Header from "../header"


function Login() {
  return (
    <>
      <Header />
      <div className={Style.info}>
        <h2>Entre em sua conta:</h2>
      </div>
      <div className={Style.informacoes}>
        <div className={Style.border}>
          <div className={Style.evento}>
            <div className={Style.conteudo}>
              <div className={Style.formulario}>

                <form id="formao500" name="formao500" action="" method="post" style={{ textAlign: "center" }}>
                  <label for="email">E-mail:</label><br />
                  <input type="email" name="email" maxlength="100"
                    placeholder="Digite seu e-mail"
                    required /><br /><br />

                  <label for="senha">Senha:</label><br />
                  <input type="password" name="senha" Maxlength="30"
                    placeholder="Digite sua senha"
                    required /><br /><br />

                  <input type="hidden" name="formulario_login" value={1} required />
                  <input className={Style.botao} type="submit" name="botao" value="Logar" />
                </form>
                <p className={Style.cadastro}>Ainda não tem uma conta? <a href="">Cadastre-se aqui</a>.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );

};


export default Login;