import styles from "./styles.module.css";
import eye from "../../assets/svg/eye.svg";
import eye_slash from "../../assets/svg/eye_slash.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

type Props = {
  showLogin?: boolean;
  pageName?: string;
};

const Header = ({ showLogin, pageName }: Props) => {
  const [shouldShowPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const switchShowPassword = () => {
    setShowPassword(!shouldShowPassword);
  };
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>
        Sistema Acadêmico {pageName ? " - " + pageName : ""}{" "}
      </h1>

      {showLogin && (
        <form className={styles.login}>
          <input type="email" placeholder="e-mail" name="email" />
          <input
            type={shouldShowPassword ? "text" : "password"}
            placeholder="senha"
            id="senha3"
            name="senha"
          />
          <img
            className={styles.icon}
            src={shouldShowPassword ? eye_slash : eye}
            onClick={switchShowPassword}
          ></img>
          <button
            className={styles.btn}
            onClick={(e) => {
              e.preventDefault();
              navigate("/home");
            }}
          >
            Logar
          </button>
        </form>
      )}
    </header>
  );
};

export default Header;
