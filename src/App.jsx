import { BrowserRouter, Routes, Route } from "react-router-dom";
import Formulario from "./components/Formulario";
import Historial from "./components/Historial";
import HistorialContext from "./context/HistorialContext";
import FormularioContext from "./context/FormularioContext";
import { useState } from "react";
import useLocalStorage from "./hooks/useLocalStorage";

const App = () => {
  const [elementos, setElementos] = useState({
    mtsCuadrados: 20,
    propiedad: 0,
    ubicacion: 0,
  });
  const [historial, setHistorial] = useLocalStorage(
    "historial",
    []
  );
  return (
    <>
      <HistorialContext.Provider value={{ historial, setHistorial }}>
        <FormularioContext.Provider value={{ elementos, setElementos }}>
          <BrowserRouter>
            <Routes>
              <Route path="/" index element={<Formulario />}></Route>
              <Route path="historial" element={<Historial />}></Route>
            </Routes>
          </BrowserRouter>
        </FormularioContext.Provider>
      </HistorialContext.Provider>
    </>
  );
};

export default App;
