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
        <button onClick={() => {}}>Light</button>
        <button
          onClick={() => {
            mudarTema("darktheme");
          }}
        >
          Dark
        </button>
        <button>Impressão</button>
      </div>
    </footer>
  );
};

export default Footer;
