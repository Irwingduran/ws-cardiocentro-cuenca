"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"

interface LegalModalProps {
  isOpen: boolean
  onClose: () => void
  type: "privacy" | "terms"
}

export function LegalModal({ isOpen, onClose, type }: LegalModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[80vh]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            {type === "privacy" ? "Aviso de Privacidad" : "Términos y Condiciones"}
          </DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-[60vh] pr-4">
          {type === "privacy" ? <PrivacyContent /> : <TermsContent />}
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}

function PrivacyContent() {
  return (
    <div className="space-y-6 text-gray-700">
      <section>
        <h3 className="text-xl font-semibold text-gray-900 mb-3">Aviso de Privacidad</h3>
        <p className="leading-relaxed mb-4">
          En CardioCentro Cuenca garantizamos la privacidad de la información médica y personal de nuestros
          pacientes. Los datos son tratados de manera confidencial y utilizados únicamente con fines clínicos y
          administrativos, conforme a la normativa ecuatoriana de protección de datos personales.
        </p>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Información de la Empresa</h3>
        <div className="bg-blue-50 p-4 rounded-lg space-y-2">
          <p className="font-semibold text-gray-900">CORPCARDIOCUENCA S.A.S</p>
          <p>RUC: 0195156001001</p>
          <p>Dirección: Gonzalo Cordero s/n César Dávila Andrade, Cuenca, Ecuador</p>
          <p>Teléfono: 0989898747</p>
          <p>Email: cardiocentro.cue@outlook.es</p>
        </div>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Recopilación de Datos</h3>
        <p className="leading-relaxed mb-4">
          Recopilamos información personal necesaria para brindar servicios médicos de calidad, incluyendo:
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>Datos de identificación (nombre, cédula, fecha de nacimiento)</li>
          <li>Información de contacto (teléfono, email, dirección)</li>
          <li>Historia clínica y datos médicos</li>
          <li>Información de seguros o convenios médicos</li>
        </ul>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Uso de la Información</h3>
        <p className="leading-relaxed mb-4">
          La información recopilada se utiliza exclusivamente para:
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>Brindar atención médica y seguimiento clínico</li>
          <li>Mantener registros médicos actualizados</li>
          <li>Coordinar con aseguradoras o instituciones de salud</li>
          <li>Comunicar resultados, citas o información relevante</li>
          <li>Cumplir con obligaciones legales y regulatorias</li>
        </ul>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Protección de Datos</h3>
        <p className="leading-relaxed">
          Implementamos medidas de seguridad técnicas y organizativas para proteger sus datos contra acceso no
          autorizado, pérdida o alteración. El acceso a la información está limitado al personal autorizado que
          requiere conocer estos datos para cumplir con sus funciones profesionales.
        </p>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Derechos del Paciente</h3>
        <p className="leading-relaxed mb-4">
          De acuerdo con la normativa ecuatoriana, usted tiene derecho a:
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>Acceder a su información personal</li>
          <li>Solicitar corrección de datos incorrectos</li>
          <li>Solicitar la eliminación de datos (sujeto a obligaciones legales)</li>
          <li>Oponerse al tratamiento de sus datos en ciertas circunstancias</li>
          <li>Recibir una copia de su información</li>
        </ul>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Contacto</h3>
        <p className="leading-relaxed">
          Para ejercer sus derechos o realizar consultas sobre el tratamiento de sus datos personales, puede
          contactarnos a través de cardiocentro.cue@outlook.es o llamando al 0989898747.
        </p>
      </section>

      <section className="border-t pt-4 mt-6">
        <p className="text-sm text-gray-600 italic">
          Última actualización: {new Date().toLocaleDateString("es-EC", { year: "numeric", month: "long" })}
        </p>
      </section>
    </div>
  )
}

