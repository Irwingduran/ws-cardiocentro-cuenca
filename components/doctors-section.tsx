"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { User, Award, Briefcase, FileText, ChevronRight } from "lucide-react"
import Image from "next/image"

interface Doctor {
  name: string
  specialty: string
  subspecialty?: string
  image?: string
  biography: string
  certifications: string
  experience: string
  cases: string
}

export function DoctorsSection() {
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const doctors: Doctor[] = [
    {
      name: "Dr. Mario Arévalo Pérez",
      specialty: "Cardiología",
      subspecialty: "Electrofisiología Cardíaca",
      biography: "El Dr. Mario Arevalo es un médico cardiólogo. Se graduó en Medicina en la Universidad Catolica de Cuenca en 2010 y posteriormente completó su especialidad en Cardiología en la universidad Favaloro y sub especialidad en Electrofisiologia Cardiaca en la Universidad de Buenos Aires (UBA). Desde entonces, ha trabajado tanto en el ámbito hospitalario como en consulta privada, enfocándose en la prevención, el manejo de la hipertensión arterial, enfermedades coronarias, Arritmias Cardiacas. También ha participado en diversos congresos nacionales e internacionales, y se mantiene actualizado con los últimos avances en cardiología. Actualmente, ejerce en la Ciudad de Cuenca y es reconocido por su trato cercano con los pacientes y su enfoque integral en el cuidado del corazón.",
      certifications: "Es miembro activo de varias sociedades profesionales, entre ellas: Sociedad Argentina de Cardiología, Sociedad Ecuatoriana de Electrofisiologia",
      experience: "Con más de 10 años de experiencia en el diagnóstico y tratamiento de enfermedades cardiovasculares.",
      cases: "A lo largo de su trayectoria como cardiólogo, el Dr. Mario Arevalo ha atendido con éxito una amplia variedad de casos clínicos, combinando experiencia, criterio diagnóstico y tecnología de vanguardia. Algunos de los principales casos que ha tratado incluyen: Hipertensión arterial resistente, Enfermedad coronaria, Arritmias cardíacas, Insuficiencia cardíaca crónica, Evaluación preoperatoria cardiovascular, Prevención cardiovascular en pacientes de alto riesgo."
    },
    {
      name: "Dra. Daysi Durán",
      specialty: "Endocrinología",
      subspecialty: "Implantación de Marcapasos y Ablación de Arritmias",
      image: "/doc/daisy-duran.jpeg",
      biography: "La Dra. Daysi Durán se graduó como medico general en la Universidad de Cuenca. Posteriormente completó su especialidad en Endocrinología en el Hospital Hermanos Amejeiras que es el centro de referencia a nivel nacional para el manejo de casos complejos en la Habana - Cuba.",
      certifications: "Sociedad Argentina de Lipidos. Manejo Interdisciplinario de la Obesidad por la Universidad de los Andes - Colombia y Novonordisk. Manejo integral de la obesidad por la Casa de la Diabetes núcleo Cuenca y el MSP del Ecuador. Curso de ecografia y procedimientos de tiroides y paratiroides por la universidad de los Andes - Colombia.",
      experience: "Con más de 10 años de experiencia en el diagnóstico y tratamiento de enfermedades metabólicas.",
      cases: "Actualmente, ejerce en la Ciudad de Cuenca es reconocido por su trato cercano con los pacientes y su enfoque integral en el cuidado de la salud. Diabetes Mellitus tipo 2 y tipo 1, Educación del paciente con diabetes, Diagnóstico y tratamiento de enfermedades tiroideas, Diagnóstico y tratamiento de nódulo y cáncer de tiroides, Obesidad, Alteraciones de los lípidos, Tumores hipofisarios, Hipertensión de causa endocrina, Enfermedades de la glandula adrenal, Trastornos gonadales, Enfermedades del metabolismo del calcio, Prevención de enfermedades metabólicas."
    },
    {
      name: "Dra. Verónica Idrovo",
      specialty: "Cardiología",
      biography: "Graduada como medico general por la universidad de Cuenca, con especialidad en cardiología clinica Universidad Guayaquil, Hospital Abel Gilbert Ponton, diplomatura en insuficiencia cardiaca por la universidad catolica de Argentina, diplomatura en ecocardiografia por la universidad espiritu santo.",
      certifications: "Titulo de Especialista en cardiología, diplomatura en insuficiencia cardiaca, diplomatura en ecocardiograma.",
      experience: "Mas de 5 años de experiencia en Cardiología.",
      cases: "Cuento con experiencia en servicios de hospitalización y consulta externa: Diagnostico y tratamiento de enfermedades cardiovasculares, Deteccion y tratamiento de riesgo cardiometabolico, Evaluacion preoperatoria, Electrocardiograma, Ecocardiograma transtoracico, Holter de ritmo, Monitoreo ambulatorio de presion arterial de 24 horas."
    },
    {
      name: "Dra. Jessica Coronel Zárate",
      specialty: "Cardiología Pediátrica",
      image: "/doc/jessica-coronel.jpeg",
      biography: "La Dra Jessica Coronel se médica que graduó en la Universidad de Cuenca, con especialidad en Pediatría en la Universidad de Cuenca, Hospital Vicente Corral Moscoso, con subespecialidad en Cardiología Pediátrica y alta especialidad en Ecocardiografía en el Instituto Nacional de Cardiología Ignacio Chávez en la ciudad de México con aval de la Universidad Autónoma de México (UNAM), encargado de la salud cardiovascular de los niños.",
      certifications: "Título de Especialista en Pediatría. Título de Subespecialista en Cardiología Pediátrica. Título de Alta especialidad en Ecocardiografía. Miembro activo de la Sociedad Ecuatoriana de Cardiología.",
      experience: "Con mas de 5 años de experiencia en el área pediátrica y 3 años en la rama de cardiología pediátrica.",
      cases: "La Dra. Jéssica Coronel con experiencia en el ámbito hospitalario tanto en el área de neonatología y cuidados intensivos cardiovasculares pediátricos y la atención en consulta externa. Control y seguimiento de niño sano, Diagnóstico y tratamiento de enfermedades pediátricas, Detección y tratamiento de cardiopatías congénitas, Diagnóstico y tratamiento de arritmias cardíacas pediátricas, Evaluación preoperatoria cardiovascular pediátrica, Estudios de imagen avanzada en ecocardiografía."
    },
    {
      name: "Dra. Kimberly Loayza Pelaez",
      specialty: "Nefrología",
      image: "/doc/kimberly-loaiza.jpeg",
      biography: "La Dra. Kimberly Loayza Pelaez es una médica nefrologa clinica. Se graduó de Medica en la Universidad de Cuenca en el 2014 y posteriormente realizo su especialidad en Medicina Interna en la Sociedad Argentina de Medicina Interna de Buenos Aires (SMIBA), realizando su subespecialidad en Nefrologia y medio interno en la Universidad de Buenos Aires (UBA) y sus practicas hospitalarias en el Hospital de Clinicas Jose de San Martin, con una maestria en Cuidados Paliativos en la Universidad del Salvador de Argentina.",
      certifications: "Es miembro activo de las sociedades profesionales: Sociedad Argentina de Nefrologia, Sociedad Ecuatoriana de Nefrologia",
      experience: "Con más de 5 años de experiencia en la prevención, diagnóstico y tratamiento de enfermedades cronicas, principalmente renales.",
      cases: "Hipertensión arterial secundaria, Diabetes Mellitus, Enfermedad renal, Litiasis renal, Infecciones del tracto urinario, Prevención cardiovascular en pacientes de alto riesgo."
    },
    {
      name: "Dra. Johanna García Tapia",
      specialty: "Neumología",
      image: "/doc/johanna-garcia.jpeg",
      biography: "La Dra. Johanna Verónica García Tapia es médica especialista en Neumología. Se graduó en Medicina en la Universidad de Cuenca (Ecuador) y obtuvo el título de especialista en Neumología avalado por el Ministerio de Salud de Argentina. Realizó prácticas hospitalarias en el Hospital Nacional Alejandro Posadas, centro de alta complejidad en Argentina.",
      certifications: "Título de Especialista en Neumología – Ministerio de Salud de Argentina. Perfeccionamiento en Medicina del Sueño. Actualización en Rehabilitación Respiratoria. Actualización en Hipertensión Pulmonar. Miembro activo de la Asociación Argentina de Medicina Respiratoria.",
      experience: "Especialista en Neumología con experiencia en Argentina y Ecuador.",
      cases: "EPOC, Asma bronquial, Enfermedades respiratorias agudas, Trastornos del sueño, Hipertensión pulmonar, Enfermedades pulmonares intersticiales, Broncoscopía diagnóstica y terapéutica, Espirometría y pruebas de función pulmonar."
    },
    {
      name: "Dra. Priscila Cisneros",
      specialty: "Geriatría y Gerontología",
      subspecialty: "Cuidados Paliativos",
      biography: "Médico General Graduada de la Universidad Católica de Cuenca, con 10 años de experiencia varia en Emergencias, Ginecología, Clínica, Cirugía, Ambulancia, Atención Pre Hospitalaria. Cursó la residencia de Geriatría y Gerontología y policlínico PAMI 1, por la Universidad Nacional de Rosario, terminándola en el 2019. Realizó una rotación por el Hospital Universitario de Chile en el Área de Geriatría.",
      certifications: "Medico Especialista en Geriatria y Gerontologia. Diplomado en Cuidados Paliativos. Curso de Psicogeriatría dictado por la Sociedad Argentina de Geriatría y Gerontología.",
      experience: "12 años de experiencia en medicina general y especializada en geriatría.",
      cases: "Atención integral del Adulto Mayor, cuidados paliativos, manejo del dolor, psicogeriatría, medicina interna."
    },
    {
      name: "Dra. Karla Peralta",
      specialty: "Medicina",
      subspecialty: "Nutrición, Obesidad y Suplementación",
      biography: "Médico de profesión, apasionada por acompañar a las personas en el cuidado integral de su salud. Cuenta con tres másteres: Máster en Obesidad y Comorbilidades, Máster en Nutrición y Dietética, Máster en Nutrición Deportiva (en curso). Además, cuenta con certificación ISAK Nivel 1 en evaluación antropométrica.",
      certifications: "Médico General – Registro SENESCYT. Máster en Obesidad y Comorbilidades. Máster en Nutrición y Dietética. Máster en Nutrición Deportiva (en curso). Certificación ISAK Nivel 1. Diplomado en Alimentación Consciente y Bondad Corporal.",
      experience: "Desde el año 2022, acompañando a pacientes en su camino hacia la salud y el bienestar a través de un enfoque médico–nutricional integral.",
      cases: "Remisión de enfermedades metabólicas, resistencia a la insulina, síndrome metabólico, hígado graso, diabetes tipo 2, pérdida de peso clínicamente significativa, aumento de masa muscular y rendimiento deportivo, prevención y control de comorbilidades."
    },
    {
      name: "Dr. Marcelo Puga",
      specialty: "Cardiología",
      subspecialty: "Electrofisiología Cardíaca",
      biography: "Médico cardiólogo y electrofisiólogo formado en la Universidad de Cuenca y especializado en el Instituto de Cardiología y Cirugía Cardiovascular de la Universidad de La Habana. Posteriormente realicé una alta especialidad en Electrofisiología Cardíaca en la Unidad de Arritmias del Hospital General de México 'Dr. Eduardo Liceaga' de la UNAM, y un Máster en Investigación en Salud por la Universidad de La Rioja en España.",
      certifications: "Sociedad Ecuatoriana de Cardiología, Sociedad Mexicana de Cardiología, Sociedad Mexicana de Electrofisiología y Estimulación Cardíaca (SOMEEC), Sociedad Ecuatoriana de Electrofisiología Cardíaca (SENEC), Latin American Heart Rhythm Society (LAHRS).",
      experience: "Más de 4 años de experiencia en cardiología y 3 años como electrofisiólogo, acompañando a pacientes en Ecuador y México.",
      cases: "Diagnóstico y tratamiento de arritmias, implante de marcapasos y desfibriladores, estudios electrofisiológicos y valoraciones integrales de riesgo."
    }
  ]

  const handleDoctorClick = (doctor: Doctor) => {
    setSelectedDoctor(doctor)
    setIsModalOpen(true)
  }

  const specialtyColors: { [key: string]: string } = {
    "Cardiología": "bg-brand-magenta/10 text-brand-magenta",
    "Endocrinología": "bg-brand-purple/10 text-brand-purple",
    "Nefrología": "bg-brand-magenta/10 text-brand-magenta",
    "Neumología": "bg-brand-purple/10 text-brand-purple",
    "Geriatría y Gerontología": "bg-brand-magenta/10 text-brand-magenta",
    "Medicina": "bg-brand-purple/10 text-brand-purple",
    "Cardiología Pediátrica": "bg-brand-magenta/10 text-brand-magenta",
  }

  return (
    <section id="equipo" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-brand-purple/10 text-brand-purple hover:bg-brand-purple/20">
            Nuestro Equipo Médico
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Especialistas de Alto Nivel
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-justify">
            Contamos con un equipo multidisciplinario de especialistas altamente calificados, comprometidos con brindar
            atención médica de excelencia y un trato humano cercano.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {doctors.map((doctor, index) => (
            <Card
              key={index}
              className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              onClick={() => handleDoctorClick(doctor)}
            >
              <CardContent className="p-6">
                <div className="flex items-start space-x-4 mb-4">
                  {doctor.image ? (
                    <div className="relative w-16 h-16 flex-shrink-0">
                      <Image
                        src={doctor.image}
                        alt={doctor.name}
                        fill
                        className="rounded-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="bg-brand-purple/10 p-3 rounded-full flex-shrink-0">
                      <User className="h-6 w-6 text-brand-purple" />
                    </div>
                  )}
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 text-lg mb-2">{doctor.name}</h3>
                    <Badge className={specialtyColors[doctor.specialty] || "bg-gray-100 text-gray-800"}>
                      {doctor.specialty}
                    </Badge>
                    {doctor.subspecialty && (
                      <p className="text-sm text-gray-600 mt-2">{doctor.subspecialty}</p>
                    )}
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {doctor.biography}
                </p>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-brand-magenta hover:text-brand-magenta-dark w-full"
                >
                  Ver Perfil Completo
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
          {selectedDoctor && (
            <>
              <DialogHeader>
                <div className="flex items-center space-x-4 mb-4">
                  {selectedDoctor.image ? (
                    <div className="relative w-20 h-20 flex-shrink-0">
                      <Image
                        src={selectedDoctor.image}
                        alt={selectedDoctor.name}
                        fill
                        className="rounded-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="bg-brand-purple/10 p-4 rounded-full">
                      <User className="h-8 w-8 text-brand-purple" />
                    </div>
                  )}
                  <div>
                    <DialogTitle className="text-2xl">{selectedDoctor.name}</DialogTitle>
                    <div className="mt-2">
                      <Badge className={specialtyColors[selectedDoctor.specialty] || "bg-gray-100 text-gray-800"}>
                        {selectedDoctor.specialty}
                      </Badge>
                      {selectedDoctor.subspecialty && (
                        <span className="block mt-2 text-brand-magenta font-medium text-sm">
                          {selectedDoctor.subspecialty}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </DialogHeader>

              <div className="space-y-6 mt-6">
                {/* Biografía */}
                <div>
                  <div className="flex items-center space-x-2 mb-3">
                    <FileText className="h-5 w-5 text-brand-purple" />
                    <h3 className="text-lg font-semibold text-gray-900">Biografía</h3>
                  </div>
                  <p className="text-gray-600 text-justify leading-relaxed">{selectedDoctor.biography}</p>
                </div>

                {/* Años de Experiencia */}
                <div>
                  <div className="flex items-center space-x-2 mb-3">
                    <Briefcase className="h-5 w-5 text-brand-magenta" />
                    <h3 className="text-lg font-semibold text-gray-900">Experiencia</h3>
                  </div>
                  <p className="text-gray-600 text-justify leading-relaxed">{selectedDoctor.experience}</p>
                </div>

                {/* Certificaciones */}
                <div>
                  <div className="flex items-center space-x-2 mb-3">
                    <Award className="h-5 w-5 text-brand-purple" />
                    <h3 className="text-lg font-semibold text-gray-900">Certificaciones y Afiliaciones</h3>
                  </div>
                  <p className="text-gray-600 text-justify leading-relaxed whitespace-pre-line">
                    {selectedDoctor.certifications}
                  </p>
                </div>

                {/* Casos Tratados */}
                <div>
                  <div className="flex items-center space-x-2 mb-3">
                    <FileText className="h-5 w-5 text-brand-magenta" />
                    <h3 className="text-lg font-semibold text-gray-900">Casos Tratados y Áreas de Enfoque</h3>
                  </div>
                  <p className="text-gray-600 text-justify leading-relaxed">{selectedDoctor.cases}</p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t">
                <Button
                  className="w-full bg-brand-magenta hover:bg-brand-magenta-dark text-white"
                  asChild
                >
                  <a href="https://wa.me/593989898747?text=Hola,%20me%20gustaría%20agendar%20una%20consulta" target="_blank" rel="noopener noreferrer">
                    Agendar Consulta con {selectedDoctor.name.split(" ")[0]} {selectedDoctor.name.split(" ")[1]}
                  </a>
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
