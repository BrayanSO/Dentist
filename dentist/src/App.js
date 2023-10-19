import React from 'react';
import '../src/style/App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Página del Dentista</h1>
      </header>

      <div className="services">
        <div className="service">
          <h3>Servicio 1</h3>
          <p>Descripción del servicio 1</p>
        </div>
        <div className="service">
          <h3>Servicio 2</h3>
          <p>Descripción del servicio 2</p>
        </div>
        <div className="service">
          <h3>Servicio 3</h3>
          <p>Descripción del servicio 3</p>
        </div>
      </div>

      <footer>
        <p>© 2023 Página del Dentista. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
