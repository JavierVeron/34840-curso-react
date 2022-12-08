import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Productos from './components/Clase7/Productos';
import NavBar from './components/Clase7/NavBar';
import Error404 from './components/Clase7/Error404';
import Item from './components/Clase7/Item';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path={"/"} element={<Productos />} />
        <Route exact path={"/productos"} element={<Productos />} />
        <Route path={"/categoria/:categoryId"} element={<Productos />} />
        <Route path={"/item/:id"} element={<Item />} />
        <Route path={"*"} element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
