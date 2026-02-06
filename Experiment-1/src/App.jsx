import { useState } from "react";
import Login from "./components/login";
import Products from "./components/Products";
import Cart from "./components/cart";

export default function App() {
  const [role, setRole] = useState(null);
  const [dark, setDark] = useState(false);

  const handleLogout = () => {
    setRole(null);
  };

  if (!role) return <Login setRole={setRole} />;

  return (
    <div className={dark ? "dark" : ""}>
      <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
        <button onClick={() => setDark(!dark)}>
          Toggle Theme
        </button>

        <button onClick={handleLogout}>
          Logout
        </button>
      </div>

      <h3>Logged in as: {role.toUpperCase()}</h3>

      <Products role={role} />
      <Cart />
    </div>
  );
}
