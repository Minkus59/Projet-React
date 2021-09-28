import '../styles/Header.css'
import logo from '../assets/logo.png'

function Header() {
    return (
        <header id="Haut">
            <div class="container">
                <div class="row justify-content-center">
                        <img src={logo} alt='3DonWeb' className='logo' />
                        </div>
            </div>
        </header>
    )
}

export default Header