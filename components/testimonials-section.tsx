import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Quote } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "María González",
      age: "65 años",
      condition: "Fibrilación Auricular",
      testimonial:
        "El Dr. y su equipo me salvaron la vida. Después del implante de marcapasos, mi calidad de vida mejoró completamente. La atención fue excepcional desde el primer día.",
      rating: 5,
    },
    {
      name: "Carlos Mendoza",
      age: "52 años",
      condition: "Hipertensión",
      testimonial:
        "Excelente atención médica. El seguimiento personalizado y la explicación detallada de mi tratamiento me dieron mucha confianza. Recomiendo CardioCentro al 100%.",
      rating: 5,
    },
    {
      name: "Ana Rodríguez",
      age: "45 años",
      condition: "Arritmias",
      testimonial:
        "Llegué muy preocupada por mis síntomas. El equipo médico fue muy profesional y humano. Los estudios fueron precisos y el tratamiento efectivo. Gracias por cuidar mi corazón.",
      rating: 5,
    },
    {
      name: "Roberto Silva",
      age: "38 años",
      condition: "Cardiología Preventiva",
      testimonial:
        "Como ejecutivo, necesitaba un centro médico confiable para mis chequeos. CardioCentro ofrece tecnología de punta y un trato personalizado. Excelente inversión en mi salud.",
      rating: 5,
    },
    {
      name: "Elena Vásquez",
      age: "70 años",
      condition: "Insuficiencia Cardíaca",
      testimonial:
        "A mi edad, encontrar médicos que te traten con paciencia y cariño es invaluable. Aquí me siento como en familia. Mi corazón está en las mejores manos.",
      rating: 5,
    },
    {
      name: "Diego Morales",
      age: "29 años",
      condition: "Cardiopatía Congénita",
      testimonial:
        "Desde niño he tenido problemas cardíacos. En CardioCentro encontré especialistas que entienden mi condición. El seguimiento ha sido excepcional y me siento seguro.",
      rating: 5,
    },
  ]

  return (
    <section id="testimonios" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-brand-purple/10 text-brand-purple hover:bg-brand-purple/20">Testimonios Reales</Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Lo que Dicen Nuestros Pacientes</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            La confianza de nuestros pacientes es nuestro mayor logro. Conoce las experiencias de quienes han confiado
            en nosotros para el cuidado de su corazón.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
            >
              <div className="absolute top-4 right-4 text-brand-purple/20">
                <Quote className="h-8 w-8" />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>

                <p className="text-gray-700 mb-6 italic leading-relaxed">"{testimonial.testimonial}"</p>

                <div className="border-t pt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.age}</p>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {testimonial.condition}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-gray-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Reconocimiento por Calidad Humana</h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            Nuestro compromiso va más allá de la medicina. Nos enorgullece el reconocimiento por nuestra calidad humana,
            enfoque ético y atención centrada en el paciente.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge className="bg-brand-purple/10 text-brand-purple hover:bg-brand-purple/20">Atención Personalizada</Badge>
            <Badge className="bg-brand-magenta/10 text-brand-magenta hover:bg-brand-magenta/20">Enfoque Ético</Badge>
            <Badge className="bg-brand-purple/10 text-brand-purple hover:bg-brand-purple/20">Calidad Humana</Badge>
            <Badge className="bg-brand-magenta/10 text-brand-magenta hover:bg-brand-magenta/20">Medicina Solidaria</Badge>
          </div>
        </div>
      </div>
    </section>
  )
}
