import Header from "../header";
import Style from "./home.module.css"
import img1 from "../../assets/img1.png"
import img2 from "../../assets/img2.jpg"
import img3 from "../../assets/img3.jpg"


const OperacaoNatal = () => {
	return (
		<>
			<Header/>
			<section id="Conteudo">

			<div className="intro">
				<h2>Home</h2>
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
						<p>
					    &nbsp;A Operação Natal é um projeto de extensão formado por alunos da USP - São Carlos e da Universidade Federal de São Carlos - UFSCar com o objetivo de desenvolver atividades sociais na cidade de São Carlos, SP, especialmente no segundo semestre de cada ano. 
						</p>
						<p>
						&nbsp;Dentre as atividades oferecidas pelo grupo estão:
						</p>
						<ul>
							<li>
							- visitas às instituições ajudadas para realizar atividades com os assistidos, 
							</li>
							<li>
							- dias de arrecadação em que os alunos se dispõem na porta de mercados para angariar donativos, 
							</li>
							<li>
							- arrecadação de roupas para doação no evento chamado Operação Loja Solidária,
							</li>
							<li>
							- campanhas de doação de sangue,
							</li>
							<li>
							- conscientização em escolas da cidade,
							</li>
							<li>
							- revitalizações,
							</li>
							<li>
							- entre outras diversas atividades que visam o auxílio da comunidade. 
							</li>
						</ul>
						<p>
						&nbsp;Além do citado acima, o projeto possui seu principal movimento, o Dia D, que ocorre ao final do segundo semestre do ano. Nesse dia, membros e voluntários do projeto se espalham por inúmeros bairros da cidade para passar de porta em porta pedindo doações. Por fim, também são feitos kits de presentes para cada assistido das instituições ajudadas, a serem entregues próximas a dezembro em eventos preparados para isso. Esses kits contêm roupas, calçado, guloseima, produtos de higiene e um item a mais, variante conforme a idade de quem irá recebê-lo.
						</p>
						<p>
						&nbsp;Com todo esse trabalho, em 2019 a Operação Natal arrecadou mais de 26 toneladas de donativos, variantes entre itens de limpeza, higiene e alimentos, impactando diretamente mais de 5800 pessoas em 28 instituições. Neste ano, visando manter o alto alcance e fundamental auxilio que oferece, foi aberto esse canal de doação para que você também possa fazer parte dessa história, ajudando na construção desse enorme impacto. Os recursos aqui arrecadados serão destinados para a comprar de itens faltantes nos kits e de itens necessários às instituições ajudadas! 
						</p>

					</div>
				</div>
			</div>
			</section>
		</>

	);
  };
  
  export default OperacaoNatal;