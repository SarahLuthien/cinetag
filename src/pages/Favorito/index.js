import { useFavoritoContext } from "Context/Favorito";
import styles from "./Favorito.module.css"
import Banner from "components/Banner";
import Card from "components/Card";
import Titulo from "components/Titulo";


function Favorito(){
    const {favorito} =  useFavoritoContext();

    return(
        <>
            <Banner imagem="favoritos" />
            <Titulo>
                <h1>Meus Favoritos</h1>
            </Titulo>
            <section className={styles.container}>
               {favorito.map((fav) =>{
                return <Card {...fav} key={fav.id} />
               })}
            </section>
        </>
    )
}

export default Favorito;