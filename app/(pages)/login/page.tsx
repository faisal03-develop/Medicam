import { useState, useContext } from "react";
import API from "@/services/api";
import { AuthContext } from "@/context/AuthContext";
import { useRouter } from "next/router";

export default function Login() {
  const { login } = useContext(AuthContext)!;
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: any) => {
    e.preventDefault();

    try {
      const response = await API.post("/auth/login", { email, password });

      login(response.data.token, response.data.user);

      // redirect by role
      if (response.data.user.role === "patient") router.push("/dashboard/patient");
      else if (response.data.user.role === "doctor") router.push("/dashboard/doctor");
      else router.push("/dashboard/admin");

    } catch (err: any) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div>
      <h2>Login</h2>

      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}
