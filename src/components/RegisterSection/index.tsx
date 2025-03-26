import styles from "./styles.module.css";

const RegisterSection = () => {
  return (
    <section className={styles.section}>
      <nav>
        <ul>
          <li>
            <a className={styles.item} href="http://www.ifms.edu.br/">
              Site do IFMS
            </a>
          </li>
        </ul>
        <hr />
      </nav>
      <main>
        <h2>Cadastre-se</h2>

        <form method="post" action="cadastrar.php">
          <p>
            Cadastre-se como
            <select name="perfil">
              <option value="estudante">Estudante</option>
              <option value="professor">Professor</option>
            </select>
          </p>
          <p>
            Nome:
            <input type="text" name="nome" placeholder="nome" required />
          </p>
          <p>
            Email:
            <input type="email" name="email" placeholder="email" required />
          </p>
          <p id="paiSenha1">
            Senha:
            <input
              type="password"
              id="senha1"
              placeholder="senha"
              name="senha"
              required
            />
          </p>
          <p id="paiSenha2">
            Repita a senha:
            <input
              type="password"
              id="senha2"
              required
              placeholder="repita a senha"
            />
          </p>
          <p>
            Foto:
            <input type="file" name="foto" />
          </p>
          <p>
            CPF (somente números):
            <input type="tel" placeholder="CPF" name="cpf" required />
          </p>
          <p>
            Data de nascimento (dd/mm/aaaa)
            <input type="date" required name="dataNasc" />
          </p>

          <button type="submit">Cadastrar</button>
        </form>
      </main>
      <aside className={styles.aside}>
        <h2>Últimas notícias</h2>
        <hr />
        <p>Aberto processo seletivo</p>
      </aside>
    </section>
  );
};
export default RegisterSection;
