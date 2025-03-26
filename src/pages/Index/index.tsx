import Footer from "../../components/Footer";
import Header from "../../components/Header";
import RegisterSection from "../../components/RegisterSection";
import styles from "./styles.module.css";

const Index = () => {
  return (
    <div className={styles.page}>
      <Header showLogin />
      <RegisterSection />
      <Footer />
    </div>
  );
};

export default Index;
