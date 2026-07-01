import './i18n'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Story from './components/Story'
import Products from './components/Products'
import UnicumCoctelera from './components/UnicumCoctelera'
import Why from './components/Why'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Story />
      <Products />
      <UnicumCoctelera />
      <Why />
      <Contact />
      <Footer />
    </div>
  )
}
