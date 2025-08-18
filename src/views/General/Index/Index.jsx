import "@assets/CSS/CSS_Gestick.css";
import { useState, useEffect } from "react";
import ClockLoader from "react-spinners/ClockLoader";

// Importa todas las imágenes usando alias
import Negocio from "@assets/IMG/Decoration/negocio.webp";
import Cliente1 from "@assets/IMG/Decoration/Cliente_1.webp";
import Cliente2 from "@assets/IMG/Decoration/Cliente_2.webp";
import Cliente3 from "@assets/IMG/Decoration/Cliente_3.webp";
import Cliente4 from "@assets/IMG/Decoration/Cliente_4.webp";

function Index() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section>
      {loading ? (
        <div className="contenedorCarga">
          <ClockLoader color="#01a7c2" size={100} loading={loading} />
        </div>
      ) : (
        <section>
          <header className="HeaderPrincipal">
            <h2 className="logo">GESTICK</h2>
            <input type="checkbox" id="check" />
            <label htmlFor="check" className="mostrar-menu">
              &#8801
            </label>
            <nav className="menu">
              <a href="/">Inicio</a>
              <a href="/SobreNosotros">Contactanos</a>
              <a href="/loginEmpleado">Iniciar Sesión</a>
              <label htmlFor="check" className="esconder-menu">
                &#215
              </label>
            </nav>
          </header>

          <div className="container">
            <div className="showcase">
              <h1>Gestick</h1>
              <h2 className="slogan">"Gestionar para avanzar"</h2>
              <h2>Crea Tu Propio Inventario Ahora</h2>
              <p>
                Con Gestick Todo es posible, Ordena tus Productos y Vendelos En
                ¡LINEA! Olvidate de comisiones altas, Obten Tu propio Inventario
                a un super Precio
              </p>

              <a href="/signAdministrador">
                <button className="button2" type="submit">
                  <span>Registrate</span>
                </button>
              </a>
            </div>

            <section className="knowledge">
              <div className="knowledge__container container">
                <div className="knowledege__texts">
                  <h2 className="subtitle">¿Qué es Gestick?</h2>
                  <p className="knowledge__paragraph">
                    Gestick es un programa enfocado en la gestion de inventarios
                    y puntos de venta, esto con el objetivo de tener una mejor
                    administración de los productos que se llevan en cualquier
                    negocio, ahora enfocado en papelerias aparte de brindar un
                    punto de venta rapido y eficaz
                  </p>
                  <button href="#" className="button2">
                    <span>Entra</span>
                  </button>
                </div>

                <figure className="knowledge__picture">
                  <img
                    src={Negocio}
                    className="knowledge__img"
                    alt="Negocio ejemplo"
                  />
                </figure>
              </div>
            </section>

            {/* Sección de programas */}
            <section id="nuestros-programas">
              <div className="container">
                <h2>¿Que es lo que puedes hacer con Gestick?</h2>
                <div className="programas">{/* Cartas de programas... */}</div>
              </div>
            </section>

            {/* Galería con imágenes importadas */}
            <section className="galeria">
              <div className="sesgoarriba"></div>
              <div className="imagenes none">
                <img src={Cliente1} alt="Cliente 1" />
              </div>
              <div className="imagenes">
                <img src={Cliente2} alt="Cliente 2" />
                <div className="encima">
                  <h2>AlexCG Design</h2>
                </div>
              </div>
              <div className="imagenes">
                <img src={Cliente3} alt="Cliente 3" />
              </div>
              <div className="imagenes">
                <img src={Cliente4} alt="Cliente 4" />
              </div>
              <div className="imagenes none">
                <img src={Cliente1} alt="Cliente 1" />
              </div>
              <div className="sesgoabajo"></div>
            </section>

            {/* Sección de testimonios */}
            <section className="course" id="course">
              <div className="box-container">
                <div className="box">
                  <img src={Cliente1} alt="RC DUDE MX" />
                  <h3>RC DUDE MX</h3>
                  <p>
                    "Es una empresa totalmente responsble con una atención
                    excelente y una manera de organizar mis productos de manera
                    eficaz a un super precio"
                  </p>
                </div>

                <div className="box">
                  <img src={Cliente2} alt="Baratus" />
                  <h3>Baratus</h3>
                  <p>
                    "Ahora es más sencillo organizar mis productos listos para
                    la compra de estos, facil de capacitación para los empleados
                    a un buen precio . No puedo esperar a ver la opción de
                    E-Commerce"
                  </p>
                </div>

                <div className="box">
                  <img src={Cliente3} alt="El Cuartel Secreto" />
                  <h3>El Cuartel Secreto</h3>
                  <p>
                    "Es el mejor inventario que he tenido, mis prodcutos son más
                    organizados y es más facil que usar hojas de calculo, puedo
                    gestionar bien a mis empleados"
                  </p>
                </div>

                <div className="box">
                  <img src={Cliente4} alt="Guitar Store" />
                  <h3>Guitar Store</h3>
                  <p>
                    "Me siento increiblemente feliz de la htmlForma tan sencilla
                    y amigable por la cual Gestick me ha beneficiado para mi
                    micro empresa"
                  </p>
                </div>
              </div>
            </section>
            <footer className="footer">
              <div className="container">
                <div className="row">
                  <div className="footer-col">
                    <h4>Planes</h4>
                    <ul>
                      <li>
                        <button className="btn">
                          <a href="#Plan1">Plan 1</a>
                        </button>
                      </li>
                      <li>
                        <button className="btn">
                          <a href="#Plan2">Plan 2</a>
                        </button>
                      </li>
                    </ul>
                    <div id="Plan1" className="modalmask">
                      <div className="modalbox movedown">
                        <a href="#close" title="Close" className="close">
                          X
                        </a>
                        <h2>Plan1</h2>
                        <p>cuarenta pesitos :)</p>
                      </div>
                    </div>
                    <div id="Plan2" className="modalmask">
                      <div className="modalbox movedown">
                        <a href="#close" title="Close" className="close">
                          X
                        </a>
                        <h2>Plan2</h2>
                        <p>Ochenta pesitos :D</p>
                      </div>
                    </div>
                  </div>
                  <div className="footer-col">
                    <h4>Sobre nosotros</h4>
                    <ul>
                      <li>
                        <a href="SobreNosotros.html">Nosotros</a>
                      </li>
                    </ul>
                  </div>
                  <div className="footer-col">
                    <h4>Siguenos en</h4>
                    <div className="social-links">
                      <a href="https://www.facebook.com/profile.php?id=100091645518649">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a href="https://l.messenger.com/l.php?u=https%3A%2F%2Finstagram.com%2F__gestick%3Figshid%3DOTJhZDVkZWE%253D&h=AT3FnETkYhgQVNxuLMGGp9jp1w-p7m3YaZ38vQClW3ZbWvOorvQ6tnW_7l8AnxnREbffC_YJ7JUyFWBqJle1Ns4qPLinRrpoNiYYbmYiONOMqBiR6Wwg1XA7qKKOC444kRfwvA">
                        <i className="fab fa-instagram"></i>
                      </a>
                      <a href="https://wa.me/5610336646?text=Hola%20Este%20Soy%20Un%20Cliente%20De%20Gestick%20">
                        <i className="fab fa-whatsapp"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </footer>

            <script src="https://unpkg.com/scrollreveal"></script>
          </div>
        </section>
      )}
    </section>
  );
}

export default Index;