function TermsContent() {
  return (
    <div className="space-y-6 text-gray-700">
      <section>
        <h3 className="text-xl font-semibold text-gray-900 mb-3">Términos y Condiciones</h3>
        <p className="leading-relaxed mb-4">
          Este sitio web es informativo y no reemplaza una consulta médica presencial. CardioCentro Cuenca se
          reserva el derecho de modificar contenidos, servicios o precios sin previo aviso. Para atención
          personalizada, comuníquese directamente con nuestro equipo.
        </p>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Información de la Empresa</h3>
        <div className="bg-blue-50 p-4 rounded-lg space-y-2">
          <p className="font-semibold text-gray-900">CORPCARDIOCUENCA S.A.S</p>
          <p>RUC: 0195156001001</p>
          <p>Dirección: Gonzalo Cordero s/n César Dávila Andrade, Cuenca, Ecuador</p>
          <p>Teléfono: 0989898747</p>
          <p>Email: cardiocentro.cue@outlook.es</p>
        </div>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-gray-900 mb-3">1. Aceptación de Términos</h3>
        <p className="leading-relaxed">
          Al acceder y utilizar este sitio web, usted acepta estar sujeto a estos términos y condiciones de uso.
          Si no está de acuerdo con alguna parte de estos términos, no debe utilizar nuestro sitio web.
        </p>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-gray-900 mb-3">2. Uso del Sitio Web</h3>
        <p className="leading-relaxed mb-4">
          Este sitio web tiene propósitos informativos y educativos sobre nuestros servicios de cardiología:
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>La información proporcionada no constituye asesoramiento médico profesional</li>
          <li>No reemplaza una consulta, diagnóstico o tratamiento médico presencial</li>
          <li>Siempre debe consultar a un profesional de la salud para cualquier condición médica</li>
          <li>No tome decisiones sobre tratamientos basándose únicamente en la información del sitio</li>
        </ul>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-gray-900 mb-3">3. Servicios y Precios</h3>
        <p className="leading-relaxed">
          Los servicios y precios publicados en este sitio están sujetos a disponibilidad y pueden cambiar sin
          previo aviso. Para información actualizada sobre costos y disponibilidad de servicios, contacte
          directamente con nuestro centro. Los precios pueden variar según convenios con aseguradoras o programas
          institucionales.
        </p>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-gray-900 mb-3">4. Propiedad Intelectual</h3>
        <p className="leading-relaxed">
          Todo el contenido de este sitio web, incluyendo textos, gráficos, logos, imágenes y software, es
          propiedad de CORPCARDIOCUENCA S.A.S o de sus proveedores de contenido y está protegido por las leyes de
          propiedad intelectual ecuatorianas e internacionales.
        </p>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-gray-900 mb-3">5. Enlaces a Terceros</h3>
        <p className="leading-relaxed">
          Nuestro sitio puede contener enlaces a sitios web de terceros. Estos enlaces se proporcionan únicamente
          para su conveniencia. No tenemos control sobre el contenido de esos sitios y no somos responsables de su
          contenido o prácticas de privacidad.
        </p>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-gray-900 mb-3">6. Limitación de Responsabilidad</h3>
        <p className="leading-relaxed mb-4">
          CardioCentro Cuenca no será responsable por:
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>Daños derivados del uso o imposibilidad de uso del sitio web</li>
          <li>Interrupciones o errores en el funcionamiento del sitio</li>
          <li>Decisiones médicas tomadas basándose únicamente en información del sitio</li>
          <li>Inexactitudes u omisiones en el contenido del sitio</li>
        </ul>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-gray-900 mb-3">7. Modificaciones</h3>
        <p className="leading-relaxed">
          Nos reservamos el derecho de modificar estos términos y condiciones en cualquier momento. Las
          modificaciones entrarán en vigor inmediatamente después de su publicación en el sitio web. Es su
          responsabilidad revisar periódicamente estos términos.
        </p>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-gray-900 mb-3">8. Legislación Aplicable</h3>
        <p className="leading-relaxed">
          Estos términos y condiciones se rigen por las leyes de la República del Ecuador. Cualquier disputa
          relacionada con estos términos estará sujeta a la jurisdicción exclusiva de los tribunales competentes
          de Cuenca, Ecuador.
        </p>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-gray-900 mb-3">9. Contacto</h3>
        <p className="leading-relaxed">
          Para preguntas sobre estos términos y condiciones, puede contactarnos:
        </p>
        <ul className="list-none space-y-2 ml-4 mt-2">
          <li>Email: cardiocentro.cue@outlook.es</li>
          <li>Teléfono: 0989898747</li>
          <li>Dirección: Gonzalo Cordero s/n César Dávila Andrade, Cuenca, Ecuador</li>
        </ul>
      </section>

      <section className="border-t pt-4 mt-6">
        <p className="text-sm text-gray-600 italic">
          Última actualización: {new Date().toLocaleDateString("es-EC", { year: "numeric", month: "long" })}
        </p>
      </section>
    </div>
  )
}
