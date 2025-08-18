import { useEffect, useState } from "react";
import ClockLoader from "react-spinners/ClockLoader";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "@views/theme/theme.js";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import DashboardPDF from "@components/PDF/DashboardPDF.jsx";
import TableValues from "@/api/tableValues.json";
import LineChart from "./graficas/LineChart.jsx";
import StatBox from "./graficas/StatBox";
// import TrafficIcon from "@mui/icons-material/Traffic";
// import GeographyChart from "./graficas/GeographyChart";
// import BarChart from "./graficas/BarChart";
// import ProgressCircle from "./graficas/ProgressCircle";
// import EmailIcon from "@mui/icons-material/Email";

const Dashboard = (props) => {
  const [dashData, setDashData] = useState({
    dataLINE: [],
    historialCARRITO: [],
  });
  const [mesString, setMesString] = useState("");
  const getMonthName = (month) => {
    const months = [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre",
    ];
    return months[month - 1] || "";
  };

  useEffect(() => {
    const initialData = props?.results || TableValues;

    const nivoLineData = initialData.dataLINE
      ? [
          {
            id: "Ventas",
            color: colors.greenAccent[500],
            data: initialData.dataLINE.map((item) => ({
              x: item.fecha,
              y: item.ventas,
            })),
          },
        ]
      : [{ id: "Ventas", data: [], color: colors.greenAccent[500] }];

    setDashData({
      ...initialData,
      dataLINE: nivoLineData,
      historialCARRITO: initialData.historialCARRITO || [],
    });

    const ms = getMonthName(initialData.mes);
    setMesString(ms);
  }, [props?.results]);

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  console.log(dashData);
  return (
    <Box m="20px">
      {dashData?.dataLINE?.lenght <= 0 ||
      dashData?.historialCARRITO?.lenght <= 0 ? (
        <section className="Tableros">
          <h1>Antes de ver tu dashboard debes de vender algo</h1>
        </section>
      ) : (
        <Box
          display="grid"
          gridTemplateColumns="repeat(12, 1fr)"
          gridAutoRows="140px"
          gap="20px">
          {/* ROW 1 */}

          <Box
            gridColumn="span 3"
            backgroundColor={colors.primary[400]}
            display="flex"
            alignItems="center"
            justifyContent="center">
            <StatBox
              title={dashData.productosVendidosACTUALES}
              subtitle="Ventas Obtenidas"
              progress={dashData.porcentajeVENTAACTUAL / 100}
              increase={dashData.porcentajeVENTAACTUAL + "%"}
              icon={
                <PointOfSaleIcon
                  sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                />
              }
            />
          </Box>
          <Box
            gridColumn="span 3"
            backgroundColor={colors.primary[400]}
            display="flex"
            alignItems="center"
            justifyContent="center">
            <StatBox
              title={dashData.totalactual}
              subtitle="Clientes Nuevos: "
              progress={dashData.porcentajeACTUAL / 100}
              increase={"  " + dashData.porcentajeACTUAL + "%"}
              icon={
                <PersonAddIcon
                  sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                />
              }
            />
          </Box>
          {/* ROW 2 */}
          <Box
            gridColumn="span 8"
            gridRow="span 2"
            backgroundColor={colors.primary[400]}>
            <Box
              mt="25px"
              p="0 30px"
              display="flex "
              justifyContent="space-between"
              alignItems="center">
              <Box>
                <Typography
                  variant="h5"
                  fontWeight="600"
                  color={colors.grey[100]}>
                  Ganancias De {mesString}
                </Typography>
                <Typography
                  variant="h3"
                  fontWeight="bold"
                  color={colors.greenAccent[500]}>
                  ${dashData.gananciasACTUALES}
                </Typography>
              </Box>
              <Box>
                <IconButton>
                  <PDFDownloadLink
                    document={<DashboardPDF results={props} />}
                    fileName="FacturaDASHBOARD.pdf">
                    <DownloadOutlinedIcon
                      sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                    />
                  </PDFDownloadLink>
                </IconButton>
              </Box>
            </Box>

            <Box height="250px" m="-20px 0 0 0">
              <LineChart isDashboard={true} data={dashData.dataLINE} />
            </Box>
          </Box>
          <Box
            gridColumn="span 4"
            gridRow="span 2"
            backgroundColor={colors.primary[400]}
            overflow="auto">
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              colors={colors.grey[100]}
              p="15px">
              <Typography
                color={colors.grey[100]}
                variant="h5"
                fontWeight="600">
                Ventas Recientes
              </Typography>
            </Box>

            {dashData?.historialCARRITO ? (
              dashData?.historialCARRITO?.map((transaction, i) => (
                <Box
                  key={`${transaction.txId}-${i}`}
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  borderBottom={`4px solid ${colors.primary[500]}`}
                  p="15px">
                  <Box>
                    <Typography
                      color={colors.greenAccent[500]}
                      variant="h5"
                      fontWeight="600">
                      {transaction.txId}
                    </Typography>
                    <Typography color={colors.grey[100]}>
                      {transaction.user}
                    </Typography>
                  </Box>
                  <Box color={colors.grey[100]}>{transaction.date}</Box>
                  <Box
                    backgroundColor={colors.greenAccent[500]}
                    p="5px 10px"
                    borderRadius="4px">
                    ${transaction.cost}
                  </Box>
                </Box>
              ))
            ) : (
              <div className="contenedorCarga2">
                <ClockLoader color="#01a7c2" size={100} />
              </div>
            )}
          </Box>
          {/* ROW 3 */}
        </Box>
      )}
    </Box>
  );
};

export default Dashboard;
