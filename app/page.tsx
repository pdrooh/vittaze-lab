import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Diferenciais from '@/components/Diferenciais'
import Servicos from '@/components/Servicos'
import Sobre from '@/components/Sobre'
import Resultados from '@/components/Resultados'
import Contato from '@/components/Contato'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Diferenciais />
      <Servicos />
      <Sobre />
      <Resultados />
      <Contato />
      <Footer />
    </main>
  )
}
