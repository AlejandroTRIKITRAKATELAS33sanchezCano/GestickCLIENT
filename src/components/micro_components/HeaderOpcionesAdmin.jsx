import { Link } from "react-router-dom";

export default function HeaderOpcionesAdmin() {



    var paginas = ""
    var items = ""

    var urlActual = window.location.href

    console.log(urlActual)

    if (urlActual === "http://localhost:5173/InventarioProductos") {
        paginas = "http://localhost:5173/Product"
        items = "Producto"
    } else if (urlActual === "http://localhost:5173/Empleados") {
        paginas = "http://localhost:5173/AgregarEmpleado"
        items = "Empleado"
    } else if(urlActual === "http://localhost:5173/TitosChampionsSonicAdrianJoshuaGael"){
        paginas = "http://localhost:5173/Administradores"
        items = "Administrador"
    }

    console.log(urlActual)

    return (
        <div className="Header-Opciones">
            <nav className="menu">

                <div className="buscar">
                    <input type="text" placeholder="      Buscar" required id="inputbuscar" />
                    <div className="btnBuscar">
                        <i className="fas fa-search icon"></i>
                    </div>
                </div>

                <Link to={paginas} id="BotonActivo" className="Separado">Agregar {items}</Link>
            </nav>
        </div>
    )
}
