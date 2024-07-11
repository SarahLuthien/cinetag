import { Link } from "react-router-dom";
import logo from "./Logo-cinetag-branco 1.png"; 
import styles from "./Cabecalho.module.css";
import CabecalhoLink from "components/CabecalhoLink";

function Cabecalho() {
    return (
        <header className={styles.cabecalho}>
            <Link to="/">
            <img  src={logo} alt="logo do Aluraflix"/>
            </Link>
            <nav>
                <CabecalhoLink url="/">
                Home
                </CabecalhoLink>
                <CabecalhoLink url="/Favorito">
                Favorito
                </CabecalhoLink>
            </nav>
        </header>
    )
}

export default Cabecalho;