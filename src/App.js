import Listar from './Componentes/Listar.js'
import Add from './Componentes/Add.js'
function App() {
  return (
    <div className="p-3 mb-2 bg-dark text-white">
      <header className="navbar navbar-inverse p-3 mb-2 bg-danger text-white">
       <h1>Agenda </h1>
       <h5>Agenda que muestra y agrega contactos (Virginia Martinez)</h5>

      </header>
      <div className="row">
      <nav className="col container "><Add/></nav>
      <nav className="col"><Listar /></nav>
      </div>
    </div>
  );
}

export default App;
