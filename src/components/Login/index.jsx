import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onSubmit = () => {
    const bodyPayload = {
      email: email,
      password: password,
    };
    axios
      .post("https://reqres.in/api/login", bodyPayload)
      .then((res) => {
        const token = res.data.token;
        localStorage.setItem("accessToken", token);

        navigate("/");

        alert("berhasil login");

        setEmail("");
        setPassword("");
      })
      .catch((err) => {
        alert("gagal login", err);
      });
  };
  return (
    <div className="border-2 w-1/2 bg-white m-auto p-4 flex flex-col gap-4">
      <h1 className="font-bold text-xl">Halaman Login</h1>
      <div className="flex flex-col">
        <label htmlFor="">Email</label>
        <input
          id="email"
          type="text"
          onChange={onChangeEmail}
          value={email}
          className="border-2 rounded-xl text-black"
          placeholder="Masukkan Email"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="">Password</label>
        <input
          id="password"
          type="password"
          onChange={onChangePassword}
          className="border-2 rounded-xl text-black"
          placeholder="Masukkan Password"
        />
      </div>
      <button type="submit" onClick={onSubmit} className="bg-blue-400">
        Login
      </button>
    </div>
  );
};
