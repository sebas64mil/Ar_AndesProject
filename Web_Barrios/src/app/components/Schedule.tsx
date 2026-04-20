import { motion } from "motion/react";
import { Calendar, Clock, Users, Sparkles } from "lucide-react";

const events = [
  {
    date: "Julio 1",
    time: "10:00 AM",
    title: "Inauguración oficial",
    type: "Evento especial",
    description: "Ceremonia de apertura con autoridades y colaboradores",
    icon: Sparkles,
    color: "from-purple-500 to-pink-500",
  },
  {
    date: "Julio 5-8",
    time: "2:00 PM",
    title: "Talleres familiares",
    type: "Taller",
    description: "Actividades interactivas para todas las edades",
    icon: Users,
    color: "from-cyan-500 to-blue-500",
  },
  {
    date: "Julio 12",
    time: "11:00 AM",
    title: "Recorrido guiado académico",
    type: "Visita guiada",
    description: "Para estudiantes universitarios y profesionales",
    icon: Users,
    color: "from-green-500 to-emerald-500",
  },
  {
    date: "Julio 15-20",
    time: "3:00 PM",
    title: "Semana de la innovación urbana",
    type: "Serie de charlas",
    description: "Conferencias con expertos en urbanismo y sostenibilidad",
    icon: Sparkles,
    color: "from-orange-500 to-red-500",
  },
  {
    date: "Julio 26",
    time: "10:00 AM",
    title: "Taller de graffiti comunitario",
    type: "Taller",
    description: "Expresión artística y cultura urbana",
    icon: Users,
    color: "from-fuchsia-500 to-purple-500",
  },
  {
    date: "Agosto 1-5",
    time: "9:00 AM",
    title: "Campamento urbano infantil",
    type: "Programa especial",
    description: "Programa educativo de 5 días para niños 8-12 años",
    icon: Users,
    color: "from-pink-500 to-rose-500",
  },
  {
    date: "Agosto 10",
    time: "6:00 PM",
    title: "Noche de ciencia y ciudad",
    type: "Evento nocturno",
    description: "Experiencia inmersiva con iluminación especial",
    icon: Sparkles,
    color: "from-violet-500 to-purple-500",
  },
  {
    date: "Agosto 15",
    time: "5:00 PM",
    title: "Clausura y reflexión comunitaria",
    type: "Evento especial",
    description: "Cierre con conversatorio abierto al público",
    icon: Sparkles,
    color: "from-blue-500 to-cyan-500",
  },
];

export function Schedule() {
  return (
    <section id="programacion" className="relative py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 bg-clip-text text-transparent inline-block">
            Programación
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Eventos, talleres y actividades durante julio y agosto 2026
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {events.map((event, index) => {
            const Icon = event.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group relative p-6 rounded-2xl bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="absolute top-4 right-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${event.color} flex items-center justify-center opacity-90 group-hover:opacity-100 transition-opacity shadow-md`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                <div className="mb-4">
                  <div className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-purple-100 to-cyan-100 border border-purple-300 text-xs text-purple-700 mb-3">
                    {event.type}
                  </div>

                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                    <Calendar className="w-4 h-4" />
                    <span>{event.date}</span>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                    <Clock className="w-4 h-4" />
                    <span>{event.time}</span>
                  </div>
                </div>

                <h3 className="mb-2 text-gray-800 pr-14">{event.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {event.description}
                </p>

                <div className="mt-4 pt-4 border-t border-gray-200">
                  <button className="text-sm text-cyan-600 hover:text-cyan-700 transition-colors flex items-center gap-1 group-hover:gap-2 transition-all">
                    Más información
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-purple-50 to-cyan-50 border border-purple-200 text-center"
        >
          <h3 className="text-2xl mb-4 text-gray-800">Horarios de apertura</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div>
              <p className="text-gray-600 mb-1">Martes a Viernes</p>
              <p className="text-xl text-gray-800">9:00 AM - 6:00 PM</p>
            </div>
            <div>
              <p className="text-gray-600 mb-1">Sábados y Domingos</p>
              <p className="text-xl text-gray-800">10:00 AM - 5:00 PM</p>
            </div>
          </div>
          <p className="text-gray-500 text-sm mt-4">Lunes cerrado</p>
        </motion.div>
      </div>
    </section>
  );
}
