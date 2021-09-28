import '../styles/Footer.css'
//import lien from 'https://www.linkedin.com/in/michael-helinckx/'
import linkedinLogo from '../assets/Social/abe8ef48021bbc07ce36b47fcfb221d1linkedin2.png'

function Footer() {
    return (
        <footer>
            <div class="container">
                <div id="BoutonBas">
                </div>

            <div class="row justify-content-end">                      
                <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                {/* <a href={lien} target="_blank" without rel="noreferrer"> */}
                    <img src={linkedinLogo} alt="lien reseau linkedin"/>
                    {/* </a> */}
                </div>
            </div>
            </div>
        </footer>
    )
}

export default Footer