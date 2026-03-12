export const ListaODS = {
  ods1: "ODS 1: Fin de la pobreza",
  ods2: "ODS 2: Hambre cero",
  ods3: "ODS 3: Salud y bienestar",
  ods4: "ODS 4: Educación de calidad",
  ods5: "ODS 5: Igualdad de género",
  ods6: "ODS 6: Agua limpia y saneamiento",
  ods7: "ODS 7: Energía asequible y no contaminante",
  ods8: "ODS 8: Trabajo decente y crecimiento económico",
  ods9: "ODS 9: Industria, innovación e infraestructura",
  ods10: "ODS 10: Reducción de las desigualdades",
  ods11: "ODS 11: Ciudades y comunidades sostenibles",
  ods12: "ODS 12: Producción y consumo responsables",
  ods13: "ODS 13: Acción por el clima",
  ods14: "ODS 14: Vida submarina",
  ods15: "ODS 15: Vida de ecosistemas terrestres",
  ods16: "ODS 16: Paz, justicia e instituciones sólidas",
  ods17: "ODS 17: Alianzas para lograr los objetivos",
} as const;

export type ListaODS = typeof ListaODS[keyof typeof ListaODS];

export type EstadoOds = "Aprobado" | "En proceso" | "Pendiente" | "Rechazado";

export interface InterfazSostenible {
  id: number;
  odsfavorito: ListaODS;
  estado: EstadoOds;
}

export const odsAlumnos: InterfazSostenible[] = [
  {
    id: 1,
    odsfavorito: ListaODS.ods1,
    estado: "Aprobado",
  },
  {
    id: 2,
    odsfavorito: ListaODS.ods2,
    estado: "En proceso",
  },
  {
    id: 3,
    odsfavorito: ListaODS.ods3,
    estado: "Aprobado",
  },
  {
    id: 4,
    odsfavorito: ListaODS.ods4,
    estado: "En proceso",
  },
  {
    id: 5,
    odsfavorito: ListaODS.ods5,
    estado: "Pendiente",
  },
  {
    id: 6,
    odsfavorito: ListaODS.ods6,
    estado: "Aprobado",
  },
  {
    id: 7,
    odsfavorito: ListaODS.ods13,
    estado: "Aprobado",
  },
  {
    id: 8,
    odsfavorito: ListaODS.ods16,
    estado: "En proceso",
  },
];
