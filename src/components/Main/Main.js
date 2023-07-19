
import Card from "../Card/Card"
import styles from "./Main.module.css"


function Main() {
    const cardsContent = [
        {
            title: "SOLUÇÃO 1",
            content: "Lorem ipsum dolor sit amet consectetur, adipisicing elite e quibusdam cacilds, Lorem ipsum dolor sit amet consectetur, Lorem ipsum dolor sit amet."
        },
        {
            title: "SOLUÇÃO 2",
            content: "Lorem ipsum dolor sit amet consectetur, adipisicing elite e quibusdam cacilds, Lorem ipsum dolor sit amet consectetur, Lorem ipsum dolor sit amet."
        },
        {
            title: "SOLUÇÃO 3",
            content: "Lorem ipsum dolor sit amet consectetur, adipisicing elite e quibusdam cacilds, Lorem ipsum dolor sit amet consectetur, Lorem ipsum dolor sit amet."
        },
        {
            title: "SOLUÇÃO 4",
            content: "Lorem ipsum dolor sit amet consectetur, adipisicing elite e quibusdam cacilds, Lorem ipsum dolor sit amet consectetur, Lorem ipsum dolor sit amet."
        },

    ]
  return (
    <main className={styles.main}>
        <h1>Sua proteção em primeiro lugar sempre</h1>
        <div className={styles.cards}>
            {cardsContent.map((cardValue, index) => {
                return <Card
                        key={index}
                        title={cardValue.title}
                        content={cardValue.content}
                        />
            })}
        </div>
    </main>
  )
}

export default Main