import Style from "./informacoes.module.css"
import img1 from "../../assets/img1.png"
import img2 from "../../assets/img2.jpg"
import img3 from "../../assets/img3.jpg"

import Header from "../header"

function Informacoes() {
  return (
    <>
      <Header />
      <section id="Conteudo">

        <div className="intro">
          <h2>Informações</h2>
          <h3>Fique Antenado nos próximos eventos!</h3>
        </div>

        <div className={Style.informacoes}>
          <div className={Style.border}>
            <div className={Style.evento}>
              <img src={img1} alt="Equipe da operação natal com crianças" />
              <div className={Style.conteudo}>
                <h4>Dia D</h4>
                <article>Dia D é o evento em que reunimos o máximo de pessoas para irmos às ruas para arrecadar doações que serão distruidas para uma série de instiuições que precisem desse auxílio.</article>
                <button>Saiba mais</button>
              </div>
            </div>
          </div>

          <div className={Style.border}>
            <div className={Style.evento}>
              <img src={img2} alt="Criança sendo maquiada por uma organizadora da Operação Natal" />
              <div className={Style.conteudo}>
                <h4>Festinha divina providência</h4>
                <article>Divina providência é uma creche que trabalhamos na qual arrecadamos sacolinhas para os alunos e distribuimos nas festinhas juntamente de um evento recheado de brincadeiras e interações com os pequenos.</article>
                <button>Saiba mais</button>
              </div>
            </div>
          </div>

          <div className={Style.border}>
            <div className={Style.evento}>
              <img src={img3} alt="Papai Noel com crianças" />
              <div className={Style.conteudo}>
                <h4>Festinha Doces Flautistas</h4>
                <article>Doces flautistas é um projeto social que visa transformação social através da música. Nas festinhas, realizamos as doações das sacolinhas arrecadas e realizamos o evento recreativo com elas!</article>
                <button>Saiba mais</button>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}

export default Informacoes;