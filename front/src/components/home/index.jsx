import React, { useEffect, useState } from 'react';
import Header from "../header";
import Style from "./home.module.css"
import ReactMarkdown from "react-markdown";

const OperacaoNatal = () => {
	const [content, setContent] = useState(null);
	const strapiUrl = 'http://localhost:1337/'

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch('http://localhost:1337/api/home?populate=*'); 
				const data = await response.json();
				setContent(data.data);
			} catch (error) {
				console.error('Erro ao carregar dados', error);
			}
		};

		fetchData();
	}, []);

	if (!content) {
		return <p>Carregando...</p>; 
	}

	return (
		<>
			<Header />
			<section id="Conteudo">
				<div className="intro">
					<h2>{content.TituloPrincipal}</h2> 
					<h3>{content.Subtitulo}</h3>
				</div>

				<div className={Style.informacoes}>
					<div className={Style.border}>
						<div className={Style.carrossel}>
							{content.Imagens.map((img, index) => (
								<img key={index} src={strapiUrl + img.url} alt={img.alternativeText} />
							))}
						</div>
					</div>

					<div className={Style.border}>
						<div className={Style.evento}>
							<ReactMarkdown>
								{content.ConteudoTexto}
							</ReactMarkdown>							
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default OperacaoNatal;