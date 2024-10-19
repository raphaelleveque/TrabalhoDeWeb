import Style from "./informacoes.module.css"
import img1 from "../../assets/img1.png"

import Header from "../header"
import { useState, useEffect } from "react"

function Informacoes() {
 
  const [posts, setContent] = useState(null);
	const strapiUrl = 'http://localhost:1337/'

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch('http://localhost:1337/api/Postagems?populate=*'); 
				const data = await response.json();
				setContent(data.data);
			} catch (error) {
				console.error('Erro ao carregar dados', error);
			}
		};

		fetchData();
	}, []);

	if (!posts) {
		return <p>Carregando...</p>; 
	}

  return (
    <>
      <Header />
      <section id="Conteudo">

        <div className="intro">
          <h2>Informações</h2>
          <h3>Fique Antenado nos próximos eventos!</h3>
        </div>
        <div className={Style.informacoes}>
          {posts.map((post) => (
            <div className={Style.border}>
              <div className={Style.evento}>
                <img src={strapiUrl + post.Imagem.url} alt={post.Titulo} />
                <div className={Style.conteudo}>
                  <h4>{post.Titulo}</h4>
                  <article>{post.Conteudo}</article>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </>
  );
}

export default Informacoes;
