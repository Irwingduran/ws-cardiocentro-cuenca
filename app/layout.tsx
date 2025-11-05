import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'CardioCentro Cuenca - Cuidado Integral del Corazón',
  description: 'Centro médico altamente especializado en el cuidado integral del corazón. Más de 10 años de experiencia en cardiología clínica, electrofisiología, marcapasos y medicina cardiovascular en Cuenca, Ecuador.',
  keywords: ['cardiología', 'cardiólogo cuenca', 'electrofisiología', 'marcapasos', 'arritmias', 'ecocardiograma', 'cardiología pediátrica', 'medicina cardiovascular', 'cuenca ecuador'],
  authors: [{ name: 'CORPCARDIOCUENCA S.A.S' }],
  creator: 'CORPCARDIOCUENCA S.A.S',
  publisher: 'CORPCARDIOCUENCA S.A.S',
  openGraph: {
    title: 'CardioCentro Cuenca - Cuidado Integral del Corazón',
    description: 'Centro médico altamente especializado en el cuidado integral del corazón con más de 10 años de experiencia.',
    type: 'website',
    locale: 'es_EC',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
