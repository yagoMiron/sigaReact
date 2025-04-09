import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import NavSection from "../../components/NavSection";
import styles from "./styles.module.css";

const Home = () => {
  return (
    <>
      <Header pageName="Home" />
      <NavSection>
        <>
          <main className={styles.main}>
            <h2>Olá, cat</h2>
            <p>Prezado(a) cat,</p>
            <p>
              A partir de agora você passará a ter acesso aos seus dados no
              Sistema Acadêmico do IFMS.
            </p>
            <p>
              Essa é a segunda de várias etapas que virão. A primeira foi o
              acesso ao boletim, agora, nesta fase você poderá consultar em
              tempo real quais as unidades que está matriculado no semestre, ver
              horários de aula e permanência, bem como acessar notas e faltas,
              além do boletim.
            </p>
            <p>
              Se você está fazendo mais de um curso no IFMS poderá alternar
              entre suas diferentes matrículas no canto superior esquerdo da
              tela, abaixo do texto “Sistema Acadêmico”.
            </p>
            <p>
              No menu "<Link to={"/disciplinas"}>Disciplinas</Link>" você verá a
              relação de todas as unidades que está matriculado no semestre
              atual. Clicando sobre o nome de cada uma, você verá os horários de
              permanência do(a) professor(a) e os horários e locais de aula.
            </p>
            <p>
              Já em "<Link to={"/boletim"}>Boletim</Link>" você conseguirá
              verificar, além de sua nota, o número de faltas e o percentual que
              elas representam. Lembre-se que deve ter pelo menos 75% de
              frequência.
            </p>
            <p>
              Em um futuro próximo, novas funcionalidades serão disponibilizadas
              na Área do Estudante, como solicitação de rematrícula, acesso ao
              plano de ensino do professor, à matriz curricular do curso, gerar
              atestado de matrícula, acesso ao histórico escolar, entre outras.
            </p>
            <p>
              Fique à vontade para dar sugestões para melhoria desse espaço.
            </p>
            <p>Aproveitem!</p>
            <p>Pró-Reitoria de Ensino e Reitoria</p>
          </main>
          <aside className={styles.aside}>
            <h2>Últimas notícias</h2>
            <span>Aberto processo seletivo</span>
          </aside>
        </>
      </NavSection>
      <Footer />
    </>
  );
};
export default Home;
