import { motion } from "motion/react";
import { Sparkles, Calendar } from "lucide-react";
import ImagenFondo from "@/Images/ImagenFondo.png";
import Ambulancia from "@/Images/Ambulacia.png";
import Cellphone from "@/Images/cellphone.png";

export function Hero() {
  return (
    <section id="inicio" className="relative w-full pb-16 md:min-h-screen md:flex md:items-center md:justify-center overflow-hidden bg-gradient-to-b from-yellow-50 via-orange-50 to-yellow-50">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-300/40 rounded-full blur-[128px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-300/40 rounded-full blur-[128px]"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-300/30 rounded-full blur-[128px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 w-full flex flex-col md:flex-row items-center gap-8">
        {/* Contenedor izquierdo */}
        <div className="flex-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >


            <h1 className="text-6xl md:text-8xl mb-6 font-bold bg-gradient-to-r  from-orange-600 to-yellow-400 bg-clip-text text-transparent">
              El barrio
            </h1>
            <h2 className="text-3xl md:text-5xl mb-8 font-semibold text-gray-800">
              la ciencia de vivir juntos
            </h2>

            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mb-12">
              Un viaje interactivo a través de un barrio ficticio de Bogotá,
              explorando la vida urbana del pasado, presente y futuro
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-start items-center mb-12">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-orange-600 to-orange-400 text-white transition-all"
                style={{ boxShadow: "0 0 24px rgba(159, 76, 57, 0.7)" }}
              >
                Explorar recorrido
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: '#FFEDD5' }} // orange-200
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-xl bg-white/20 border-2 backdrop-blur-sm transition-all flex items-center gap-2"
                style={{
                  borderImage: 'linear-gradient(to right, #ea580c, #fbbf24) 1',
                  borderWidth: 2,
                  borderRadius: '0.75rem'
                }}
              >
                <Calendar className="w-5 h-5 text-orange-400" />
                <span className="bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent font-semibold">Ver programación</span>
              </motion.button>
            </div>
          </motion.div>
        </div>

        <div className="flex-1 w-full relative md:h-96 overflow-visible md:flex md:items-center md:justify-center">
          {/* Cuadrado 1 - Grande con imagen de fondo */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="w-80 h-80 mx-auto md:absolute md:w-[450px] md:h-[450px] rounded-2xl opacity-90 z-40
                       md:left-1/2 md:-translate-x-1/2 md:top-1/2 md:-translate-y-1/2 bg-cover bg-center relative flex items-center justify-center"
            style={{ 
              backgroundImage: `url(${ImagenFondo})`,
              boxShadow: " 0 0 24px rgba(159, 76, 57, 0.7)"
            }}
          >
            {/* Div ambulancia - Imagen de fondo */}
            <div 
              className="w-[65%] h-[65%] rounded-2xl bg-cover bg-center relative flex items-center justify-center"
              style={{ 
                backgroundImage: `url(${Ambulancia})`
              }}
            >
              {/* Celular con animación AR */}
              <motion.div 
                animate={{
                  x: [0, 80, 80, 60, 0, -60, -80, -60],
                  y: [0, 50, 0, -30, -50, -30, 0, 30],
                  rotate: [0, 0, 0, 0, 0, 0, 0, 0]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute w-24 h-32 md:w-40 md:h-56 z-50"
              >
                <img 
                  src={Cellphone} 
                  alt="Celular AR"
                  className="w-full h-full object-contain drop-shadow-lg"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
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
