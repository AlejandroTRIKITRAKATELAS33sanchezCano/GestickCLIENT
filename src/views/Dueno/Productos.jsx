import HeaderPro from "@components/micro_components/HeaderPro.jsx";
import ClockLoader from "react-spinners/ClockLoader";
import { useEffect, useState } from "react";
import Session from "react-session-api";
import CamaraP from "@components/micro_components/Scanner/CamaraP.jsx";
import { Formik } from "formik";
import Uploader from "@components/micro_components/Uploader.jsx";
import { useParams } from "react-router-dom";

import Products from "@/api/productValues.json";
import Marks from "@/api/markList.json";

import * as yup from "yup";

export default function Productos() {
  const { idProduct } = useParams();
  const [loading, setLoading] = useState(true);
  const [tradeMarkList, setTradeMarkList] = useState([]);
  const [initialValues, setInitialValues] = useState({
    name: "",
    desc: "",
    status: true,
    type: "",
    price: 0,
    tradeMark: 1,
    exis: 0,
    img: undefined,
    idAdmin: "3",
  });

  window.addEventListener("load", () => setLoading(false));

  useEffect(() => {
    if (document.readyState === "complete") {
      setLoading(false);
    }
    setTradeMarkList(Marks);
    setInitialValues(Products);
  }, []);

  const checkoutSchema = yup.object().shape({
    idAdmin: yup
      .string()
      .required("Campo Obligatorio")
      .min(6, `Ingresa Un ID Completo`)
      .max(6, `Ingresa Un ID De 6 Digitos`),
    password: yup
      .string()
      .required("Campo Obligatorio")
      .min(8, `Ingresa Más De 7 Digitos`)
      .max(150, `Ingresa Una Contraseña Valida`),
  });
  return (
    <>
      {loading ? (
        <div className="contenedorCarga">
          <ClockLoader color="#01a7c2" size={100} loading={loading} />
        </div>
      ) : (
        <section>
          <HeaderPro />

          <Formik
            enableReinitialize
            initialValues={initialValues}
            onSubmit={() => {}}>
            {({ values, setFieldValue, handleSubmit, handleChange }) => (
              <form onSubmit={handleSubmit}>
                <section className="InformacionPro">
                  <section className="NavProductoInfo">
                    <label
                      htmlFor="TituloEstadoDelProducto"
                      className="TituloContenedorPropiedadesDelProducto">
                      Propiedades del producto{" "}
                    </label>
                    <div className="nombreProductoContent">
                      <label htmlFor="NombreProducto" className="TITULONOMBRE">
                        Nombre Del Producto:{" "}
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="NombreProducto"
                        className="form-control-P"
                        placeholder="Ejemplo: Pan Con Queso Y Aderezo"
                        value={values?.name}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="DescripcionProContenedor">
                      <div className="form-group">
                        <label
                          htmlFor="DescripcionPro"
                          className="TITULONOMBRE">
                          Descripción Del Producto:{" "}
                        </label>
                        <textarea
                          style={{ resize: "none" }}
                          className="form-control-P"
                          name="desc"
                          id="DescripcionPro"
                          rows="3"
                          placeholder="Ejemplo: Este Producto Se Tiene Que Entregar En Condiciones Especificas"
                          value={values.desc}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </section>
                  <section className="EstadoDelProducto">
                    <label
                      htmlFor="TituloEstadoDelProducto"
                      className="TituloContenedorPropiedadesDelProducto">
                      Caracteristicas del producto
                    </label>
                    <div className="nombreProductoContentSelect">
                      <label
                        htmlFor="TituloEstadoDelProducto"
                        className="TITULONOMBRE">
                        Estado Del Producto:{" "}
                      </label>
                      <div className="selectBonito">
                        <select
                          name="status"
                          id="EstadoDelProducto"
                          value={values.status}
                          onChange={handleChange}
                          defaultValue={true}>
                          <option value={true}>Activo</option>
                          <option value={false}>Inactivo</option>
                        </select>
                      </div>
                    </div>
                    <div className="nombreProductoContent">
                      <label
                        htmlFor="TituloEstadoDelProducto"
                        className="TITULONOMBRE">
                        Precio:{" "}
                      </label>
                      <input
                        type="number"
                        className="form-control-P"
                        name="price"
                        id="ExistenciasPro"
                        aria-describedby="PrecioVentaHelp"
                        min="1"
                        placeholder="Precio"
                        value={values.price}
                        onChange={handleChange}
                      />
                    </div>
                  </section>
                  <section className="ElementosMultimedia">
                    <div className="nombreProductoContent">
                      <label
                        htmlFor="TituloEstadoDelProducto"
                        className="TituloContenedorPropiedadesDelProducto">
                        Elementos multimedia
                      </label>
                      <div className="contenedroAgregar">
                        <Uploader
                          {...{ values, setFieldValue, initialValues }}
                        />
                      </div>
                    </div>
                  </section>
                  <section className="OrganizacionDelProducto">
                    <div className="ContenedorOrganizacionDelProducto">
                      <label
                        htmlFor="TituloEstadoDelProducto"
                        className="TituloContenedorPropiedadesDelProductoO">
                        Organizacion del producto{" "}
                      </label>
                    </div>
                    <div className="CategoriaDelProducto ">
                      <label
                        htmlFor="TituloEstadoDelProducto"
                        className="TITULONOMBREO">
                        Categoria:{" "}
                      </label>
                      <input
                        type="text"
                        className="form-control-P"
                        name="type"
                        id="ExistenciasPro"
                        aria-describedby="PrecioVentaHelp"
                        placeholder="Ejemplo: Papeleria"
                        value={values.type}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="PrecioVentaContenedor">
                      <label
                        htmlFor="TituloEstadoDelProducto"
                        className="TITULONOMBREO">
                        Marca:{" "}
                      </label>

                      <select
                        type="text"
                        className="form-control-P"
                        name="tradeMark"
                        id="ExistenciasPro"
                        aria-describedby="PrecioVentaHelp"
                        placeholder="Ejemplo: Pelikan"
                        defaultValue="initial"
                        value={values.tradeMark}
                        onChange={handleChange}>
                        <option value="initial">Seleccione Marca</option>
                        {tradeMarkList.map((row) => (
                          <option value={row.idMarca} key={row.idMarca}>
                            {row.MarNombre}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="PrecioVentaContenedor">
                      <label
                        htmlFor="TituloEstadoDelProducto"
                        className="TITULONOMBREO">
                        Existencias:{" "}
                      </label>
                      <input
                        type="number"
                        className="form-control-P"
                        name="exis"
                        id="ExistenciasPro"
                        aria-describedby="PrecioVentaHelp"
                        min="0"
                        placeholder="Ejemplo: 2"
                        value={values.exis}
                        onChange={handleChange}
                      />
                    </div>
                  </section>
                  <section className="CamaraPaginaProducto">
                    <div className="ProductCamara">
                      <label
                        htmlFor="TituloEstadoDelProducto"
                        className="TituloContenedorPropiedadesDelProductoO">
                        Codigo de Barras
                      </label>
                      <CamaraP />
                    </div>
                  </section>
                  <section className="BotonesProducto">
                    <button className="BotonCrearProducto" type="submit">
                      <span>{idProduct ? "Editar" : "Crear"}</span>
                    </button>
                    <button className="BotonCancelarProducto">
                      {" "}
                      <span>Cancelar</span>{" "}
                    </button>
                  </section>
                </section>
              </form>
            )}
          </Formik>
        </section>
      )}
    </>
  );
}
