import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import { Layout } from "../components/Layout";

type Stats = {
  total: number;
  ativos: number;
  inativos: number;
};

export function Dashboard() {
  const [stats, setStats] = useState<Stats | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/");
      return;
    }

    async function fetchDashboard() {
      try {
        const response = await api.get("/dashboard");
        setStats(response.data);
      } catch (error) {
        console.error("Erro ao buscar dashboard:", error);
        navigate("/");
      }
    }

    fetchDashboard();
  }, [navigate]);

  if (!stats) return <p>Carregando...</p>;

  return (
  <Layout>
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>

      <button
        onClick={() => navigate("/resources")}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Ver Recursos
      </button>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-white p-6 rounded-2xl shadow">
        <h2 className="text-gray-500">Total</h2>
        <p className="text-2xl font-bold">{stats.total}</p>
      </div>

      <div className="bg-green-500 text-white p-6 rounded-2xl shadow">
        <h2>Ativos</h2>
        <p className="text-2xl font-bold">{stats.ativos}</p>
      </div>

      <div className="bg-red-500 text-white p-6 rounded-2xl shadow">
        <h2>Inativos</h2>
        <p className="text-2xl font-bold">{stats.inativos}</p>
      </div>
    </div>
  </Layout>
);
}
