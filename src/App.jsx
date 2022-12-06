import './App.css';
import FetchApi from './components/Clase6/FetchApi';

function App() {
  return (
    <div className="container">
      <FetchApi buscar={"Iphone 14"} limite={12} />
    </div>
  );
}

export default App;
