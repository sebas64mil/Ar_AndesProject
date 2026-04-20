"use client";

import { motion } from "motion/react";
import {
  Sprout,
  Building,
  Home,
  Heart,
  Trees,
  Coffee,
  Palette,
  Train,
  Bike,
  Users,
} from "lucide-react";

const phases = [
  {
    icon: Sprout,
    title: "Agricultura urbana",
    description: "Cultivos sostenibles en el corazón de la ciudad",
    color: "from-green-500 to-emerald-500",
    image:
      "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1400&q=80",
  },
  {
    icon: Building,
    title: "Renovación urbana",
    description: "Transformación y modernización de espacios",
    color: "from-blue-500 to-cyan-500",
    image:
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1400&q=80",
  },
  {
    icon: Home,
    title: "Vida en casa",
    description: "El hogar como núcleo de la comunidad",
    color: "from-purple-500 to-pink-500",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80",
  },
  {
    icon: Heart,
    title: "Ciudad que cuida",
    description: "Salud y bienestar para todos",
    color: "from-pink-500 to-rose-500",
    image:
      "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1400&q=80",
  },
  {
    icon: Trees,
    title: "Parques y ciclovías",
    description: "Espacios verdes para el disfrute colectivo",
    color: "from-emerald-500 to-teal-500",
    image:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1400&q=80",
  },
  {
    icon: Coffee,
    title: "Panadería del barrio",
    description: "Comercio local y puntos de encuentro",
    color: "from-amber-500 to-orange-500",
    image:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1400&q=80",
  },
  {
    icon: Palette,
    title: "Cultura graffiti",
    description: "Arte urbano y expresión comunitaria",
    color: "from-fuchsia-500 to-purple-500",
    image:
      "https://images.unsplash.com/photo-1520975922284-9f6b1b3f8d2a?auto=format&fit=crop&w=1400&q=80",
  },
  {
    icon: Train,
    title: "Transporte masivo",
    description: "Movilidad eficiente y accesible",
    color: "from-red-500 to-orange-500",
    image:
      "https://images.unsplash.com/photo-1529429617124-95b109e86bb8?auto=format&fit=crop&w=1400&q=80",
  },
  {
    icon: Bike,
    title: "Movilidad",
    description: "Alternativas sostenibles de transporte",
    color: "from-cyan-500 to-blue-500",
    image:
      "https://images.unsplash.com/photo-1520974735194-6d2f7d6d1f6f?auto=format&fit=crop&w=1400&q=80",
  },
  {
    icon: Users,
    title: "Participación ciudadana",
    description: "La voz de la comunidad en acción",
    color: "from-violet-500 to-purple-500",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80",
  },
];

export function Journey() {
  return (
    <section className="py-28 px-6 bg-gradient-to-b from-gray-50 via-purple-50 to-cyan-50">
      <div className="max-w-6xl mx-auto space-y-24">
        {phases.map((phase, index) => {
          const Icon = phase.icon;
          const isEven = index % 2 === 0;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className={`grid md:grid-cols-2 gap-10 items-center ${
                !isEven ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              {/* IMAGE SIDE */}
              <div className="relative group">
                <div className="overflow-hidden rounded-3xl shadow-xl">
                  <img
                    src={phase.image}
                    alt={phase.title}
                    className="h-[380px] w-full object-cover group-hover:scale-105 transition duration-700"
                  />
                </div>

                {/* Floating icon */}
                <div
                  className={`absolute -bottom-6 left-6 w-20 h-20 rounded-2xl bg-gradient-to-br ${phase.color} flex items-center justify-center shadow-2xl`}
                >
                  <Icon className="w-10 h-10 text-white" />
                </div>
              </div>

              {/* TEXT SIDE */}
              <div className={`space-y-4 ${!isEven ? "text-right md:pr-10" : "md:pl-10"}`}>
                <span className="text-xs px-3 py-1 rounded-full bg-white/70 backdrop-blur text-gray-600">
                  Fase {index + 1}
                </span>

                <h3 className="text-3xl font-semibold text-gray-800">
                  {phase.title}
                </h3>

                <p className="text-gray-600 leading-relaxed max-w-md ml-auto md:ml-0">
                  {phase.description}
                </p>

                <div
                  className={`h-1 w-16 rounded-full bg-gradient-to-r ${phase.color} ${
                    !isEven ? "ml-auto" : ""
                  }`}
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}