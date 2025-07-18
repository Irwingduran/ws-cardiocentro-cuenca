import { Heart, MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from "lucide-react"
import Link from "next/link"

export function Footer() {
  const quickLinks = [
    { name: "Inicio", href: "#inicio" },
    { name: "Servicios", href: "#servicios" },
    { name: "Experiencia", href: "#experiencia" },
    { name: "Contacto", href: "#contacto" },
  ]

  const services = [
    "Cardiología Clínica",
    "Electrofisiología",
    "Implante de Marcapasos",
    "Estudios Diagnósticos",
    "Medicina Integral",
    "Salud Ocupacional",
  ]

  const certifications = ["SENESCYT", "Ministerio de Salud Pública", "ACESS", "SEDEC", "SOMEEC", "LAHRS"]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-2 rounded-lg">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">CardioCentro Cuenca</h3>
                <p className="text-gray-400 text-sm">Cardiología</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Centro médico altamente especializado en el cuidado integral del corazón con más de 10 años de experiencia
              en medicina cardiovascular.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 transition-colors duration-200">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-pink-600 transition-colors duration-200">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-blue-700 transition-colors duration-200">
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors duration-200">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Servicios</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contacto</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-gray-400" />
                <div>
                  <p className="text-gray-400 text-sm">Av. Principal 123</p>
                  <p className="text-gray-400 text-sm">Cuenca, Ecuador</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-gray-400" />
                <div>
                  <p className="text-gray-400 text-sm">+593 7 XXX-XXXX</p>
                  <p className="text-gray-400 text-sm">+593 9XX-XXX-XXX</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-gray-400" />
                <div>
                  <p className="text-gray-400 text-sm">info@cardiocentrocuenca.com</p>
                  <p className="text-gray-400 text-sm">citas@cardiocentrocuenca.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <h4 className="text-lg font-semibold mb-6 text-center">Certificaciones y Afiliaciones</h4>
          <div className="flex flex-wrap justify-center gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-gray-800 px-4 py-2 rounded-full">
                <span className="text-gray-300 text-sm">{cert}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} CardioCentro Cuenca. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Términos y Condiciones
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Política de Privacidad
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Aviso Legal
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
