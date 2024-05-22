import Style from "./Login.module.css"
import Header from "../header"
import { useState } from "react";

function Login() {
  const [isCadastro, setIsCadastro] = useState(false);

  const toggleCadastro = () => {
    setIsCadastro(!isCadastro);
  }

  return (
    <>
      <Header />
      <div className={Style.info}>
        <h2>{isCadastro ? "Crie sua conta:" : "Entre em sua conta:"}</h2>
      </div>
      <div className={Style.informacoes}>
        <div className={Style.border}>
          <div className={Style.evento}>
            <div className={Style.conteudo}>
              <div className={Style.formulario}>
                <form id="formao500" name="formao500" action="" method="post" style={{ textAlign: "center" }}>
                  <label htmlFor="email">E-mail:</label><br />
                  <input type="email" name="email" maxLength="100"
                    placeholder="Digite seu e-mail"
                    required /><br /><br />

                  <label htmlFor="senha">Senha:</label><br />
                  <input type="password" name="senha" maxLength="30"
                    placeholder="Digite sua senha"
                    required /><br /><br />

                  {isCadastro && (
                    <>
                      <label htmlFor="confirmarSenha">Confirmar Senha:</label><br />
                      <input type="password" name="confirmarSenha" maxLength="30"
                        placeholder="Confirme sua senha"
                        required /><br /><br />
                    </>
                  )}

                  <input type="hidden" name={isCadastro ? "formulario_cadastro" : "formulario_login"} value={1} required />
                  <input className={Style.botao} type="submit" name="botao" value={isCadastro ? "Cadastrar" : "Logar"} />
                </form>
                {isCadastro ? (
                  <p className={Style.cadastro}>
                    Já possui uma conta?
                    <button onClick={toggleCadastro} tabIndex="0" className={Style.toggleButton}>Faça Login</button>.
                  </p>
                ) : (
                  <p className={Style.cadastro}>
                    Ainda não tem uma conta?
                    <button onClick={toggleCadastro} tabIndex="0" className={Style.toggleButton}>Cadastre-se aqui</button>.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
