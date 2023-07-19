import styles from "./Card.module.css";

function Card({ title, content }) {
  return (
    <>
      <div className={styles.card}>
        <h1>{title}</h1>
        <p>{content}</p>
        <a href="/">Saiba Mais</a>
      </div>
    
    </>
  );
}

export default Card;
