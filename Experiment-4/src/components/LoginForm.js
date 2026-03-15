import React, { useState } from "react";

function LoginForm() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setMessage("All fields are required");
    } else {
      setMessage("Login Successful");
    }
  };

  return (
    <form onSubmit={handleSubmit}>

      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="submit">Submit</button>

      {message && <p>{message}</p>}

    </form>
  );
}

export default LoginForm;