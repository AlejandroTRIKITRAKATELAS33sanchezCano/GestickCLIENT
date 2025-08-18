import "@assets/CSS/CSS_Gestick.css";

export default function FooterDueno() {
  return (
    <footer className="footerG">
      <div className="containerTop">
        <div className="row">
          <div className="col1">
            <div className="footer-col-G">
              <h5 className="TituloFooter">Encuentranos</h5>
            </div>
            <p className="DescripcionFooter">
              {" "}
              "Gestick Management System S.A." es una empresa dedicada al
              desarrollo del software con un equipo especializado en
              programacion
            </p>
            <p>
              <i className="fa fa-location-arrow"></i> Av. Luis Enrique Erro
              S/N, Unidad Profesional Adolfo López Mateos, Zacatenco, Alcaldía
              Gustavo A. Madero, C.P. 07738, Ciudad de México.{" "}
            </p>
            <p>
              <i className="fa fa-phone"></i> +52 55 38 18 53 99
            </p>
            <p>
              <i className="fa fa fa-envelope"></i> Gestick@gmail.com{" "}
            </p>
          </div>

          <div className="col2">
            <div className="footer-col-G">
              <h5 className="TituloFooter">Paginas</h5>
            </div>
            <ul className="footerG_ul_amrc">
              <li>
                <a href="#">Inicio</a>
              </li>
              <li>
                <a href="#">Sobre nosotros</a>
              </li>
              <li>
                <a href="#">Registrate</a>
              </li>
              <li>
                <a href="#">Iniciar sesion como dueño</a>
              </li>
              <li>
                <a href="#">Iniciar sesion como empleado</a>
              </li>
            </ul>
          </div>
          <div className="col4">
            <div className="footer-col-G">
              <h5 className="TituloFooter">Siguenos en</h5>
            </div>
            <ul className="footerG_ul2_amrc">
              <li>
                <a href="#">
                  <i className="fab fa-twitter fleft padding-right"></i>{" "}
                </a>
                <p>
                  Lorem Ipsum is simply dummy text of the printing...
                  <a href="#">https://www.lipsum.com/</a>
                </p>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-twitter fleft padding-right"></i>{" "}
                </a>
                <p>
                  Lorem Ipsum is simply dummy text of the printing...
                  <a href="#">https://www.lipsum.com/</a>
                </p>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-twitter fleft padding-right"></i>{" "}
                </a>
                <p>
                  Lorem Ipsum is simply dummy text of the printing...
                  <a href="#">https://www.lipsum.com/</a>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="containerG bottom">
        <ul className="footeG_bottom_ul_amrc">
          <li>
            <a href="#">Punto de Venta</a>
          </li>
          <li>
            <a href="#">Productos</a>
          </li>
          <li>
            <a href="#">Empleados</a>
          </li>
          <li>
            <a href="#">Estado General</a>
          </li>
        </ul>
        <p className="text-center">
          Copyright @2022 | Diseñado con el 💙 por <a href="/">Gestick</a>
        </p>
        <ul className="social_footerG_ul">
          <li>
            <a href="https://www.facebook.com/profile.php?id=100091645518649">
              <i className="fab fa-facebook-f"></i>
            </a>
          </li>
          <li>
            <a href="https://instagram.com/__gestick?igshid=OTJhZDVkZWE=">
              <i className="fab fa-instagram"></i>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
