import Header from "../header";
import Style from "./Contribuicoes.module.css"


function Contribuicoes() {
    return (
        <>
            <Header />

            <section id="Conteudo">
                <div className="intro">
                    <h2>Contribuições</h2>
                    <h3>Contribua para o nosso projeto!</h3>
                </div>

                <div className={Style.informacoes}>
                    <div className={Style.border}>
                        <div className={Style.evento}>
                            <img src="src/img1.png" alt="" />
                            <div className="conteudo">
                                <h4>Contribua Aqui!</h4>
                                <article>Para realizar sua contribuição ao nosso projeto, por gentileza clique no botão abaixo e, ao abrir a página, clique no botão NOVA INSCRIÇÃO:</article>
                                <button className={Style.botao}>NOVA INSCRIÇÃO</button>
                            </div>
                        </div>
                    </div>


                    <div className={Style.border}>
                        <div className={Style.evento}>
                            <img src="src/img2.jpg" alt="" />
                            <div>
                                <h4>Quer ir além?</h4>
                                <article>Para contribuir com valores acima de R$ 60,00, por favor entre em contato com um dos seguintes canais:</article>
                                <div>
                                    <span>Email: </span><a className={Style.texto} href="mailto:proj.operacaonatal@gmail.com">proj.operacaonatal@gmail.com</a>
                                </div>
                                <div>
                                    <span>WhatsApp: </span><a className={Style.texto} href="https://api.whatsapp.com/send?phone=5561982629810">+55 61 982629810</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Contribuicoes;
