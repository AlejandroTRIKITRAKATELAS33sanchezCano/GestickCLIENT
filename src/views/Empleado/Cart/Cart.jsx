import "@assets/CSS/CSS_Gestick.css";
import { useEffect, useState } from "react";
import Header from "@components/micro_components/Header.jsx";
import Camara from "@components/micro_components/Camara.jsx";
import SearchComponent from "@components/micro_components/SearchComponent";
import Session from "react-session-api";
import Products from "@/api/productValues.json";

// Lista de productos en el carrito.
let codeCart = [];

function Cart() {
  const [carrito, setCarrito] = useState([]); // Productos seleccionados para vender
  const [table, setTable] = useState([]); // Productos de la base de datos

  // Función para renderizar el carrito
  function renderCart(obj, add) {
    const newCarrito = [...carrito];

    if (add) {
      codeCart.push(obj);
    } else {
      codeCart = codeCart.filter(
        (item) => item.idProductos !== obj.idProductos
      );
    }

    const cartMap = new Map();
    codeCart.forEach((item) => {
      if (cartMap.has(item.idProductos)) {
        cartMap.get(item.idProductos).count++;
      } else {
        cartMap.set(item.idProductos, { ...item, count: 1 });
      }
    });

    setCarrito(Array.from(cartMap.values()));
  }

  // Función para calcular el precio total
  function totalPrice() {
    return codeCart
      .reduce((total, item) => total + parseFloat(item.PrPrecio), 0)
      .toFixed(2);
  }

  // Función para obtener las existencias en el carrito
  function getExistences(id) {
    return codeCart.filter((item) => item.idProductos === id).length;
  }

  // Función para "simular" la venta
  function simulateSale() {
    console.log("Venta simulada:", carrito);
    codeCart = [];
    setCarrito([]);
    alert("Venta realizada exitosamente (simulación)");
  }

  // Cargar productos desde el JSON al montar el componente
  useEffect(() => {
    // Ordenar productos (los con 0 existencias al final)
    const sortedProducts = [...Products].sort((a, b) =>
      a.PrExistencias === 0 ? 1 : b.PrExistencias === 0 ? -1 : 0
    );
    setTable(sortedProducts);
  }, []);

  return (
    <section>
      <Header />
      <div className="containerCarrito">
        <div className="row">
          <aside className="col-sm-4">
            <h2>Productos seleccionados</h2>

            <ul id="cart" className="list-group">
              {carrito.length === 0 ? (
                <h5>Selecciona los productos a vender.</h5>
              ) : (
                carrito.map((item) => (
                  <li
                    className="list-group-item text-right"
                    key={item.idProductos}>
                    {item.PrNombre} X {item.count} - ${item.PrPrecio}
                    <button
                      id="btnCarrito"
                      className="btn-remover"
                      onClick={() => renderCart(item, false)}>
                      X
                    </button>
                  </li>
                ))
              )}
            </ul>

            <p className="text-right">
              Total: $<span id="total">{totalPrice()}</span>
            </p>

            <button id="btnCarrito" className="btn-sell" onClick={simulateSale}>
              Vender
            </button>
            <button
              id="btnCarrito"
              className="btn-delete"
              onClick={() => {
                codeCart = [];
                setCarrito([]);
              }}>
              Cancelar todo
            </button>
          </aside>

          <main id="items" className="col-sm-8 row">
            {table.length === 0 ? (
              <h1>Cargando productos...</h1>
            ) : (
              <SearchComponent
                renderCart={renderCart}
                baseDeDatos={table}
                getExistences={getExistences}
              />
            )}
          </main>
          <aside>
            <div className="camara">
              <Camara />
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default Cart;
