import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function HeaderOpcionesAdmin() {
  const location = useLocation();
  const [paginas, setPaginas] = useState("/Product");
  const [items, setItems] = useState("Producto");

  useEffect(() => {
    // Usa pathname en lugar de la URL completa
    if (location.pathname === "/InventarioProductos") {
      setPaginas("/Product");
      setItems("Producto");
    } else if (location.pathname === "/Empleados") {
      setPaginas("/AgregarEmpleado");
      setItems("Empleado");
    } else if (location.pathname === "/TitosChampionsSonicAdrianJoshuaGael") {
      setPaginas("/Administradores");
      setItems("Administrador");
    }
  }, [location.pathname]); // Solo se ejecuta cuando cambia la ruta

  return (
    <div className="Header-Opciones">
      <nav className="menu">
        <div className="buscar">
          <input
            type="text"
            placeholder="      Buscar"
            required
            id="inputbuscar"
          />
          <div className="btnBuscar">
            <i className="fas fa-search icon"></i>
          </div>
        </div>

        <Link to={paginas} id="BotonActivo" className="Separado">
          Agregar {items}
        </Link>
      </nav>
    </div>
  );
}
