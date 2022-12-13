import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Productos from './components/Clase7/Productos';
import NavBar from './components/Clase7/NavBar';
import Error404 from './components/Clase7/Error404';
import Item from './components/Clase7/Item';
import Eventos from './components/Clase8/Eventos';
import Intercambiabilidad from './components/Clase8/Intercambiabilidad';
import Abstraccion1 from './components/Clase8/Abstraccion1';
import Abstraccion2 from './components/Clase8/Abstraccion2';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path={"/"} element={<Abstraccion2 />} />
        <Route exact path={"/productos"} element={<Productos />} />
        <Route path={"/categoria/:categoryId"} element={<Productos />} />
        <Route path={"/item/:id"} element={<Item />} />
        <Route path={"*"} element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
