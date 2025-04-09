import Footer from "../../components/Footer";
import Header from "../../components/Header";
import NavSection from "../../components/NavSection";
import TableBoletim from "../../components/TableBoletim";
import styles from "./styles.module.css";

type Materia = {
  nome: string;
  professor: string;
  ch: number;
  aulas: number;
  totalFaltas: number;
  percentFaltas: number;
  n1: number;
  n2: number;
  situacao: string;
};

const Boletim = () => {
  const materias: Materia[] = [
    {
      nome: "EXEMPLO Dispositivos Móveis",
      professor: "Túlio",
      ch: 80,
      aulas: 100,
      totalFaltas: 25,
      percentFaltas: 25,
      n1: 5,
      n2: 5,
      situacao: "REPROVADO",
    },
  ];
  return (
    <>
      <Header pageName="Boletim" />
      <NavSection>
        <main>
          <TableBoletim>
            <>
              {materias.map((materia) => (
                <tr>
                  <td>
                    {materia.nome} <br /> <small>{materia.professor}</small>
                  </td>
                  <td>{materia.ch}</td>
                  <td>{materia.aulas}</td>
                  <td>{materia.totalFaltas}</td>
                  <td>{materia.percentFaltas}%</td>
                  <td>{materia.n1}</td>
                  <td>{materia.n2}</td>
                  <td>{(materia.n1 + materia.n2) / 2}</td>
                  <td>{materia.situacao}</td>
                  <td>
                    <button>Excluir</button>
                  </td>
                </tr>
              ))}
            </>
          </TableBoletim>
          <div className={styles.legenda}>
            <strong>Legenda:</strong>
            <br />
            <ul>
              <li>
                <strong>CH/Aulas: </strong>Carga horária da Unidade Curricular
                em horas / Quantidade de aulas ou encontros presenciais
                previstos.
              </li>
            </ul>
            <p>
              *Esses registros podem sofrer alterações até o final do periodo
              letivo.
            </p>
          </div>
        </main>
      </NavSection>
      <Footer />
    </>
  );
};
export default Boletim;
