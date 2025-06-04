import styles from "./styles.module.css";

const Footer = () => {
  const mudarTema = (tema: string) => {
    const element = document.body;
    element.className = tema;
  };

  return (
    <footer className={styles.footer}>
      <hr />
      <p>&copy;Todos os direitos reservados;</p>
      <div className={styles.temas}>
        <button
          onClick={() => {
            mudarTema("light");
          }}
        >
          Light
        </button>
        <button
          onClick={() => {
            mudarTema("dark");
          }}
        >
          Dark
        </button>
        <button
          onClick={() => {
            mudarTema("impress");
          }}
        >
          Impressão
        </button>
      </div>
    </footer>
  );
};

export default Footer;
