import { UserProduct } from "../../../public/JS/Data.js";
import Header from "@components/micro_components/Header";
import Dashboard from "@components/micro_components/Dashboard";
import { useState, useEffect } from "react";
import ClockLoader from "react-spinners/ClockLoader";
import Session from "react-session-api";
// import Footer from "@components/micro_components/Footer.jsx";
import FooterDueno from "@components/micro_components/FooterDueno.jsx";
import { dashboardDUENNO } from "@/api/gestick.api.js";

import TableValues from "@/api/tableValues.json";

export default function EstadoGeneralAdmin() {
  const [loading, setLoading] = useState(true);
  const [table, setTable] = useState(null);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const [userProduct, setUserProduct] = useState({
    labels: UserProduct.map((data) => data.Productos_idProductos),
    datasets: [
      {
        label: "Ventas",
        data: UserProduct.map((data) => data.CantidadVendida),
      },
    ],
  });

  return (
    <section>
      {loading ? (
        <div className="contenedorCarga">
          <ClockLoader color="#01a7c2" size={100} loading={loading} />
        </div>
      ) : (
        <section>
          <Header />
          <section className="Tableros-General">
            <Dashboard results={TableValues} />
          </section>
        </section>
      )}
      <div className="FooterDueno">
        <FooterDueno />
      </div>
    </section>
  );
}
