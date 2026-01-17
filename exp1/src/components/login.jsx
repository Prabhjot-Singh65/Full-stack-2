import { useState } from "react";

export default function Login({ setRole }) {
  const [role, setSelectedRole] = useState("user");

  const handleLogin = () => {
    setRole(role);
  };

  return (
    <div>
      <h2>Login</h2>
      <select onChange={(e) => setSelectedRole(e.target.value)}>
        <option value="user">User</option>
        <option value="admin">Admin</option>
      </select>
      <br /><br />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
