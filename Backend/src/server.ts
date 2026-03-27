import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import authRoutes from "./routes/authRoutes";
import resourceRoutes from "./routes/resourceRoutes";

import dashboardRoutes from "./routes/dashboardRoutes";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  return res.json({ message: "API rodando 🚀" });
});


// 🔥 ROTAS VÊM ANTES DO LISTEN
app.use("/auth", authRoutes);
app.use("/resources", resourceRoutes);
app.use("/dashboard", dashboardRoutes);

const PORT = process.env.PORT || 3000;

// 🔥 LISTEN SEMPRE POR ÚLTIMO
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
