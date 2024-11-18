import React, { useState } from "react";
import "../css/AdminRegister.css";
import axios from "axios";
import { base_api_uri } from "../assets/constants";
import { useNavigate } from "react-router-dom";

function AdminSignin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  //   loading state
  const [loading, setLoading] = useState(false);

  //   error Message
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const handleSignin = async (e) => {
    e.preventDefault();
    if (!username || !password) {
      setError("All fields must be filled");
      setLoading(false);
    } else {
      setError("");
      const res = await axios.post(`${base_api_uri}/admin/admin_signin`, {
        username: username,
        password: password,
      });

      if (res.data.error) {
        setError(res.data.error);
      } else {
        setError("");
        sessionStorage.setItem("token", res.data);
        navigate("/admin/update_matches");
      }
    }
  };
  return (
    <div className="register-container">
      <form>
        <input
          type="text"
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={(e) => handleSignin(e)}>
          {!loading ? "Confirm" : "just a sec..."}
        </button>

        {/* error message */}
        {error && <p className="text-red-500">{error}</p>}
      </form>
    </div>
  );
}

export default AdminSignin;
