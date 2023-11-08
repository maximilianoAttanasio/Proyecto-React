import useFormulario from "../hooks/useFormulario";

const CuadroOpciones = ({ datos, label, categoria }) => {
  const { elementos, setElementos } = useFormulario();
  return (
    <>
      <label htmlFor={"categoria"}>{label}</label>
      <select
        name={"categoria"}
        id={"categoria"}
        defaultValue={0}
        onChange={(e) =>
          setElementos({
            ...elementos,
            [categoria]: 
              parseFloat(e.target.value
            ),
          })
        }
      >
        <option disabled value="0">
          ...
        </option>
        {datos.map((elemento, indice) => (
          <option key={indice} value={elemento.factor}>
            {elemento.tipo}
          </option>
        ))}
      </select>
    </>
  );
};

export default CuadroOpciones;
