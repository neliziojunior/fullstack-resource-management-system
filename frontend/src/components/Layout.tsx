import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export function Layout({ children }: Props) {
  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* SIDEBAR */}
      <aside className="w-64 bg-blue-600 text-white p-6">
        <h2 className="text-2xl font-bold mb-8">Sistema</h2>

        <nav className="flex flex-col gap-4">
          <a href="/dashboard" className="hover:underline">Dashboard</a>
          <a href="#" className="hover:underline">Recursos</a>
        </nav>
      </aside>

      {/* CONTEÚDO */}
      <main className="flex-1 p-6">
        {children}
      </main>
    </div>
  );
}
