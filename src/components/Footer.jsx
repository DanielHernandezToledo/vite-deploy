import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="footer">
        <div className='myContainer footer-data'>
        <p className="copyright">2022 &copy; Todos los derehos reservados</p>
        <Link to='/'>
            <img src="./src/assets/img/footer-logo.svg" alt="Logo" />
        </Link>
        </div>
    </footer>
  )
}

export default Footer