import { motion } from "motion/react";
import { Calendar } from "lucide-react";

// Componente reutilizable para cada tarjeta
interface HighlightCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  borderColor: string;
  shadowColor: string;
  bgGradient: string;
}

export function HighlightCard({
  icon,
  title,
  description,
  borderColor,
  shadowColor,
  bgGradient,
}: HighlightCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className={`p-6 rounded-xl bg-white border ${borderColor} shadow-lg ${shadowColor}`}
    >
      <div
        className={`w-12 h-12 rounded-lg ${bgGradient} flex items-center justify-center mb-4`}
      >
        {icon}
      </div>
      <h3 className="mb-2 text-gray-800 font-semibold">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
}

// Componente que agrupa las 3 tarjetas
export function EventHighlights() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <HighlightCard
            icon={<Calendar className="w-6 h-6 text-white" />}
            title="Fechas"
            description="Julio 1 - Agosto 15, 2026"
            borderColor="border-purple-200"
            shadowColor="shadow-purple-100"
            bgGradient="bg-gradient-to-br from-purple-500 to-pink-500"
          />

          <HighlightCard
            icon={
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            }
            title="Ubicación"
            description="Sala Colpatria, Universidad de los Andes"
            borderColor="border-cyan-200"
            shadowColor="shadow-cyan-100"
            bgGradient="bg-gradient-to-br from-cyan-500 to-blue-500"
          />

          <HighlightCard
            icon={
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            }
            title="Audiencia"
            description="Estudiantes, familias, turistas"
            borderColor="border-pink-200"
            shadowColor="shadow-pink-100"
            bgGradient="bg-gradient-to-br from-pink-500 to-purple-500"
          />
        </div>
      </div>
    </section>
  );
}
