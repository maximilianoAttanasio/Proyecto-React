import { Link } from "react-router-dom";
import { TiClipboard } from "react-icons/ti";
import { TiHomeOutline } from "react-icons/ti";

const Encabezado = () => {
  return (
    <>
      <nav id="encabezado">
        <h1>Seguros del Hogar</h1>
        <Link to={"/"}>
          <TiHomeOutline className="icono" />
        </Link>
        <Link to={"/historial"}>
          <TiClipboard className="icono "/>
        </Link>
      </nav>
    </>
  );
};

export default Encabezado;
