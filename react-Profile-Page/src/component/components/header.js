//ikonlar ve resim import
import resim from './img/Oktay.jpeg'
import facebook from './icon/facebook.png';
import twitter from './icon/twitter.png';
import instagram from './icon/instagram.png';
import github from './icon/gitHub.png';
import linkedin from './icon/linkedin.png';

//sayfanın üstü kısmı isim resim etc.
function Header(){
    return(
        <div className="header">
            <br/>
            <img className="oktay_resim" src={resim} alt="resim"/>
            <h1>OKTAY ÇOPURLU</h1>
            <p>PROGRAMER - DESIGNER - CODER</p>
            <div class="social-media">
                <a href="https://github.com/OktayCopurlu" target="_blank" rel="noreferrer"><img className="icons" src={github} alt="github"/></a>
                <a href="https://www.linkedin.com/in/oktay-%C3%A7opurlu-7aab551b7/" target="_blank" rel="noreferrer"><img className="icons" src={linkedin} alt="linkedin"/></a>
                <a href="https://www.facebook.com/oktay.copurlu/" target="_blank" rel="noreferrer"><img className="icons" src={facebook} alt="facebook"/></a>
                <a href="https://www.instagram.com/swissoktay/" target="_blank" rel="noreferrer"><img className="icons" src={twitter} alt="twitter"/></a>
                <a href="https://twitter.com/Oktay18521974" target="_blank" rel="noreferrer"><img className="icons" src={instagram} alt="instagram"/></a>
            </div>
            <hr/>
        </div>
    )
}

export default Header;