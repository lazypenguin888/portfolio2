
import Navbar from '../Navbar/Navbar'
import './Header.css'

const Header = () => {
  return (
    <header className='header center'>
     <a href="/">
        <img className="img" src={require("../../images/lazy_penguin.png")}  alt="BakeryV1 Mainpage"/>
     </a>
      <Navbar />
    </header>
  )
}

export default Header
