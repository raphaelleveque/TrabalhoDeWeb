import Header from "../header";


function Contato(){
    return(
    <>
        <Header/>
        
        <section id="Conteudo">
            <div className="intro">
                <h2>Contato</h2>
                <h3>Entre em contato conosco!</h3>
            </div>


            <div className="informacoes">
                <div className="border">
                    <div className="evento">
                        <div className="conteudo">
                            <div className="formulario-container">
                                <h2>Entre em Contato</h2>
                                <form id="formao500" name="formao500" action="" method="post">
                                    <label for="nome">Nome:</label><br />

                                    <input type="text" name="nome" maxlength="100" required /><br /><br />
                    
                                    <label for="email">E-mail:</label><br />
                                    
                                    <input type="email" name="email" maxlength="100"
                                        placeholder="Por favor, insira um e-mail válido para obter resposta de volta."
                                        required /><br /><br />
                    
                                    <label for="msg">Mensagem:</label><br />
                                    <textarea name="msg" rows="6" required></textarea><br /><br />
                    
                                    <input type="hidden" name="formulario_contato" value={'1'} required />
                                    <input type="submit" name="botao" value="Enviar" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    </>
    );

}

export default Contato;