import styles from "./Footer.module.css";
import imgLogo from "../../assets/logo-bemprotege.svg"
function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.footer_text1}>
          <img src={imgLogo} alt="" />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem non alias natus possimus? At tempore perferendis.
          </p>
        </div>
        <div className={styles.footer_text2}>
          <h1>
            Atendimento <strong>0000 0000</strong>
          </h1>
          <div className={styles.text2}>
              <p>Rua Rio de Janeiro, n* 1279 - Lourdes</p>
              <p>Belo Horizonte/MG 30160-042</p>
              <p>meu@email.com.br</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
