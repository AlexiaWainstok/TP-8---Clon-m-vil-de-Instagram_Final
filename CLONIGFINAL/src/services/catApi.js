import axios from "axios";
// Importa Axios para hacer pedidos a una API.

const api = axios.create({
  baseURL: "https://api.thecatapi.com/v1",
});
// Crea una conexión con la API de gatos.

export const getCats = async () => {
  // Crea una función para obtener imágenes de gatos.

  const response = await api.get("/images/search?limit=12&has_breeds=0");
  // Hace un pedido a la API para obtener 12 imágenes de gatos.

  return response.data;
  // Devuelve los datos obtenidos.
};