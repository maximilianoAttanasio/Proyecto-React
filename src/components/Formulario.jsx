import CuadroOpciones from "./CuadroOpciones";
import Encabezado from "./Encabezado";
import { useEffect, useState } from "react";
import useFormulario from "../hooks/useFormulario";
import useHistorial from "../hooks/useHistorial";
import Swal from "sweetalert2";

const Formulario = () => {
  const [datos, setDatos] = useState([]);
  const { elementos, setElementos } = useFormulario();
  const [precio, setPrecio] = useState(0);
  const { historial, setHistorial } = useHistorial();
  const realizarCotizacion = () => {
    const { mtsCuadrados, propiedad, ubicacion } = elementos;
    if (mtsCuadrados < 20 || propiedad == 0 || ubicacion == 0) {
      Swal.fire("Error", "Debes completar todos los campos", "error");
    }
    const valorTotal = 35.86 * mtsCuadrados * propiedad * ubicacion;
    setPrecio(valorTotal);
  };

  const guardarPrecio = () => {
    setHistorial([
      ...historial,
      {
        fecha: new Date().toDateString(),
        ...elementos,
        valorTotal:
          35.86 *
          elementos.mtsCuadrados *
          elementos.propiedad *
          elementos.ubicacion,
      },
    ]);
    setPrecio(0);
  };

  useEffect(() => {
    const leerDatos = async () =>
      setDatos(await (await fetch("/datos.json")).json());
    leerDatos();
  }, []);

  return (
    <>
      <Encabezado />
      <form onSubmit={(e) => e.preventDefault()}>
        <p id="cabeceraFormulario">Complete con los datos solicitados</p>
        <CuadroOpciones
          datos={datos.filter(({ categoria }) => categoria == "propiedad")}
          label={"Seleccione el Tipo de Propiedad"}
          categoria={"propiedad"}
        />
        <CuadroOpciones
          datos={datos.filter(({ categoria }) => categoria == "ubicacion")}
          label={"Seleccione su Ubicación"}
          categoria={"ubicacion"}
        />
        <label htmlFor="mtsCuadrados">Ingrese los Metros Cuadrados</label>
        <input
          type="number"
          id="mtsCuadrados"
          min={20}
          defaultValue={20}
          onInput={(e) =>
            setElementos({
              ...elementos,
              mtsCuadrados: parseInt(e.target.value),
            })
          }
        />
        <button type="button" onClick={realizarCotizacion}>
          Cotizar
        </button>
      </form>
      {precio != 0 && (
        <>
          <form id="valorTotal" onSubmit={(e) => e.preventDefault()}>
            <p>Precio Estimado: ${precio.toFixed(2)}</p>
            <button type="button" onClick={guardarPrecio}>
              Guardar Cotización
            </button>
          </form>
        </>
      )}
    </>
  );
};

export default Formulario;
