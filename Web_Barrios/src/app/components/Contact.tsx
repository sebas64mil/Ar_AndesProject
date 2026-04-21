import { motion } from "motion/react";
import { MapPin, Mail, Phone, Send, Instagram, Facebook, Twitter } from "lucide-react";

export function Contact() {
  return (
    <section id="contacto" className="relative py-24 px-6 bg-gradient-to-b from-gray-50 to-purple-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-pink-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent inline-block">
            Visítanos
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-600 to-cyan-600 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-purple-200 shadow-lg">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="mb-1 text-gray-800">Ubicación</h3>
                  <p className="text-gray-600">
                    Sala Colpatria<br />
                    Universidad de los Andes<br />
                    Cra. 1 #18A - 12, Bogotá
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-cyan-200 shadow-lg">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="mb-1 text-gray-800">Email</h3>
                  <p className="text-gray-600">elbarrio@uniandes.edu.co</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-pink-200 shadow-lg">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="mb-1 text-gray-800">Teléfono</h3>
                  <p className="text-gray-600">+57 (1) 339 4949 ext. 2222</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-lg">
              <h3 className="mb-4 text-gray-800 text-xl">Mapa</h3>

              <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-lg flex items-center justify-center">
            <iframe
              src="https://www.google.com/maps?q=4.6014581,-74.0661334&z=15&output=embed"
              width="100%"
              height="450"
              allowFullScreen
              loading="lazy"
              title="Google Maps - Ubicación Sala Colpatria Universidad de los Andes"
              className="w-full h-[450px] border-0"
            />
          </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="p-8 rounded-2xl bg-white border border-purple-200 shadow-xl">
              <h3 className="text-2xl mb-6 text-gray-800">Contáctanos</h3>

              <form className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-700 mb-2">Nombre</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-300 text-gray-800 placeholder-gray-400 focus:border-purple-500 focus:outline-none transition-colors"
                    placeholder="Tu nombre completo"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-300 text-gray-800 placeholder-gray-400 focus:border-purple-500 focus:outline-none transition-colors"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-700 mb-2">Mensaje</label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-300 text-gray-800 placeholder-gray-400 focus:border-purple-500 focus:outline-none transition-colors resize-none"
                    placeholder="Cuéntanos cómo podemos ayudarte..."
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-6 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-200 hover:shadow-purple-300 transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Enviar mensaje
                </motion.button>
              </form>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <p className="text-gray-600 text-sm mb-4 text-center">Síguenos en redes sociales</p>
                <div className="flex justify-center gap-4">
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.1 }}
                    className="w-12 h-12 rounded-lg bg-gray-50 border border-gray-200 flex items-center justify-center hover:border-purple-400 hover:bg-purple-50 transition-all"
                  >
                    <Instagram className="w-5 h-5 text-gray-600" />
                  </motion.a>
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.1 }}
                    className="w-12 h-12 rounded-lg bg-gray-50 border border-gray-200 flex items-center justify-center hover:border-cyan-400 hover:bg-cyan-50 transition-all"
                  >
                    <Facebook className="w-5 h-5 text-gray-600" />
                  </motion.a>
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.1 }}
                    className="w-12 h-12 rounded-lg bg-gray-50 border border-gray-200 flex items-center justify-center hover:border-pink-400 hover:bg-pink-50 transition-all"
                  >
                    <Twitter className="w-5 h-5 text-gray-600" />
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
