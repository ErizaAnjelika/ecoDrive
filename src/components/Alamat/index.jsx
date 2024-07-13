import { useEffect, useState } from "react";
import { getProvinsi, getKota } from "../../services/api";
export const Alamat = () => {
  const [provinsi, setProvinsi] = useState([]);
  const [kota, setKota] = useState([]);
  const [selectedProvinsi, setSelectedProvinsi] = useState("");
  const [selectedKota, setSelectedKota] = useState("");

  useEffect(() => {
    const getProv = async () => {
      const data = await getProvinsi();
      setProvinsi(data);
    };
    getProv();
  }, []);

  const handleProvinsiChange = async (event) => {
    const provId = event.target.value;
    setSelectedProvinsi(provId);
    setSelectedKota(""); // Reset pilihan kota
    if (provId) {
      const cities = await getKota("", provId);
      setKota(cities);
    }
  };

  const handleKotaChange = (event) => {
    setSelectedKota(event.target.value);
  };
  return (
    <div className="space-y-5">
      <h1 className="font-semibold text-xl">Alamat</h1>
      <div className="flex items-center justify-between gap-10">
        <label htmlFor="" className="w-full capitalize font-semibold text-base">
          provinsi
        </label>
        <select
          value={selectedProvinsi}
          onChange={handleProvinsiChange}
          className="w-full p-2 border capitalize"
        >
          <option value="">pilih provinsi</option>
          {provinsi.map((prov) => (
            <option value={prov.province_id}>{prov.province}</option>
          ))}
        </select>
      </div>
      <div className="flex items-center justify-between gap-10">
        <label htmlFor="" className="w-full capitalize font-semibold text-base">
          Kota
        </label>
        <select
          value={selectedKota}
          onChange={handleKotaChange}
          className="w-full p-2 border capitalize"
          disabled={!selectedProvinsi} // Disable jika provinsi belum dipilih
        >
          <option value="">pilih kota</option>
          {kota.map((city) => (
            <option key={city.city_id} value={city.city_id}>
              {city.type} {city.city_name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
