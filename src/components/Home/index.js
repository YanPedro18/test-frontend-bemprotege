import Container from "../Container"
import styles from "./Home.module.css"
import imgHome from "../../assets/amigos-proximos-viajando-de-carro.jpg"
function Home() {
  return (
    <>
       
    <Container>
        <div className={styles.card_text}>
            <h1>ESSENCIAL È ESTAR SEGURO</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam</p>
            <button>CONHEÇA AS SOLUÇÔES</button>
        </div>
        <div className={styles.cardImg}><img src={imgHome} alt="" />
        </div>

    </Container>
        <hr />
    </>
  )
}

export default Home;