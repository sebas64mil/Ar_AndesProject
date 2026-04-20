import { motion } from "motion/react";
import { Sparkles, Calendar } from "lucide-react";

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-purple-50 via-white to-cyan-50">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-300/40 rounded-full blur-[128px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-300/40 rounded-full blur-[128px]"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-300/30 rounded-full blur-[128px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-cyan-100 border border-purple-300 backdrop-blur-sm mb-6">
            <Sparkles className="w-4 h-4 text-cyan-600" />
            <span className="text-sm text-purple-700">Experiencia Inmersiva</span>
          </div>

          <h1 className="text-6xl md:text-8xl mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 bg-clip-text text-transparent" style={{ fontWeight: 700 }}>
            El barrio
          </h1>
          <h2 className="text-3xl md:text-5xl mb-8 text-gray-800" style={{ fontWeight: 600 }}>
            la ciencia de vivir juntos
          </h2>

          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-12">
            Un viaje interactivo a través de un barrio ficticio de Bogotá,
            explorando la vida urbana del pasado, presente y futuro
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/50 hover:shadow-purple-500/70 transition-all"
            >
              Explorar recorrido
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-xl bg-white/10 text-white border border-white/20 backdrop-blur-sm hover:bg-white/20 transition-all flex items-center gap-2"
            >
              <Calendar className="w-5 h-5" />
              Ver programación
            </motion.button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto text-left">
            <div className="p-6 rounded-xl bg-white border border-purple-200 shadow-lg shadow-purple-100">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-4">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <h3 className="mb-2 text-gray-800">Fechas</h3>
              <p className="text-gray-600">Julio 1 - Agosto 15, 2026</p>
            </div>

            <div className="p-6 rounded-xl bg-white border border-cyan-200 shadow-lg shadow-cyan-100">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="mb-2 text-gray-800">Ubicación</h3>
              <p className="text-gray-600">Sala Colpatria, Universidad de los Andes</p>
            </div>

            <div className="p-6 rounded-xl bg-white border border-pink-200 shadow-lg shadow-pink-100">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="mb-2 text-gray-800">Audiencia</h3>
              <p className="text-gray-600">Estudiantes, familias, turistas</p>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-gray-400 flex items-start justify-center p-2"
        >
          <div className="w-1.5 h-1.5 bg-gray-600 rounded-full"></div>
        </motion.div>
      </div>
    </section>
  );
}
