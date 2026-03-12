import type { InterfazSostenible } from "../data/Ods";

interface CartaProps {
  itemsOds: InterfazSostenible;
}

export const Carta = ({ itemsOds }: CartaProps) => {
  return (
    <div className="Card">
      <h2>ODS {itemsOds.id}</h2>
      <p className="ods-title">{itemsOds.odsfavorito}</p>
      <p className="ods-estado">
        <strong>Estado: </strong>
        <span className={`estado-${itemsOds.estado.toLowerCase().replace(" ", "-")}`}>
          {itemsOds.estado}
        </span>
      </p>
    </div>
  );
};