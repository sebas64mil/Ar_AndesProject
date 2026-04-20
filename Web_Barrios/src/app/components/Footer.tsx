import { motion } from "motion/react";

export function Footer() {
  return (
    <footer className="relative py-12 px-6 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl mb-4 bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
              El barrio
            </h3>
            <p className="text-gray-600 mb-4 max-w-md">
              Una experiencia inmersiva sobre la ciencia de vivir juntos,
              desarrollada por las universidades de los Andes y San Buenaventura.
            </p>
            <div className="flex gap-4">
              <div className="w-20 h-20 rounded-lg bg-gray-50 border border-gray-200 flex items-center justify-center">
                <span className="text-xs text-gray-400 text-center">Logo<br />Uniandes</span>
              </div>
              <div className="w-20 h-20 rounded-lg bg-gray-50 border border-gray-200 flex items-center justify-center">
                <span className="text-xs text-gray-400 text-center">Logo<br />USB</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-gray-800">Navegación</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-cyan-600 transition-colors">
                  Sobre el proyecto
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-cyan-600 transition-colors">
                  El recorrido
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-cyan-600 transition-colors">
                  Programación
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-cyan-600 transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-gray-800">Información</h4>
            <ul className="space-y-2">
              <li className="text-gray-600">
                Sala Colpatria<br />
                Universidad de los Andes<br />
                Cra. 1 #18A - 12, Bogotá
              </li>
              <li className="text-gray-600">
                Julio 1 - Agosto 15, 2026
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2026 El barrio: la ciencia de vivir juntos. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-gray-500 hover:text-gray-700 transition-colors">
              Privacidad
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-700 transition-colors">
              Términos
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-700 transition-colors">
              Créditos
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent"></div>
    </footer>
  );
}
