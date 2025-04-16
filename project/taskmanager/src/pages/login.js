import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const fakeEmail = username + "@taskapp.local";
      await signInWithEmailAndPassword(auth, fakeEmail, password);
      navigate("/dashboard");
    } catch (err) {
      alert("Invalid login.");
    }
  };

  return (
    <div className="auth-page">
      <h2>Log In</h2>
      <input placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Log In</button>
    </div>
  );
}
