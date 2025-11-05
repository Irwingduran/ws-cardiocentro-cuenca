import { Button } from "@/components/ui/button"
import { Heart, Shield, Users, Award } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section id="inicio" className="pt-16 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Cuidado Integral del
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                  {" "}
                  Corazón
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed text-justify">
                Centro médico altamente especializado en el cuidado integral del corazón. Nuestro enfoque se basa en la
                excelencia clínica, la medicina personalizada y la prevención. Contamos con especialistas en cardiología
                clínica, electrofisiología, cirugía cardiovascular, y un equipo complementario multidisciplinario.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
                asChild
              >
                <a href="https://wa.me/593989898747?text=Hola,%20me%20gustaría%20agendar%20una%20consulta" target="_blank" rel="noopener noreferrer">
                  Agendar Consulta
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#servicios">
                  Conocer Servicios
                </a>
              </Button>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
              <div className="text-center">
                <div className="bg-blue-100 p-3 rounded-full w-fit mx-auto mb-2">
                  <Heart className="h-6 w-6 text-blue-600" />
                </div>
                <p className="text-sm font-medium text-gray-900">Cardiología Clínica</p>
              </div>
              <div className="text-center">
                <div className="bg-cyan-100 p-3 rounded-full w-fit mx-auto mb-2">
                  <Shield className="h-6 w-6 text-cyan-600" />
                </div>
                <p className="text-sm font-medium text-gray-900">Electrofisiología</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 p-3 rounded-full w-fit mx-auto mb-2">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
                <p className="text-sm font-medium text-gray-900">Equipo Multidisciplinario</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 p-3 rounded-full w-fit mx-auto mb-2">
                  <Award className="h-6 w-6 text-purple-600" />
                </div>
                <p className="text-sm font-medium text-gray-900">Medicina Solidaria</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <Image
                src="/placeholder.svg?height=600&width=500"
                alt="CardioCentro Cuenca - Equipo médico especializado"
                width={500}
                height={600}
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
