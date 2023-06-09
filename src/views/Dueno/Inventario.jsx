import Header from "../components/micro_components/Header";
import "../../../public/CSS/CSS_Gestick.css";
import CardsProducto from "../components/micro_components/CardsProducto";
import HeaderOpcionesAdmin from "../components/micro_components/HeaderOpcionesAdmin";
import ClockLoader from "react-spinners/ClockLoader";
import { useEffect, useState } from "react";
import Session from "react-session-api";
import { deleteProduct, getProducts } from "../../api/gestick.api";

export default function Inventario() {
  const [loading, setLoading] = useState(true);
  const [table, setTable] = useState([]);

  const updateData = () => {
    getProducts({ idAdmin: Session.get("id") }).then((results) => {
      setTable(results.data);
      console.log(results.data);
    });
  };

  useEffect(() => {
    if (document.readyState === "complete") {
      setLoading(false);
    }
    updateData();
  }, []);

  window.addEventListener("load", () => setLoading(false));
  console.log(loading);

  if (Session.get("type") == 1) {
    return (
      <section>
        {loading ? (
          <div className="contenedorCarga">
            <ClockLoader color="#01a7c2" size={100} loading={loading} />
          </div>
        ) : (
          <section>
            <Header />
            <HeaderOpcionesAdmin />
            <section className="cardscontainer">
              {table.length == 0 ? (
                <h1>No hay productos registrados.</h1>
              ) : (
                table.map((row) => (
                  <div className="product">
                    <div className="image">
                      <img src={row.PrURLimg} alt="" />
                    </div>
                    <div className="namePrice">
                      <h4>{row.PrNombre}</h4>
                      <span>$ {row.PrPrecio}</span>
                    </div>
                    <p>Descripción Del Producto:</p>
                    <div className="stars">
                      <p>
                        Existencias: <span>{row.PrExistencias}</span>
                      </p>
                    </div>
                    <div className="stars">
                      <a className="saber-mas-P" href={`/EditarProducto/${row.idProductos}`}>
                        Editar
                      </a>
                      <a
                        className="saber-mas-P"
                        onClick={() => {
                          deleteProduct({idProductos: row.idProductos});
                          setTimeout(updateData, 150);
                        }}
                      >
                        Borrar
                      </a>
                    </div>
                  </div>
                ))
              )}
            </section>
          </section>
        )}
      </section>
    );
  } else {
    window.location.href = "http://localhost:5173/loginAdministrador";
  }
}
