import axios from "axios";

const apiKey = "1d37760f127cea2e3b36c1266eb9d46b";
const BASE_URL = "/api";
export const getProvinsi = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/province`, {
      headers: {
        key: apiKey,
      },
    });
    const data = response.data.rajaongkir.results;
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getKota = async (id, provId) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/city?city=${id}&province=${provId}`,
      {
        headers: {
          key: apiKey,
        },
      }
    );
    const data = response.data.rajaongkir.results;
    return data;
  } catch (error) {
    console.error(error);
  }
};
