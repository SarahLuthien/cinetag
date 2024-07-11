import Favorito from "pages/Favorito";
import Inicio from "pages/Inicio";
import PaginaBase from "pages/PaginaBase";
import PaginaNaoEncontrada from "pages/PaginaNaoEncontrada";
import Player from "pages/Player";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaBase />}>
          <Route index element={<Inicio />}></Route>
          <Route path="Favorito" element={<Favorito />}></Route>
          <Route path=":id" element={<Player />}></Route>
          <Route path="*" element={<PaginaNaoEncontrada />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
