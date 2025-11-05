"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"
import { useRef } from "react"

export function EducationSection() {
  const plugin = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  )

  // Array de imágenes para el carrusel
  // Puedes añadir más imágenes aquí agregando elementos al array
  const educationImages = [
    {
      src: "/img/edu-continua.jpeg",
      alt: "Educación Continua CardioCentro Cuenca",
      title: "Programas de Educación Continua",
    },
    // Añade más imágenes aquí siguiendo el mismo formato:
    // {
    //   src: "/img/edu-continua-2.jpeg",
    //   alt: "Descripción de la imagen",
    //   title: "Título opcional",
    // },
  ]

  return (
    <section id="educacion" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-brand-purple/10 text-brand-purple hover:bg-brand-purple/20">
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

        {/* Carousel de Imágenes */}
        <div className="max-w-6xl mx-auto mb-12">
          <Carousel
            plugins={[plugin.current]}
            className="w-full"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent>
              {educationImages.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="relative w-full bg-transparent rounded-2xl overflow-hidden shadow-2xl p-4">
                    <div className="relative w-full aspect-[16/9]">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-contain"
                        priority={index === 0}
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
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
              className="bg-brand-magenta hover:bg-brand-magenta-dark text-white"
              asChild
            >
              <a href="https://wa.me/593989898747?text=Hola,%20quiero%20información%20sobre%20cursos%20de%20educación%20continua" target="_blank" rel="noopener noreferrer">
                Consultar por WhatsApp
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-brand-purple text-brand-purple hover:bg-brand-purple hover:text-white" asChild>
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
