import Header from "../header";
import Style from "./Sobre.module.css"
import img1 from "../../assets/img1.png"
import img2 from "../../assets/img2.jpg"
import img3 from "../../assets/img3.jpg"


const OperacaoNatal = () => {
	return (
		<>
			<Header/>
			<section id="Conteudo">

			<div className="intro">
				<h2>Sobre</h2>
				<h3>Saiba um pouco mais sobre o nosso projeto</h3>
			</div>

			<div className={Style.informacoes}>
				<div className={Style.border}>
					<div className={Style.carrossel}>
						<img src={img1} alt="Equipe da operação natal com crianças"/>
						<img src={img2} alt="Criança sendo maquiada por uma organizadora da Operação Natal"/>
						<img src={img3} alt="Papai Noel com crianças"/>
					</div>
				</div>

				<div className={Style.border}>
					<div className={Style.evento}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore veniam in eius, expedita fugiat cum doloremque distinctio, magni delectus sed dolorum maxime quam temporibus voluptatem. Eaque quis dolorum perferendis sunt?
					</div>
				</div>
			</div>
			</section>
		</>

	);
  };
  
  export default OperacaoNatal;