import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Inicio", href: "#inicio" },
    { label: "Sobre el proyecto", href: "#sobre" },
    { label: "Recorrido", href: "#recorrido" },
    { label: "Programación", href: "#programacion" },
    { label: "Contacto", href: "#contacto" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-purple-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.a
            href="#inicio"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl bg-gradient-to-r  from-orange-600 to-orange-400 bg-clip-text text-transparent"
            style={{ fontWeight: 700 }}
          >
            El barrio
          </motion.a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`text-sm transition-colors ${
                  isScrolled
                    ? "text-gray-700 hover:text-orange-600"
                    : "text-gray-800 hover:text-orange-600"
                }`}
              >
                {item.label}
              </motion.a>
            ))}
            <motion.a
              href="#contacto"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="px-6 py-2 rounded-lg bg-gradient-to-r from-orange-600 to-orange-400 text-white shadow-md hover:shadow-lg transition-all"
            >
              Visitar
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-purple-100 text-purple-600"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4 py-4 space-y-4 bg-white rounded-xl shadow-lg border border-purple-100"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-2 text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block mx-4 px-6 py-2 text-center rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white"
            >
              Visitar
            </a>
          </motion.div>
        )}
      </div>
    </nav>
  );
}
