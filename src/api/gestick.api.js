import axios from "axios";

export const getAdminRequest = async () => {
  return await axios.get(
    "https://gestick-serverweb.up.railway.app/TitosChampionsSonicAdrianJoshuaGael"
  );
};

export const createAdminRequest = async (data) =>
  await axios.post("https://gestick-serverweb.up.railway.app/signAdministrador", data);

export const deleteAdmins = async (idAdmin) => {
  await axios.delete(
    `https://gestick-serverweb.up.railway.app/TitosChampionsSonicAdrianJoshuaGael/${idAdmin}`
  );
};

export const getAdminsRequest = async (idAdmin) =>
  await axios.get(`https://gestick-serverweb.up.railway.app/EditarAdministrador/${idAdmin}`);

export const updateAdminRequest = async (idAdmin, newFieldAdmin) =>
  await axios.put(
    `https://gestick-serverweb.up.railway.app/EditarAdministrador/${idAdmin}`,
    newFieldAdmin
  );

export const logAdmin = async (data) =>
  await axios.post("https://gestick-serverweb.up.railway.app/loginAdiministrador", data);

export const logEmp = async (data) =>
  await axios.post("https://gestick-serverweb.up.railway.app/logEmpleado", data);

export const signEmp = async (data) =>
  await axios.post("https://gestick-serverweb.up.railway.app/signEmpleado", data);

export const uploadImage = async (data) =>
  await axios.post("https://api.cloudinary.com/v1_1/dkhzhsqzh/image/upload", data);

export const getProducts = async (data) =>
  await axios.post("https://gestick-serverweb.up.railway.app/inventario", data);

export const getEmp = async (data) =>
  await axios.post("https://gestick-serverweb.up.railway.app/getEmpleados", data);

export const addProduct = async (data) =>
  await axios.post("https://gestick-serverweb.up.railway.app/addProduct", data);

export const procesSale = async (data) =>
  await axios.post("https://gestick-serverweb.up.railway.app/procesSale", data);

export const deleteEmpleado = async (data) =>
  await axios.post("https://gestick-serverweb.up.railway.app/deleteEmpleado", data);

export const getAnEmp = async (data) =>
  await axios.post("https://gestick-serverweb.up.railway.app/getAnEmp", data);

export const modifyEmp = async (data) =>
  await axios.post("https://gestick-serverweb.up.railway.app/modifyEmp", data);

export const getAProduct = async (data) =>
  await axios.post("https://gestick-serverweb.up.railway.app/getAProduct", data);

export const modifyProduct = async (data) =>
await axios.post("https://gestick-serverweb.up.railway.app/modifyProduct", data);

export const deleteProduct = async (data) =>
  await axios.post("https://gestick-serverweb.up.railway.app/deleteProduct", data);

export const dashboardDUENNO = async (data) =>
  await axios.post("https://gestick-serverweb.up.railway.app/EstadoGeneralAdmin", data);

export const dashboardADMIN = async (data) =>
  await axios.post("https://gestick-serverweb.up.railway.app/GraficasGestick", data);

export const getTradeMark = async () =>
  await axios.get("https://gestick-serverweb.up.railway.app/getTradeMark");

export const historyPRODUCT = async (data) =>
    await axios.get("https://gestick-serverweb.up.railway.app/historialVENTA", data)
