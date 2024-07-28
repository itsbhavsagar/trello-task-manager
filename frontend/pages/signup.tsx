// pages/signup.tsx
import { NextPage } from "next";
import { useState } from "react";
import styles from "../styles/signup.module.css";

const Signup: NextPage = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (event: React.FormEvent) => {
    event.preventDefault();
    // Handle signup logic here
  };

  return (
    <div className={styles.signupContainer}>
      <form className={styles.signupForm} onSubmit={handleSignup}>
        <input
          type="text"
          placeholder="Full name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className={styles.signupInput}
          required
        />
        <input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.signupInput}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={styles.signupInput}
          required
        />
        <button type="submit" className={styles.signupButton}>
          Sign up
        </button>
      </form>
      <div className={styles.loginLink}>
        Already have an account? <a href="/login">Log in</a>
      </div>
    </div>
  );
};

export default Signup;
