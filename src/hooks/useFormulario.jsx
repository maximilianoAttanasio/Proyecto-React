import { useContext } from "react";
import FormularioContext from "../context/FormularioContext";

const useFormulario = () => useContext(FormularioContext);

export default useFormulario;
