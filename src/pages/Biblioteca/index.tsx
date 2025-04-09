import Footer from "../../components/Footer";
import Header from "../../components/Header";
import NavSection from "../../components/NavSection";
import styles from "./styles.module.css";

const Biblioteca = () => {
  return (
    <>
      <Header pageName="Biblioteca" />
      <NavSection>
        <main>
          <h2>Biblioteca</h2>
          <p>
            As Bibliotecas do IFMS são responsáveis por promover e disseminar o
            acesso à informação, apoiando as atividades de ensino, pesquisa,
            extensão e inovação no IFMS.
          </p>
          <b>Acervo</b>
          <b>
            Buscar publicações (livros, revistas, artigos, etc.) no acervo
            físico
          </b>
          <ul>
            <li>
              <a
                href="http://biblioteca.ifms.edu.br/pergamum/biblioteca/index.php"
                title="Catálogo online - Pergamum"
                target="_blank"
              >
                Catálogo online (Sistema Pergamum)
              </a>
            </li>
          </ul>
          <hr className={styles.separator} />
          <b>Bibliotecas virtuais</b>
          <ul>
            <li>
              <a
                href="/matricula/logar-bv-pearson"
                title="BVPearson"
                target="_blank"
              >
                BV-Pearson
              </a>
            </li>
          </ul>
          <hr className={styles.separator} />
          <b>Periódicos</b>
          <ul>
            <li>
              <a
                href="http://www-periodicos-capes-gov-br.ez365.periodicos.capes.gov.br/index.php"
                title="Minha Biblioteca"
                target="_blank"
              >
                Periódicos Capes
              </a>
              : publicações científicas nacionais e internacionais de todas as
              áreas do conhecimento.
            </li>
          </ul>
          <hr className={styles.separator} />
          <b>Regulamento</b>
          <ul>
            <li>
              <a
                href="http://www.ifms.edu.br/centrais-de-conteudo/documentos-institucionais/regulamentos/regulamento-da-biblioteca.pdf"
                target="_blank"
                title="Regulamento da biblioteca"
              >
                Regulamento da biblioteca
              </a>
            </li>
          </ul>
          Caso ocorra alguma inconsistência favor procurar a Central de
          Relacionamento (CEREL) do seu campus.
        </main>
      </NavSection>
      <Footer />
    </>
  );
};
export default Biblioteca;
