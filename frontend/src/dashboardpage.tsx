import React from "react";

const Dashboard: React.FC = () => {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* Barre latérale */}
      <aside style={{ width: "250px", backgroundColor: "#f4f4f4", padding: "20px" }}>
        <h2>Menu</h2>
        <nav>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li>
              <a href="/dashboard/overview">Vue d'ensemble</a>
            </li>
            <li>
              <a href="/dashboard/sensors">Capteurs</a>
            </li>
            <li>
              <a href="/dashboard/settings">Paramètres</a>
            </li>
            <li>
              <a href="/">Déconnexion</a>
            </li>
          </ul>
        </nav>
      </aside>

       {/* Contenu principal  */}
      <div style={{ flex: 1, padding: "20px" }}>
        <header style={{ marginBottom: "20px" }}>
          <h1>Dashboard</h1>
        </header>

        <main>
          <section>
            <h2>Bienvenue dans votre tableau de bord</h2>
            
          </section>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
