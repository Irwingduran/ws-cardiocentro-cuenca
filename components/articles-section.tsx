import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight, Heart, Activity, Shield } from "lucide-react"
import Image from "next/image"

export function ArticlesSection() {
  const articles = [
    {
      title: "Prevención de Enfermedades Cardiovasculares: Guía Completa",
      excerpt:
        "Descubre las mejores estrategias para mantener tu corazón saludable y prevenir enfermedades cardiovasculares a través de hábitos de vida saludables.",
      category: "Prevención",
      readTime: "5 min",
      date: "15 Dic 2024",
      image: "/placeholder.svg?height=200&width=300",
      icon: Heart,
    },
    {
      title: "Arritmias Cardíacas: Síntomas y Tratamientos Modernos",
      excerpt:
        "Todo lo que necesitas saber sobre las arritmias cardíacas, desde los síntomas más comunes hasta los tratamientos más avanzados disponibles.",
      category: "Electrofisiología",
      readTime: "7 min",
      date: "10 Dic 2024",
      image: "/placeholder.svg?height=200&width=300",
      icon: Activity,
    },
    {
      title: "Marcapasos: Vida Normal Después del Implante",
      excerpt:
        "Conoce cómo es la vida después del implante de un marcapasos y qué cuidados especiales debes tener para mantener una vida plena y activa.",
      category: "Dispositivos",
      readTime: "6 min",
      date: "5 Dic 2024",
      image: "/placeholder.svg?height=200&width=300",
      icon: Shield,
    },
  ]

  const categories = [
    { name: "Prevención", count: 12, color: "bg-brand-magenta/10 text-brand-magenta" },
    { name: "Electrofisiología", count: 8, color: "bg-brand-purple/10 text-brand-purple" },
    { name: "Dispositivos", count: 6, color: "bg-brand-magenta/10 text-brand-magenta" },
    { name: "Nutrición", count: 10, color: "bg-brand-purple/10 text-brand-purple" },
    { name: "Ejercicio", count: 7, color: "bg-brand-magenta/10 text-brand-magenta" },
  ]

  return (
    <section id="articulos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-brand-purple/10 text-brand-purple hover:bg-brand-purple/20">Educación en Salud</Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Artículos y Recursos</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mantente informado sobre salud cardiovascular con nuestros artículos especializados, escritos por nuestro
            equipo médico para ayudarte a cuidar tu corazón.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Articles */}
          <div className="lg:col-span-3">
            <div className="grid md:grid-cols-2 lg:grid-cols-1 gap-8">
              {articles.map((article, index) => (
                <Card
                  key={index}
                  className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                >
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <Image
                        src={article.image || "/placeholder.svg"}
                        alt={article.title}
                        width={300}
                        height={200}
                        className="w-full h-48 md:h-full object-cover"
                      />
                    </div>
                    <div className="md:w-2/3">
                      <CardHeader>
                        <div className="flex items-center justify-between mb-2">
                          <Badge
                            className={`${
                              article.category === "Prevención"
                                ? "bg-brand-magenta/10 text-brand-magenta"
                                : article.category === "Electrofisiología"
                                  ? "bg-brand-purple/10 text-brand-purple"
                                  : "bg-brand-magenta/10 text-brand-magenta"
                            } hover:bg-current`}
                          >
                            <article.icon className="h-3 w-3 mr-1" />
                            {article.category}
                          </Badge>
                        </div>
                        <CardTitle className="text-xl text-gray-900 leading-tight">{article.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 mb-4 leading-relaxed">{article.excerpt}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <div className="flex items-center">
                              <Calendar className="h-4 w-4 mr-1" />
                              {article.date}
                            </div>
                            <div className="flex items-center">
                              <Clock className="h-4 w-4 mr-1" />
                              {article.readTime}
                            </div>
                          </div>
                          <Button variant="ghost" size="sm" className="text-brand-magenta hover:text-brand-magenta-dark">
                            Leer más
                            <ArrowRight className="h-4 w-4 ml-1" />
                          </Button>
                        </div>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button size="lg" variant="outline">
                Ver Todos los Artículos
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Categories */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Categorías</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {categories.map((category, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-gray-700">{category.name}</span>
                      <Badge className={category.color}>{category.count}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Newsletter */}
            <Card className="bg-brand-purple text-white">
              <CardHeader>
                <CardTitle className="text-lg">Boletín de Salud</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/90 mb-4 text-sm">
                  Recibe consejos de salud cardiovascular directamente en tu correo.
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Tu correo electrónico"
                    className="w-full px-3 py-2 rounded-lg text-gray-900 text-sm"
                  />
                  <Button className="w-full bg-white text-brand-purple hover:bg-gray-100">Suscribirse</Button>
                </div>
              </CardContent>
            </Card>

            {/* Quick Tips */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Consejos Rápidos</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="bg-brand-magenta/10 p-1 rounded-full mt-1">
                      <Heart className="h-3 w-3 text-brand-magenta" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Ejercicio Regular</p>
                      <p className="text-xs text-gray-600">30 minutos diarios de actividad física</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-brand-purple/10 p-1 rounded-full mt-1">
                      <Shield className="h-3 w-3 text-brand-purple" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Controla tu Presión</p>
                      <p className="text-xs text-gray-600">Monitoreo regular de la presión arterial</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-brand-magenta/10 p-1 rounded-full mt-1">
                      <Activity className="h-3 w-3 text-brand-magenta" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Dieta Saludable</p>
                      <p className="text-xs text-gray-600">Rica en frutas, verduras y omega-3</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
