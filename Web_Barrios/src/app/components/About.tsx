import { motion } from "motion/react";
import { Sparkles, Building2, GraduationCap } from "lucide-react";

export function About() {
  return (
    <section id="sobre" className="relative py-24 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent inline-block">
            Sobre el proyecto
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-cyan-600 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="p-8 rounded-2xl bg-white border border-purple-200 shadow-xl">
              <Sparkles className="w-12 h-12 text-cyan-600 mb-6" />
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                <span className="text-transparent bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text">El barrio: la ciencia de vivir juntos</span> es una experiencia inmersiva que combina tecnología, cultura y educación para explorar la evolución de la vida urbana.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                A través de 10 fases interactivas, los visitantes recorren espacios que representan diferentes aspectos del barrio: desde la agricultura urbana hasta la participación ciudadana, pasando por la renovación urbana, el transporte y la cultura del graffiti.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Cada estación ofrece una reflexión sobre cómo la ciencia y la comunidad se entrelazan para crear ciudades más habitables, sostenibles e inclusivas.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="group p-6 rounded-xl bg-white border border-purple-200 shadow-lg hover:shadow-purple-200 hover:border-purple-400 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Building2 className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="mb-2 text-gray-800 text-xl">Colaboración institucional</h3>
                  <p className="text-gray-600">
                    Desarrollado por la Universidad de los Andes en colaboración con la Universidad de San Buenaventura
                  </p>
                </div>
              </div>
            </div>

            <div className="group p-6 rounded-xl bg-white border border-cyan-200 shadow-lg hover:shadow-cyan-200 hover:border-cyan-400 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <GraduationCap className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="mb-2 text-gray-800 text-xl">Tecnología + Educación</h3>
                  <p className="text-gray-600">
                    Espacios inmersivos que utilizan tecnología de punta para educar y sensibilizar sobre innovación urbana
                  </p>
                </div>
              </div>
            </div>

            <div className="group p-6 rounded-xl bg-white border border-pink-200 shadow-lg hover:shadow-pink-200 hover:border-pink-400 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="mb-2 text-gray-800 text-xl">Comunidad y cultura</h3>
                  <p className="text-gray-600">
                    Un espacio para reflexionar sobre el rol de la ciencia en la construcción de comunidades más fuertes
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
