import Style from "./Login.module.css"
import Header from "../header"
import { useState } from "react";
import { useNavigate } from 'react-router-dom'


function Login() {

  const [isCadastro, setIsCadastro] = useState(false);
  const [usrLogin, setusrLogin] = useState("");
  const [password, setpassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const toggleCadastro = () => {
    setIsCadastro(!isCadastro);
  }

  const navigate = useNavigate();

  const successCb = (user) => {
    console.log(user);

  };

  const errorCb = (error) => {
    console.log(error);
  };

  const handleCadastro = async () => {
    if (password != confirmPassword) {
      console.log("Senhas devem coincidir!");
      return;
    }

    const user = {
      login: usrLogin,
      password: password,
    };

    console.log(user)

    const cadastro = await fetch('http://127.0.0.1:3000/login', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    const data = await cadastro.json();

    if (cadastro.status === 200) {
      successCb(data);
      return;
    }

    if (cadastro.status === 401) {
      console.log("Cadastro inválido!");
      return;
    }

    errorCb(data);
  };

  const handleLogin = async () => {
    const user = {
      login: usrLogin,
      password: password,
    };

    console.log(user)

    const login = await fetch(`http://127.0.0.1:3000/login?login=${user.login}&password=${user.password}`, {
      method: "GET"
    });

    const data = await login.json();

    if (login.status === 200) {
      successCb(data);
      return;
    }

    if (login.status === 401) {
      toastr.warning("Login inválido!");
      return;
    }

    errorCb(data);
  };

  const handleAction = async () => {
    if (isCadastro) handleCadastro()
    else handleLogin()
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
                <label htmlFor="email">E-mail:</label><br />
                <input
                  type="email"
                  name="email"
                  maxLength="100"
                  placeholder="Digite seu e-mail"
                  onChange={(e) => setusrLogin(e.target.value)}
                  value={usrLogin}
                  onKeyDown={e => { e.key === 'Enter' && handleAction() }}
                  required
                />

                <label htmlFor="senha">Senha:</label><br />

                <input
                  type="password"
                  name="senha"
                  placeholder="Digite sua senha"
                  maxLength="30"
                  onChange={(e) => setpassword(e.target.value)}
                  value={password}
                  onKeyDown={e => { e.key === 'Enter' && handleAction() }}
                />

                {isCadastro && (
                  <>
                    <label htmlFor="confirmarSenha">Confirmar Senha:</label><br />
                    <input
                      type="password"
                      name="confirmarSenha"
                      placeholder="Confirme sua senha"
                      maxLength="30"
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      value={confirmPassword}
                      onKeyDown={e => { e.key === 'Enter' && handleAction() }}
                    />
                  </>
                )}

                <input type="hidden" name={isCadastro ? "formulario_cadastro" : "formulario_login"} value={1} required />
                <input className={Style.botao} type="submit" onClick={handleAction} name="botao" value={isCadastro ? "Cadastrar" : "Logar"} />
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
