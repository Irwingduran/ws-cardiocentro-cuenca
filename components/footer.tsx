"use client"

import { Heart, MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { LegalModal } from "@/components/legal-modals"

export function Footer() {
  const [modalOpen, setModalOpen] = useState<"privacy" | "terms" | null>(null)
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
            <div className="text-gray-400 text-sm space-y-1 mb-4">
              <p className="font-semibold text-gray-300">CORPCARDIOCUENCA S.A.S</p>
              <p>RUC: 0195156001001</p>
            </div>
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
                  <p className="text-gray-400 text-sm">Gonzalo Cordero s/n César Dávila Andrade</p>
                  <p className="text-gray-400 text-sm">Cuenca, Ecuador</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-gray-400" />
                <div>
                  <a href="tel:+593989898747" className="text-gray-400 text-sm hover:text-white transition-colors">
                    0989898747
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-gray-400" />
                <div>
                  <a href="mailto:cardiocentro.cue@outlook.es" className="text-gray-400 text-sm hover:text-white transition-colors">
                    cardiocentro.cue@outlook.es
                  </a>
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
              <button
                onClick={() => setModalOpen("terms")}
                className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
              >
                Términos y Condiciones
              </button>
              <button
                onClick={() => setModalOpen("privacy")}
                className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
              >
                Política de Privacidad
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Legal Modals */}
      {modalOpen && (
        <LegalModal
          isOpen={modalOpen !== null}
          onClose={() => setModalOpen(null)}
          type={modalOpen}
        />
      )}
    </footer>
  )
}
