import Header from "@components/micro_components/Header.jsx";
import TableroCard from "@components/micro_components/TableroCard.jsx";
// import Avatar from "@components/SoporteTECNICO/Admin/Avatar.jsx";
import Session from "react-session-api";
import ClockLoader from "react-spinners/ClockLoader";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
// import SupportWindow from "@components/SoporteTECNICO/Admin/Dueno/index.jsx";

export default function Tablero() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
      toast.success("Sesión Iniciada Correctamente");
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <section>
      <div>
        <Toaster position="bottom-right" reverseOrder={false} />
      </div>
      {loading ? (
        <div className="contenedorCarga">
          <ClockLoader color="#01a7c2" size={100} loading={loading} />
        </div>
      ) : (
        <section>
          <Header />
          <section className="TablerosD">
            {/*<Avatar />*/}
            <TableroCard />
          </section>
        </section>
      )}
    </section>
  );
}
