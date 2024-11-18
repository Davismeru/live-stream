import React, { useState } from "react";
import "../css/AdminRegister.css";
import axios from "axios";
import { base_api_uri } from "../assets/constants";

function AdminRegister() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  //   loading state
  const [loading, setLoading] = useState(false);

  //   error Message
  const [error, setError] = useState("");
  const handleRegister = async (e) => {
    e.preventDefault();
    if (!username || !password || !confirmPassword) {
      setError("All fields must be filled");
      setLoading(false);
    } else if (password != confirmPassword) {
      setError("passwords don't match");
      setLoading(false);
    } else {
      setError("");
      const res = await axios.post(`${base_api_uri}/admin/register_admin`, {
        username: username,
        password: password,
      });

      console.log(res.data);
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
        <input
          type="password"
          placeholder="confirm password"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button onClick={(e) => handleRegister(e)}>
          {!loading ? "Confirm" : "just a sec..."}
        </button>

        {/* error message */}
        {error && <p className="text-red-500">{error}</p>}
      </form>
    </div>
  );
}

export default AdminRegister;
