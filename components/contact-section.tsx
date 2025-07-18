import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { MapPin, Phone, Mail, Clock, Calendar, MessageCircle, Heart, Shield } from "lucide-react"

export function ContactSection() {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Ubicación",
      details: ["Av. Principal 123", "Cuenca, Ecuador"],
      color: "bg-red-100 text-red-600",
    },
    {
      icon: Phone,
      title: "Teléfono",
      details: ["+593 7 XXX-XXXX", "+593 9XX-XXX-XXX"],
      color: "bg-green-100 text-green-600",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@cardiocentrocuenca.com", "citas@cardiocentrocuenca.com"],
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: Clock,
      title: "Horarios",
      details: ["Lun - Vie: 8:00 - 18:00", "Sáb: 8:00 - 14:00"],
      color: "bg-purple-100 text-purple-600",
    },
  ]

  const services = [
    {
      icon: Calendar,
      title: "Citas Programadas",
      description: "Agenda tu consulta con anticipación",
    },
    {
      icon: MessageCircle,
      title: "Consulta WhatsApp",
      description: "Atención rápida por mensajería",
    },
    {
      icon: Heart,
      title: "Emergencias",
      description: "Atención inmediata 24/7",
    },
    {
      icon: Shield,
      title: "Seguros",
      description: "Convenios con aseguradoras",
    },
  ]

  return (
    <section id="contacto" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-indigo-100 text-indigo-800 hover:bg-indigo-100">Contáctanos</Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Estamos Aquí para Ayudarte</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tu salud cardiovascular es nuestra prioridad. Contáctanos para agendar tu consulta o resolver cualquier duda
            sobre nuestros servicios especializados.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">Solicita tu Consulta</CardTitle>
                <p className="text-gray-600">
                  Completa el formulario y nos pondremos en contacto contigo a la brevedad
                </p>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Nombre Completo *</label>
                      <Input placeholder="Tu nombre completo" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Teléfono *</label>
                      <Input placeholder="Tu número de teléfono" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                      <Input type="email" placeholder="tu@email.com" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Edad</label>
                      <Input placeholder="Tu edad" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Servicio de Interés</label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option value="">Selecciona un servicio</option>
                      <option value="cardiologia-clinica">Cardiología Clínica</option>
                      <option value="electrofisiologia">Electrofisiología</option>
                      <option value="marcapasos">Implante de Marcapasos</option>
                      <option value="estudios-diagnosticos">Estudios Diagnósticos</option>
                      <option value="medicina-integral">Medicina Integral</option>
                      <option value="salud-ocupacional">Salud Ocupacional</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Mensaje</label>
                    <Textarea placeholder="Describe brevemente tu consulta o síntomas..." rows={4} />
                  </div>

                  <div className="flex items-start space-x-2">
                    <input type="checkbox" className="mt-1" />
                    <p className="text-sm text-gray-600">
                      Acepto los términos y condiciones y autorizo el tratamiento de mis datos personales conforme a la
                      normativa ecuatoriana de protección de datos.
                    </p>
                  </div>

                  <Button
                    size="lg"
                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
                  >
                    Enviar Solicitud
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-full ${info.color}`}>
                      <info.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">{info.title}</h3>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-gray-600 text-sm">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Quick Services */}
            <Card className="bg-gradient-to-br from-blue-600 to-cyan-600 text-white">
              <CardHeader>
                <CardTitle className="text-lg">Servicios Rápidos</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="bg-white/20 p-2 rounded-full">
                        <service.icon className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="font-medium text-sm">{service.title}</p>
                        <p className="text-blue-100 text-xs">{service.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Privacy Notice */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Aviso de Privacidad</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                En CardioCentro Cuenca garantizamos la privacidad de la información médica y personal de nuestros
                pacientes. Los datos son tratados de manera confidencial y utilizados únicamente con fines clínicos y
                administrativos, conforme a la normativa ecuatoriana de protección de datos personales.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Términos y Condiciones</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Este sitio web es informativo y no reemplaza una consulta médica presencial. CardioCentro Cuenca se
                reserva el derecho de modificar contenidos, servicios o precios sin previo aviso. Para atención
                personalizada, comuníquese directamente con nuestro equipo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
