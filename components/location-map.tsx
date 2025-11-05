"use client"

import { MapPin } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function LocationMap() {
  return (
    <Card className="shadow-xl overflow-hidden">
      <CardHeader>
        <CardTitle className="text-2xl text-gray-900 flex items-center gap-2">
          <MapPin className="h-6 w-6 text-blue-600" />
          Nuestra Ubicación
        </CardTitle>
        <p className="text-gray-600">
          Gonzalo Cordero s/n César Dávila Andrade, Cuenca, Ecuador
        </p>
      </CardHeader>
      <CardContent className="p-0">
        <div className="relative w-full h-[450px] bg-gray-100">
          <iframe
            src="https://embed.waze.com/iframe?zoom=16&lat=-2.906233&lon=-79.013628&ct=livemap"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Ubicación CardioCentro Cuenca - Waze"
            className="absolute inset-0"
          ></iframe>
        </div>
        <div className="p-4 bg-blue-50">
          <div className="flex items-start gap-3">
            <MapPin className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
            <div>
              <p className="font-semibold text-gray-900">¿Cómo llegar?</p>
              <p className="text-sm text-gray-600 mt-1">
                Estamos ubicados en Gonzalo Cordero s/n César Dávila Andrade, en la ciudad de Cuenca.
                Puedes usar Waze o Google Maps para obtener direcciones desde tu ubicación.
              </p>
              <div className="flex flex-wrap gap-3 mt-3">
                <a
                  href="https://waze.com/ul?ll=-2.906233,-79.013628&navigate=yes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors"
                >
                  <MapPin className="h-4 w-4" />
                  Abrir en Waze
                </a>
                <a
                  href="https://maps.google.com/?q=-2.906233,-79.013628"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors"
                >
                  <MapPin className="h-4 w-4" />
                  Abrir en Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
