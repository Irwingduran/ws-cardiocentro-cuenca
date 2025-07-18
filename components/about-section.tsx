import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Award, Heart, Globe } from "lucide-react"

export function AboutSection() {
  const achievements = [
    {
      icon: Users,
      title: "Miles de Pacientes",
      description: "Atención a miles de pacientes con enfermedades cardíacas y metabólicas complejas",
    },
    {
      icon: Award,
      title: "Certificaciones",
      description: "Títulos registrados ante SENESCYT y validados por el Ministerio de Salud Pública",
    },
    {
      icon: Heart,
      title: "Especialización",
      description: "Experiencia destacada en diagnóstico de arritmias y seguimiento de marcapasos",
    },
    {
      icon: Globe,
      title: "Reconocimiento Internacional",
      description: "Afiliación a sociedades científicas nacionales e internacionales",
    },
  ]

  const certifications = [
    "Sociedad Ecuatoriana de Electrofisiología y Estimulación Cardíaca (SEDEC)",
    "Sociedad Mexicana de Electrofisiología y Estimulación Cardíaca (SOMEEC)",
    "Latin American Heart Rhythm Society (LAHRS)",
    "Registro sanitario vigente ante ACESS",
  ]

  return (
    <section id="experiencia" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">Más de 10 años de experiencia</Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Experiencia y Certificaciones</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nuestro equipo multidisciplinario cuenta con formación nacional e internacional, reconocido por la calidad
            humana y el enfoque ético centrado en el paciente.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-3 rounded-full w-fit mx-auto mb-4">
                  <achievement.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{achievement.title}</h3>
                <p className="text-gray-600 text-sm">{achievement.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Afiliaciones Científicas</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="bg-blue-600 p-1 rounded-full">
                  <Award className="h-4 w-4 text-white" />
                </div>
                <span className="text-gray-700">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
