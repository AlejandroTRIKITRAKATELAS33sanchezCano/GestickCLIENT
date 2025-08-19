import { PDFViewer } from "@react-pdf/renderer";
import DocuPDF from "./DashboardPDF";
import "@assets/CSS/CSS_Gestick.css";
import Header from "@components/micro_components/Header";
import Footer from "@components/micro_components/Footer";

export default function VistaPDF() {
  return (
    <section>
      <Header />
      <div className="TablerosPDF">
        <PDFViewer>
          <DocuPDF />
        </PDFViewer>
      </div>
      <div className="FooterEmpleado">
        <Footer />
      </div>
    </section>
  );
}
