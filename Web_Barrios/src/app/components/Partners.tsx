import { motion } from "motion/react";
import { Building2, GraduationCap } from "lucide-react";

export function Partners() {
  const partners = [
    {
      name: "Universidad de los Andes",
      role: "Desarrollo y coordinación",
      icon: GraduationCap,
      color: "from-purple-500 to-pink-500",
    },
    {
      name: "Universidad de San Buenaventura",
      role: "Colaboración académica",
      icon: GraduationCap,
      color: "from-cyan-500 to-blue-500",
    },
    {
      name: "Sala Colpatria",
      role: "Espacio de exhibición",
      icon: Building2,
      color: "from-pink-500 to-purple-500",
    },
  ];

  return (
    <section className="relative py-24 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent inline-block">
            Nuestros aliados
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-cyan-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Instituciones comprometidas con la educación, cultura e innovación urbana
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {partners.map((partner, index) => {
            const Icon = partner.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group p-8 rounded-2xl bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <div
                    className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${partner.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <Icon className="w-12 h-12 text-white" />
                  </div>

                  <h3 className="text-xl mb-2 text-gray-800">{partner.name}</h3>
                  <p className="text-sm text-gray-600">{partner.role}</p>

                  <div className="mt-6 w-full h-32 rounded-xl bg-gray-50 border border-gray-200 flex items-center justify-center">
                    <span className="text-xs text-gray-400">Logo {partner.name}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 mb-6">
            ¿Interesado en colaborar con nosotros?
          </p>
          <motion.a
            href="#contacto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-3 rounded-xl bg-gradient-to-r from-purple-100 to-cyan-100 text-purple-700 border border-purple-300 hover:shadow-md transition-all"
          >
            Contáctanos
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
