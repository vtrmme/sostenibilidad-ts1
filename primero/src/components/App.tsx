import { Carta } from "./Carta";
import { odsAlumnos } from "../data/Ods";
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