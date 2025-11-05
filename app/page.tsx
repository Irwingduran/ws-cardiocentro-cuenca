import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { DoctorsSection } from "@/components/doctors-section"
import { ServicesSection } from "@/components/services-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ArticlesSection } from "@/components/articles-section"
import { EducationSection } from "@/components/education-section"
import { FAQSection } from "@/components/faq-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { WhatsAppFloatButton } from "@/components/whatsapp-float-button"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <DoctorsSection />
        <ServicesSection />
        <TestimonialsSection />
        <ArticlesSection />
        <EducationSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppFloatButton />
    </div>
  )
}
