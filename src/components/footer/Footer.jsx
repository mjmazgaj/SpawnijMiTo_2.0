import "./footer.min.css"
import {FaFacebookF} from "react-icons/fa"

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">SpawnijMiTo</a>
      <ul className="permalinks">
        <li><a href="#">Strona główna</a></li>
        <li><a href="#about">O nas</a></li>
        <li><a href="#services">Nasze produkty</a></li>
        <li><a href="#portfolio">Nasze realizacje</a></li>
        <li><a href="#testimonials">Opinie</a></li>
        <li><a href="#contact">Kontakt</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://m.facebook.com/profile.php?id=100094208785511&_rdr"><FaFacebookF/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Bainar ET. Wszelkie prawa zastrzeżone.</small>
      </div>
    </footer>
  )
}

export default Footer