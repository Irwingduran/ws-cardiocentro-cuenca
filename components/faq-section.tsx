"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronDown, ChevronUp, Heart, Clock, CreditCard, Shield } from "lucide-react"

export function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  const faqs = [
    {
      category: "Servicios",
      icon: Heart,
      color: "bg-red-100 text-red-800",
      question: "¿Qué servicios de cardiología ofrecen?",
      answer:
        "Ofrecemos servicios completos de cardiología incluyendo: electrofisiología cardiaca, implante de marcapasos, estudios diagnósticos (ECG, ecocardiograma, Holter, MAPA), cardiología clínica para adultos y niños, y medicina integral con equipo multidisciplinario.",
    },
    {
      category: "Citas",
      icon: Clock,
      color: "bg-blue-100 text-blue-800",
      question: "¿Cómo puedo agendar una cita?",
      answer:
        "Puedes agendar tu cita llamando directamente a nuestro centro, a través de WhatsApp, o visitando nuestras instalaciones. Ofrecemos horarios flexibles y atención de emergencias. También manejamos citas programadas para seguimientos y controles.",
    },
    {
      category: "Costos",
      icon: CreditCard,
      color: "bg-green-100 text-green-800",
      question: "¿Cuáles son los costos de los servicios?",
      answer:
        "En CardioCentro Cuenca comprendemos la importancia de garantizar el acceso a la salud cardiovascular con calidad y sensibilidad social. Nuestros precios se adaptan a convenios con aseguradoras, empresas y programas institucionales. Contamos con un área de trabajo social que evalúa casos clínicos de pacientes con recursos limitados, facilitando el acceso a medicina solidaria como parte fundamental de nuestra misión. Para conocer las tarifas de cada servicio, contáctanos directamente.",
    },
    {
      category: "Seguros",
      icon: Shield,
      color: "bg-purple-100 text-purple-800",
      question: "¿Aceptan seguros médicos?",
      answer:
        "Sí, trabajamos con diversas aseguradoras y tenemos convenios institucionales. También ofrecemos opciones flexibles de pago y programas de medicina solidaria para garantizar el acceso a la salud cardiovascular de calidad. Se ofrecen opciones flexibles y asesoría para que más personas puedan acceder a atención médica especializada sin barreras.",
    },
    {
      category: "Servicios",
      icon: Heart,
      color: "bg-red-100 text-red-800",
      question: "¿Realizan cirugías cardiovasculares?",
      answer:
        "Contamos con especialistas en cirugía cardiovascular como parte de nuestro equipo multidisciplinario. Los procedimientos como el implante de marcapasos se realizan en una clínica aliada bajo supervisión de nuestro equipo especializado, garantizando la continuidad del cuidado y seguimiento del paciente.",
    },
    {
      category: "Citas",
      icon: Clock,
      color: "bg-blue-100 text-blue-800",
      question: "¿Atienden emergencias cardiovasculares?",
      answer:
        "Sí, contamos con protocolos de atención para emergencias cardiovasculares. Nuestro equipo está preparado para evaluar y estabilizar pacientes con condiciones cardíacas urgentes, coordinando con centros hospitalarios cuando sea necesario.",
    },
    {
      category: "Servicios",
      icon: Heart,
      color: "bg-red-100 text-red-800",
      question: "¿Qué es la electrofisiología cardiaca?",
      answer:
        "La electrofisiología cardiaca es la especialidad que se encarga del diagnóstico y tratamiento de las arritmias (alteraciones del ritmo cardíaco) como taquicardias, fibrilación auricular, bloqueos y síncope. Incluye implante y seguimiento clínico de marcapasos, ajustes de dispositivos y estudios de electrofisiología no invasivos.",
    },
    {
      category: "Citas",
      icon: Clock,
      color: "bg-blue-100 text-blue-800",
      question: "¿Cuánto tiempo dura una consulta?",
      answer:
        "Las consultas iniciales suelen durar entre 45-60 minutos para realizar una evaluación completa. Las consultas de seguimiento duran aproximadamente 30 minutos. Los estudios diagnósticos tienen tiempos variables según el tipo de examen.",
    },
    {
      category: "Servicios",
      icon: Heart,
      color: "bg-red-100 text-red-800",
      question: "¿Atienden pacientes pediátricos?",
      answer:
        "Sí, ofrecemos cardiología pediátrica para el diagnóstico y tratamiento de cardiopatías congénitas y otras condiciones cardiovasculares en niños. Nuestro equipo tiene experiencia en el manejo de pacientes pediátricos con enfoque especializado.",
    },
    {
      category: "Costos",
      icon: CreditCard,
      color: "bg-green-100 text-green-800",
      question: "¿Ofrecen planes de financiamiento?",
      answer:
        "Sí, ofrecemos opciones flexibles de pago y trabajamos con nuestro departamento de trabajo social para evaluar cada caso individualmente. Nuestro objetivo es facilitar el acceso a la atención médica especializada sin barreras económicas.",
    },
  ]

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Preguntas Frecuentes</Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Resolvemos tus Dudas</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-justify">
            Encuentra respuestas a las preguntas más comunes sobre nuestros servicios, procesos y atención médica
            especializada en cardiología.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-0">
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full p-6 text-left hover:bg-gray-50 transition-colors duration-200"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-3">
                          <div className={`p-2 rounded-full ${faq.color.split(" ")[0]}`}>
                            <faq.icon className={`h-4 w-4 ${faq.color.split(" ")[1]}`} />
                          </div>
                          <Badge className={faq.color} variant="secondary">
                            {faq.category}
                          </Badge>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                      </div>
                      <div className="flex-shrink-0 ml-4">
                        {openItems.includes(index) ? (
                          <ChevronUp className="h-5 w-5 text-gray-500" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-gray-500" />
                        )}
                      </div>
                    </div>
                  </button>

                  {openItems.includes(index) && (
                    <div className="px-6 pb-6">
                      <div className="pl-16">
                        <p className="text-gray-600 leading-relaxed text-justify">{faq.answer}</p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">¿No encontraste tu respuesta?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto text-justify">
            Nuestro equipo está disponible para resolver cualquier duda adicional que tengas sobre nuestros servicios o
            tu condición médica específica.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contacto"
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              Contactar Ahora
            </a>
            <a
              href="tel:+593989898747"
              className="inline-flex items-center justify-center px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors duration-200"
            >
              Llamar Directamente
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
