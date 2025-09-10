import { useApp } from "@/contexts/AppContext";

export default function ProjectListMini() {
  const { state } = useApp();
  const { projects } = state;

  return (
    <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm">
      <h3 className="text-lg font-semibold text-gray-800 mb-3">Proyectos disponibles</h3>
      <div className="space-y-3 text-sm text-gray-700">
        {projects.map((project) => (
          <div key={project.id} className="border border-gray-100 p-3 rounded-md">
            <p className="font-medium">{project.title}</p>
            <p className="text-gray-500">{project.description}</p>
            {/* Puedes agregar detalles adicionales aquí más adelante */}
          </div>
        ))}
      </div>
    </div>
  );
}
