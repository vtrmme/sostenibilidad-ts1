import { Carta } from "./Carta.js";
import { odsAlumnos } from "../data/Ods.js";
import "./App.css";

function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>Objetivos de Desarrollo Sostenible</h1>
      </header>
      <div className="grid">
        {odsAlumnos.map((item) => (
          <Carta key={item.id} itemsOds={item} />
        ))}
      </div>
    </div>
  );
}

export default App;