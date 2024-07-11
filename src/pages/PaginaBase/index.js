import Container from "components/Container";
import Cabecalho from "components/Cabecalho";
import FavoritoProvider from "Context/Favorito";
import Rodape from "components/Rodape";
import { Outlet } from "react-router-dom";

function PaginaBase (){
    return(
        <main>
            <Cabecalho/>
            <FavoritoProvider>
                <Container>
                    <Outlet />
                </Container>
            </FavoritoProvider>
            <Rodape/>
        </main>
    )
}

export default PaginaBase;