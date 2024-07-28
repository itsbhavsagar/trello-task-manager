import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import styles from "../styles/login.module.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/login", { email, password });
      if (response.status === 200) {
        router.push("/dashboard"); // Redirect to dashboard after successful login
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div className={styles.loginContainer}>
      <h2>Welcome to !Workflo</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Your email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <p>
        Don’t have an account? <a href="/signup">Create a new account</a>
      </p>
    </div>
  );
};

export default Login;
