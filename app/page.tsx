import Navbar         from '@/components/Navbar'
import Hero           from '@/components/Hero'
import Diferenciais   from '@/components/Diferenciais'
import Servicos       from '@/components/Servicos'
import Sobre          from '@/components/Sobre'
import Resultados     from '@/components/Resultados'
import Contato        from '@/components/Contato'
import Footer         from '@/components/Footer'
import LoadingScreen  from '@/components/LoadingScreen'
import ScrollProgress from '@/components/ScrollProgress'
import FloatingActions from '@/components/FloatingActions'

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <ScrollProgress />
      <FloatingActions />

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
    </>
  )
}
