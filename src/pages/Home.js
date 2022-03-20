import Category from '../components/Category'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Products from '../components/Products'
import Slide from '../components/Slide'

export default function Home() {
  return (
    <div className="overflow-x-hidden">
        <Navbar />
        <Slide />
        <Category />
        <Products />
        <Newsletter />
        <Footer />
    </div>
  )
}
