import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Productos from './components/Clase7/Productos';
import NavBar from './components/Clase7/NavBar';
import Error404 from './components/Clase7/Error404';
import Item from './components/Clase7/Item';
import CartContextProvider from './components/context/CartContext';
import PruebaContexto from './components/context/PruebaContexto';

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path={"/"} element={<PruebaContexto />} />
          <Route exact path={"/productos"} element={<Productos />} />
          <Route path={"/categoria/:categoryId"} element={<Productos />} />
          <Route path={"/item/:id"} element={<Item />} />
          <Route path={"*"} element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
