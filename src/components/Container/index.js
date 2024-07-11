import { Children, useContext } from "react"
import styles from "./Container.module.css"
import { FavoritoContext } from "Context/Favorito";

function Container ({ children }){
    return (
    <section className={styles.container}>
        {children}
    </section>
)
}

export default Container;


