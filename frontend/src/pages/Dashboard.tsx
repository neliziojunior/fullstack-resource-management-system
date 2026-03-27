import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../services/api";
import { Layout } from "../components/Layout";


export function Dashboard() {
  const [stats, setStats] = useState<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/");
      return;
    }

    fetch(`${API_URL}/dashboard`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setStats(data));
  }, []);

  if (!stats) return <p>Carregando...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>Dashboard</h1>

      <div style={{ display: "flex", gap: "20px" }}>
        <div style={cardStyle}>
          <h2>Total</h2>
          <p>{stats.total}</p>
        </div>

        <div style={cardStyle}>
          <h2>Ativos</h2>
          <p>{stats.ativos}</p>
        </div>

        <div style={cardStyle}>
          <h2>Inativos</h2>
          <p>{stats.inativos}</p>
        </div>
      </div>
    </div>
  );
}

const cardStyle = {
  padding: "20px",
  border: "1px solid #ccc",
  borderRadius: "10px",
  width: "150px",
  textAlign: "center" as const,
};
