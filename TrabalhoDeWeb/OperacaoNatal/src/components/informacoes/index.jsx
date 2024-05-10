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

        <div className={Style.info}>
          <h2>Informações</h2>
          <h3>Fique Antenado nos próximos eventos!</h3>
        </div>

        <div className={Style.informacoes}>
          <div className={Style.border}>
            <div className={Style.evento}>
              <img src={img1} alt="Equipe da operação natal com crianças" />
              <div className={Style.conteudo}>
                <h4>Dia D</h4>
                <article>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi esse amet tenetur rem voluptatum recusandae id ut eos culpa sed in beatae fuga minima delectus autem, accusantium possimus sint quod.</article>
                <button>Saiba mais</button>
              </div>
            </div>
          </div>

          <div className={Style.border}>
            <div className={Style.evento}>
              <img src={img2} alt="Criança sendo maquiada por uma organizadora da Operação Natal" />
              <div className={Style.conteudo}>
                <h4>Festinha divina providência</h4>
                <article>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi esse amet tenetur rem voluptatum recusandae id ut eos culpa sed in beatae fuga minima delectus autem, accusantium possimus sint quod.</article>
                <button>Saiba mais</button>
              </div>
            </div>
          </div>

          <div className={Style.border}>
            <div className={Style.evento}>
              <img src={img3} alt="Papai Noel com crianças" />
              <div className={Style.conteudo}>
                <h4>Festinha Doces Flautistas</h4>
                <article>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi esse amet tenetur rem voluptatum recusandae id ut eos culpa sed in beatae fuga minima delectus autem, accusantium possimus sint quod.</article>
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