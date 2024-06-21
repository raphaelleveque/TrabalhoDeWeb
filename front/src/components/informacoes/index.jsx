import Style from "./informacoes.module.css"
import img1 from "../../assets/img1.png"
import img2 from "../../assets/img2.jpg"
import img3 from "../../assets/img3.jpg"

import Header from "../header"
import { useState, useEffect } from "react"

function Informacoes() {
  const [posts, setPosts] = useState([]);

  const successCb = (data) => {
    setPosts(data);
  };

  const errorCb = (error) => {
    console.log(error);
  };

  useEffect(() => {
    handleGetBlogPosts();
  }, []);

  const handleGetBlogPosts = async () => {
    const posts = await fetch(`http://127.0.0.1:3000/postagens`, {
      method: "GET"
    });

    const data = await posts.json();

    if (posts.status === 200) {
      successCb(data);
      return;
    }

    if (posts.status === 500) {
      console.log("Erro ao carregar as postagens.");
      return;
    }

    errorCb(data);
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
                <img src={post.img} alt={post.title} />
                <div className={Style.conteudo}>
                  <h4>{post.title}</h4>
                  <article>{post.body}</article>
                  <button>Saiba mais</button>
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