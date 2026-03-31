import { useEffect, useState } from "react";
import { Layout } from "../components/Layout";
import api from "../services/api";

type Resource = {
  id: string;
  name: string;
  type: string;
  status: string;
};

export function Resources() {
  const [resources, setResources] = useState<Resource[]>([]);
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [status, setStatus] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);

  async function fetchResources() {
    const response = await api.get("/resources");
    setResources(response.data);
  }

  async function handleSubmit() {
    try {
      if (editingId) {
        await api.put(`/resources/${editingId}`, {
          name,
          type,
          status,
        });
      } else {
        await api.post("/resources", {
          name,
          type,
          status,
        });
      }

      // limpar
      setName("");
      setType("");
      setStatus("");
      setEditingId(null);

      fetchResources();
    } catch (error) {
      console.error(error);
    }
  }

  function handleEdit(resource: Resource) {
    setName(resource.name);
    setType(resource.type);
    setStatus(resource.status);
    setEditingId(resource.id);
  }

  async function handleDelete(id: string) {
    await api.delete(`/resources/${id}`);
    fetchResources();
  }

  useEffect(() => {
    fetchResources();
  }, []);

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6">Recursos</h1>

      {/* FORM */}
      <div className="bg-white p-6 rounded-2xl shadow mb-8">
        <h2 className="font-bold mb-4">
          {editingId ? "Editar recurso" : "Criar recurso"}
        </h2>

        <div className="flex flex-col md:flex-row gap-3">
          <input
            placeholder="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border p-2 rounded w-full"
          />

          <input
            placeholder="Tipo"
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="border p-2 rounded w-full"
          />

          <input
            placeholder="Status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="border p-2 rounded w-full"
          />
        </div>

        <button
          onClick={handleSubmit}
          className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
          {editingId ? "Atualizar" : "Criar"}
        </button>
      </div>

      {/* LISTA */}
      <div className="grid gap-4">
        {resources.map((r) => (
          <div
            key={r.id}
            className="bg-white p-4 rounded-2xl shadow flex justify-between items-center"
          >
            <div>
              <p className="font-semibold">{r.name}</p>
              <p className="text-sm text-gray-500">{r.type}</p>
              <p
                className={`text-sm ${
                  r.status === "ativo" ? "text-green-500" : "text-red-500"
                }`}
              >
                {r.status}
              </p>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => handleEdit(r)}
                className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded"
              >
                Editar
              </button>

              <button
                onClick={() => handleDelete(r.id)}
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
              >
                Deletar
              </button>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}
