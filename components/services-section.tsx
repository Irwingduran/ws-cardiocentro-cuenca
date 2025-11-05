import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Activity, Stethoscope, Users, Zap, Monitor, Shield } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      icon: Zap,
      title: "Electrofisiología Cardiaca y Arritmias",
      description:
        "Evaluación y tratamiento avanzado de arritmias como taquicardias, fibrilación auricular, bloqueos y síncope. Se realiza implante y seguimiento clínico de marcapasos, ajustes de dispositivos y estudios de electrofisiología no invasivos.",
      features: ["Implante de marcapasos", "Seguimiento clínico", "Estudios no invasivos", "Ajustes de dispositivos"],
    },
    {
      icon: Heart,
      title: "Implante de Marcapasos",
      description: "Valoración completa, indicación, implante y seguimiento de pacientes que requieren marcapasos. El procedimiento se realiza en una clínica aliada bajo supervisión de nuestro equipo especializado.",
      features: ["Valoración completa", "Indicación especializada", "Seguimiento continuo", "Clínica aliada certificada"],
    },
    {
      icon: Monitor,
      title: "Estudios Diagnósticos Cardiológicos",
      description: "Realizamos pruebas funcionales y estructurales del corazón con equipos de alta precisión esenciales para detectar y tratar afecciones del corazón de manera precisa.",
      features: ["Electrocardiograma (ECG)", "Ecocardiograma", "Prueba de esfuerzo", "Holter y MAPA 24 horas"],
    },
    {
      icon: Stethoscope,
      title: "Cardiología Clínica (Adultos y Pediátrica)",
      description: "Consulta especializada para el diagnóstico y control de enfermedades cardiovasculares en adultos y niños: hipertensión, insuficiencia cardíaca, dislipidemia, cardiopatías congénitas, entre otras.",
      features: ["Hipertensión", "Insuficiencia cardíaca", "Dislipidemia", "Cardiopatías congénitas"],
    },
    {
      icon: Users,
      title: "Medicina Integral y Apoyo Multidisciplinario",
      description: "Contamos con especialistas en Medicina Interna, Medicina Familiar, Geriatría, Endocrinología, Nefrología, Neumología y Nutrición Clínica. Estas áreas complementan la atención cardiológica para el manejo de comorbilidades, enfermedades crónicas y cuidado del adulto mayor.",
      features: ["Medicina Interna", "Endocrinología", "Nefrología", "Nutrición Clínica", "Geriatría", "Neumología"],
    },
    {
      icon: Shield,
      title: "Salud Ocupacional",
      description: "Ofrecemos servicios de Salud Ocupacional para empresas, con convenios corporativos, evaluaciones médicas pre y post empleo, vigilancia epidemiológica y certificados laborales.",
      features: [
        "Evaluaciones pre y post empleo",
        "Vigilancia epidemiológica",
        "Certificados laborales",
        "Convenios corporativos",
      ],
    },
  ]

  const diagnosticTests = [
    "Electrocardiograma (ECG)",
    "Ecocardiograma transtorácico",
    "Ecocardiograma transesofágico",
    "Ecocardiograma de estrés",
    "Prueba de esfuerzo",
    "Tilt test (mesa basculante)",
    "Holter 24 horas",
    "MAPA 24 horas (monitoreo ambulatorio de presión arterial)",
  ]

  return (
    <section id="servicios" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-brand-purple/10 text-brand-purple hover:bg-brand-purple/20">Servicios Especializados</Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Nuestros Servicios</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-justify">
            Ofrecemos atención integral del corazón con tecnología avanzada y un enfoque multidisciplinario para el
            cuidado de tu salud cardiovascular.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="bg-brand-magenta p-3 rounded-full w-fit mb-4">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4 text-justify">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <div className="bg-brand-purple/20 p-1 rounded-full mr-2">
                        <div className="w-2 h-2 bg-brand-purple rounded-full"></div>
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Estudios Diagnósticos Disponibles</h3>
            <p className="text-gray-600 text-justify">
              Contamos con equipos de alta precisión para diagnósticos cardiovasculares completos
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {diagnosticTests.map((test, index) => (
              <div key={index} className="flex items-center space-x-3 p-3 bg-brand-purple/10 rounded-lg">
                <Activity className="h-5 w-5 text-brand-purple flex-shrink-0" />
                <span className="text-gray-700 text-sm font-medium">{test}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 bg-brand-purple rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Precios y Enfoque Solidario</h3>
          <p className="text-white/90 mb-6 max-w-3xl mx-auto text-justify">
            En CardioCentro Cuenca comprendemos la importancia de garantizar el acceso a la salud cardiovascular con calidad y sensibilidad social.
            Nuestros precios se adaptan a convenios con aseguradoras, empresas y programas institucionales. Contamos con un área de trabajo social
            que evalúa casos clínicos de pacientes con recursos limitados, facilitando el acceso a medicina solidaria como parte fundamental de nuestra misión.
            Se ofrecen opciones flexibles y asesoría para que más personas puedan acceder a atención médica especializada sin barreras.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Badge variant="secondary" className="bg-white/20 text-white hover:bg-white/30">
              Convenios con aseguradoras
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white hover:bg-white/30">
              Programas institucionales
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white hover:bg-white/30">
              Opciones flexibles
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white hover:bg-white/30">
              Medicina solidaria
            </Badge>
          </div>
        </div>
      </div>
    </section>
  )
}
