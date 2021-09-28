import '../styles/Section.css'
import imgContact from '../assets/Contact.png'

function Section() {
    return (
        <section id="Contact" className="ContentBlanc">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="row">  
                    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                        <img className="row justify-content-center" src={imgContact} alt="Contact" />
                        </div>
                        <div className="col">
                        <div className="right">

                            Pour toutes demandes de renseignements <b>06 52 94 26 92</b> ou via le <b>formulaire ci-dessous</b>

                            <form name="form_contact" id="form_contact" action="<?php HOME ?>/frontend/models/contact.php" method="POST">

                            <textarea cols="40" rows="10" name="message" placeholder="Message *" required="required"></textarea>
                            <input type="email" value="" name="email" placeholder="Votre adresse e-mail *" required="required"/>
                            <input type="text" value="" name="tel" placeholder="Numéro de téléphone *" required="required"/>
                            <input type="submit" name="Envoyer" value="Envoyer"/>

                            </form>

                            <p><font color='#FF0000'>*</font> : Informations requises</p>
                        </div>
                        </div>
                    </div>
                    <div className="Retour">
                        <input type="button" title="revenir en haut de la page" onclick="window.location.href='#Haut'"/>
                    </div>
                    </div>
                </div>
            </section>
    )
}

export default Section