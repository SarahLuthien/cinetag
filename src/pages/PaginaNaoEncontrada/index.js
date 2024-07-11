import styles from "./PaginaNaoEncontrada.module.css";

function PaginaNaoEncontrada (){
    return(
        <section className={styles.container}>
            <h1>Ops!</h1>
            <p>O conteúdo que você procura não está disponível</p>
        </section>

    )
}

export default PaginaNaoEncontrada;