
import styles from "../styles/Home.module.css";
import DropDown from "./DropDown";
import { Link } from "@nextui-org/react";

const Header = () => {
  const logo = {
    key: "/"
  }
  return (
    <header className={styles.header}>
      <div className={styles.sub__header}>
        <div className={styles.word__header}>Trabalhamos com vários bancos</div>
      </div>
      <div className={styles.main__header}>
        <div className={styles.container}>
          <div>
            <Link href={logo.key}  id={styles.logo}> Espaço Digital <br/>Financeiro</Link>
         
         </div>

          <div className={styles.navbar}>
          <DropDown></DropDown>
          <a href="#" className={styles.aa}>Instituição</a>
          </div>
        </div>
      </div>

    </header>
  );
};

export default Header;
