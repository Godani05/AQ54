import { useState } from "react";
import { login } from "./firebaseAuth"; // Importez votre fonction de connexion Firebase
import { useNavigate } from "react-router-dom";

const LoginPage: React.FC = () => {
  // États pour stocker l'email, le mot de passe et les messages d'erreur
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  // Fonction pour gérer la soumission du formulaire de connexion
  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault(); // Empêche le rechargement de la page
    try {
      // Appelle la fonction Firebase pour se connecter
      const user = await login(email, password);
      setError(null);
      alert(`Connexion réussie. Bienvenue, ${user.email}!`);
      navigate('/dashboard');
    } catch (err) {
      // Gère les erreurs
      setError(err instanceof Error ? err.message : "Une erreur s'est produite");
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "0 auto", fontFamily: "Arial, sans-serif" }}>
      <h1>Connexion</h1>
      <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column" }}>
        <label htmlFor="email" style={{ marginBottom: "8px" }}>
          Email :
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Entrez votre email"
          style={{
            padding: "10px",
            marginBottom: "15px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
          required
        />

        <label htmlFor="password" style={{ marginBottom: "8px" }}>
          Mot de passe :
        </label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Entrez votre mot de passe"
          style={{
            padding: "10px",
            marginBottom: "20px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
          required
        />

        {error && (
          <p style={{ color: "red", marginBottom: "15px" }}>
            {error}
          </p>
        )}

        <button
          type="submit"
          style={{
            padding: "10px 20px",
            backgroundColor: "#007BFF",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Se connecter
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
