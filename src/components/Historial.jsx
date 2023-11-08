import Encabezado from "./Encabezado";
import useHistorial from "../hooks/useHistorial";
import ValorHistorial from "./ValorHistorial";

const Historial = () => {
  const { historial } = useHistorial();
  return (
    <>
      <Encabezado />
      <ul>
        {historial.map((elemento, indice) => (
          <ValorHistorial key={indice} {...elemento} />
        ))}
      </ul>
    </>
  );
};

export default Historial;
