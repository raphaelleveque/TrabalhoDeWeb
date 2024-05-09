import style from "./Login.module.css"
import Header from "../header"


function Login(){
    return(
    <>
        <Header/>
        <div class="informacoes">
            <div class="border">
                <div class="evento">
                    <div class="conteudo">
                        <div class="formulario-container">
                            <h2>Entre em sua conta</h2>
                            <form id="formao500" name="formao500" action="" method="post">
                                <label for="email">E-mail:</label>
                                <input type="email" name="email" maxlength="100"
                                    placeholder="fulano.de.tal@email.com"
                                    required />
                
                                <label for="senha">Senha:</label><br />
                                <input type="password" name="senha" Maxlength="30"/>
                
                                <input type="hidden" name="formulario_login" value={1} required />
                                <input type="submit" name="botao" value="Logar" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    );

};

export default Login;