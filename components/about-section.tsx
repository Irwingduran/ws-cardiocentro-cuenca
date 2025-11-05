import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Award, Heart, Globe } from "lucide-react"

export function AboutSection() {
  const achievements = [
    {
      icon: Users,
      title: "Miles de Pacientes",
      description: "Atención a miles de pacientes con enfermedades cardíacas y metabólicas complejas durante más de 10 años",
    },
    {
      icon: Award,
      title: "Certificaciones Oficiales",
      description: "Títulos universitarios y especializaciones registrados ante SENESCYT y validados por el Ministerio de Salud Pública del Ecuador",
    },
    {
      icon: Heart,
      title: "Especialización Destacada",
      description: "Experiencia destacada en el diagnóstico de arritmias, implante y seguimiento de marcapasos",
    },
    {
      icon: Globe,
      title: "Reconocimiento Internacional",
      description: "Participación en congresos científicos y afiliación activa a sociedades científicas nacionales e internacionales",
    },
  ]

  const certifications = [
    "SENESCYT - Secretaría de Educación Superior, Ciencia, Tecnología e Innovación",
    "Ministerio de Salud Pública del Ecuador",
    "ACESS - Agencia de Aseguramiento de la Calidad de los Servicios de Salud y Medicina Prepagada",
    "Sociedad Ecuatoriana de Electrofisiología y Estimulación Cardíaca (SEDEC)",
    "Sociedad Mexicana de Electrofisiología y Estimulación Cardíaca (SOMEEC)",
    "Latin American Heart Rhythm Society (LAHRS)",
  ]

  return (
    <section id="experiencia" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-brand-purple/10 text-brand-purple hover:bg-brand-purple/20">Más de 10 años de experiencia</Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Experiencia y Certificaciones</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-justify">
            Nuestro equipo multidisciplinario cuenta con formación nacional e internacional, reconocido por la calidad
            humana, el enfoque ético y la atención centrada en el paciente.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="bg-brand-magenta p-3 rounded-full w-fit mx-auto mb-4">
                  <achievement.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{achievement.title}</h3>
                <p className="text-gray-600 text-sm text-justify">{achievement.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Certificaciones y Afiliaciones</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="bg-brand-purple p-1 rounded-full">
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
