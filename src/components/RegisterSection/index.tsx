import { useState } from "react";
import styles from "./styles.module.css";
import TipoUsuario from "../../enums/TipoUsuario";
import InputText from "../InputText";
import InputPassword from "../InputPassword";
import { Link } from "react-router-dom";

const RegisterSection = () => {
  const [selectedTipe, setSelectedType] = useState("");
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userConfirmPassword, setUserConfirmPassword] = useState("");
  const [userPicture, setUserPicture] = useState("");
  const [userCpf, setUserCpf] = useState("");
  const [userBirthDate, setUserBirthDate] = useState("");

  return (
    <section className={styles.section}>
      <nav>
        <Link to="https://www.ifms.edu.br/">Site do IFMS</Link>
        <hr />
      </nav>
      <main>
        <h2>Cadastre-se</h2>
        <form action="">
          <div>
            <label className={styles.label} htmlFor="tipo_user">
              Cadastre-se como:
            </label>
            <select
              name="tipo_user"
              value={selectedTipe}
              onChange={(e) => {
                e.preventDefault();
                setSelectedType(e.target.value);
              }}
            >
              <option value={TipoUsuario.estudante}>Estudante</option>
              <option value={TipoUsuario.professor}>Professor</option>
            </select>
          </div>
          <InputText
            name="nome"
            value={userName}
            setter={setUserName}
            label="Nome"
          />
          <InputText
            name="email"
            value={userEmail}
            setter={setUserEmail}
            label="Email"
          />
          <InputPassword
            name="senha"
            setter={setUserPassword}
            value={userPassword}
            label="Senha"
          />
          <InputPassword
            name="repita a senha"
            setter={setUserConfirmPassword}
            value={userConfirmPassword}
            label="Repita a senha"
          />
          <div>
            <label className={styles.label} htmlFor="foto">
              Foto:
            </label>
            <input
              type="file"
              name="foto"
              value={userPicture}
              onChange={(e) => {
                e.preventDefault();
                setUserPicture(e.target.value);
              }}
            />
          </div>
          <InputText
            name="CPF"
            value={userCpf}
            setter={setUserCpf}
            label="CPF (somente números)"
          />
          <div>
            <label className={styles.label} htmlFor="nascimento">
              Data de nascimento:
            </label>
            <input
              type="date"
              name="nascimento"
              value={userBirthDate}
              onChange={(e) => {
                e.preventDefault();
                setUserBirthDate(e.target.value);
              }}
            />
          </div>
          <button
            className={styles.submitBtn}
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            ➥ Cadastrar
          </button>
        </form>
      </main>
      <aside className={styles.aside}>
        <h2>Últimas notícias</h2>
        <span>Aberto processo seletivo</span>
      </aside>
    </section>
  );
};
export default RegisterSection;
