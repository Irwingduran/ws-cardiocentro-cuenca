import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BookOpen, GraduationCap, Calendar, Users, Award, Clock } from "lucide-react"

export function EducationSection() {
  const courses = [
    {
      title: "Curso de Electrocardiografía Básica",
      description: "Aprende a interpretar electrocardiogramas con expertos en cardiología.",
      duration: "8 horas",
      level: "Básico",
      icon: BookOpen,
      status: "Próximamente",
    },
    {
      title: "Manejo de Arritmias en Atención Primaria",
      description: "Identificación y manejo inicial de las arritmias más comunes en el consultorio.",
      duration: "12 horas",
      level: "Intermedio",
      icon: GraduationCap,
      status: "Próximamente",
    },
    {
      title: "Actualización en Insuficiencia Cardíaca",
      description: "Últimas guías y protocolos en el tratamiento de la insuficiencia cardíaca.",
      duration: "6 horas",
      level: "Avanzado",
      icon: Award,
      status: "Próximamente",
    },
  ]

  const features = [
    {
      icon: Users,
      title: "Instructores Expertos",
      description: "Cardiólogos con años de experiencia clínica y docente",
    },
    {
      icon: Calendar,
      title: "Horarios Flexibles",
      description: "Modalidad presencial y virtual según disponibilidad",
    },
    {
      icon: Award,
      title: "Certificación",
      description: "Certificados avalados por instituciones reconocidas",
    },
    {
      icon: Clock,
      title: "Material Incluido",
      description: "Recursos didácticos y material de estudio completo",
    },
  ]

  return (
    <section id="educacion" className="py-20 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-indigo-100 text-indigo-800 hover:bg-indigo-100">
            Educación Continua
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Cursos y Capacitaciones
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-justify">
            Compartimos nuestro conocimiento a través de cursos especializados para profesionales de la salud y
            público en general interesado en aprender sobre salud cardiovascular.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {courses.map((course, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-3 rounded-full">
                    <course.icon className="h-6 w-6 text-white" />
                  </div>
                  <Badge className="bg-yellow-100 text-yellow-800">{course.status}</Badge>
                </div>
                <CardTitle className="text-xl text-gray-900">{course.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4 text-justify">{course.description}</p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-700">
                    <Clock className="h-4 w-4 mr-2 text-blue-600" />
                    <span>Duración: {course.duration}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <GraduationCap className="h-4 w-4 mr-2 text-blue-600" />
                    <span>Nivel: {course.level}</span>
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700" asChild>
                  <a href="https://wa.me/593989898747?text=Hola,%20me%20interesa%20información%20sobre%20los%20cursos" target="_blank" rel="noopener noreferrer">
                    Más Información
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-3 rounded-full w-fit mx-auto mb-4">
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            ¿Interesado en nuestros cursos?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto text-justify">
            Contáctanos para recibir información detallada sobre próximas fechas, modalidades de inscripción y
            contenido de los cursos. Mantente actualizado en las últimas tendencias en cardiología.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
              asChild
            >
              <a href="https://wa.me/593989898747?text=Hola,%20quiero%20información%20sobre%20cursos%20de%20educación%20continua" target="_blank" rel="noopener noreferrer">
                Consultar por WhatsApp
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="mailto:cardiocentro.cue@outlook.es?subject=Información sobre cursos">
                Enviar Email
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
