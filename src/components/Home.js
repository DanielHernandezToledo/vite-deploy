import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import CarouselHeader from './CarouselHeader'
import About from './About'
import Products from './Products'
import Services from './Services'
import Contact from './Contact'
import Footer from './Footer'


const Home = () => {

//Smooth Scroll start

    const home = useRef(null);
    const about = useRef(null);
    const products = useRef(null);
    const services = useRef(null);
    const contact = useRef(null);

    const scrollToSection = (elementRef) => {
        window.scrollTo({
            top: ( window.screen.width > 680 ? elementRef.current.offsetTop - 94 :  elementRef.current.offsetTop), // anchor condition
            behavior: 'smooth'
        })
    }

//Smooth Scroll end

    // Anchor Navbar control start

    const [navBar, setNavBar] = useState(false);

    const changeBackground = () => {
        window.scrollY >= 96 ? setNavBar(true) : setNavBar(false);
    }

    window.addEventListener('scroll', changeBackground);
        // Anchor Navbar control end

  return (
      <div className='global-order'>


            <div className={navBar ? 'navbar active' : 'navbar' }>
                <div className="myContainer">
                    <div className='navbar-content'>
                        <Link to='/'>
                            <img src="./src/assets/img/top-logo.svg" alt="Logo"  className='logo-navbar'/>
                        </Link>
                        <nav className='principal-nav'>
                            <Link to='/' onClick={() => scrollToSection(home)}>Home</Link>
                            <Link to='/' onClick={() => scrollToSection(about)}>About</Link>
                            <Link to='/' onClick={() => scrollToSection(products)}>Products</Link>
                            <Link to='/' onClick={() => scrollToSection(services)}>Services</Link>
                            <Link to='/' onClick={() => scrollToSection(contact)}>Contact</Link>
                        </nav>
                    </div>
                </div>
            </div>
        <div ref={home} className='header'><CarouselHeader /></div>        
        <div ref={about} className='about-order'><About/></div>
        <div ref={products} className='products-order'><Products/></div>
        <div ref={services} className='services-order'><Services/></div>
        <div ref={contact} className='contact-order'><Contact/></div>

        <Footer/>
    </div>
    
  )
}

export default Home