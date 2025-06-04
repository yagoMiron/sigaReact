import styles from "./styles.module.scss";
import eye from "../../assets/svg/eye.svg";
import eye_slash from "../../assets/svg/eye_slash.svg";
import { useState } from "react";

type Props = {
  name: string;
  value: string;
  setter: React.Dispatch<React.SetStateAction<string>>;
  label?: string;
  invertColorIcon?: boolean;
};

const InputPassword = ({
  name,
  value,
  setter,
  label,
  invertColorIcon,
}: Props) => {
  const [shouldShowPassword, setShowPassword] = useState(false);
  const switchShowPassword = () => {
    setShowPassword(!shouldShowPassword);
  };
  return (
    <div className={styles.container}>
      {label && <label htmlFor={name}>{label}:</label>}
      <input
        type={shouldShowPassword ? "text" : "password"}
        placeholder={name}
        name={name}
        value={value}
        onChange={(e) => {
          e.preventDefault();
          setter(e.target.value);
        }}
      />
      <img
        className={`${styles.icon} ${invertColorIcon && styles.invert} eye`}
        src={shouldShowPassword ? eye_slash : eye}
        onClick={switchShowPassword}
      />
    </div>
  );
};
export default InputPassword;
