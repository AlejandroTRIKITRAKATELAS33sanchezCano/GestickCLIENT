import "@assets/CSS/CSS_Gestick.css";
import { useEffect, useState } from "react";
import ClockLoader from "react-spinners/ClockLoader";
import Session from "react-session-api";
import Header from "@components/micro_components/Header";
import HeaderOpcionesAdmin from "@components/micro_components/HeaderOpcionesAdmin";

import Products from "@/api/productValues.json";

// import { deleteProduct, getProducts } from "@/api/gestick.api";
// import CardsProducto from "@components/micro_components/CardsProducto";

export default function Inventario() {
  const [loading, setLoading] = useState(true);
  const [table, setTable] = useState([]);

  const updateData = () => {
    setTable(Products);
  };

  useEffect(() => {
    if (document.readyState === "complete") {
      setLoading(false);
    }
    updateData();
  }, []);

  window.addEventListener("load", () => setLoading(false));
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
              table.map((row, i) => (
                <div className="product" key={i}>
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
                    <a
                      className="saber-mas-P"
                      href={`/EditarProducto/${row.idProductos}`}>
                      Editar
                    </a>
                    <a
                      className="saber-mas-P"
                      onClick={() => {
                        deleteProduct({ idProductos: row.idProductos });
                        setTimeout(updateData, 150);
                      }}>
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
}
