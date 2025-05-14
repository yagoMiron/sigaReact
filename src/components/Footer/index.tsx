import styles from "./styles.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <hr />
      <p>&copy;Todos os direitos reservados;</p>
      <div className={styles.temas}>
        <button onClick={() => {}}>Light</button>
        <button>Dark</button>
        <button>Impressão</button>
      </div>
    </footer>
  );
};

export default Footer;
