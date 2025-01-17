import { styled } from 'styled-components';
import { BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { FaGithub, FaWebAwesome} from "react-icons/fa6";
import './Footer.css';
import logo from '../../assets/logo.png';
import { Link } from "react-router-dom";

const StyledFooter = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
    background-color: var(--color-black);
    padding: 2rem;
    box-sizing: border-box;
    border-top: 4px solid var(--color-blue);
    box-shadow: 0 -10px 15px 0 var(--color-button-shadow);
`;

const IconContainer = styled.ul`
    background-color: transparent;
    flex-wrap: wrap;
    margin: 0;
    padding: 0;
    list-style: none;
    li {
        background-color: var(--color-black);
        display: inline-block;
        //margin-right: 1.5rem;
        padding: 0.5rem;
    }
`;

const FooterText = styled.p`
    background-color: transparent;
    font-size: 13px;
    color: var(--color-white-smoke);
    margin: 0;
    line-height: 1.4;
    text-align: center;
`;

function Footer() {
    return (
        <StyledFooter className='container'>
            <Link to="/">
                <section className='logo'>
                    <img src={logo} alt="Logo Alura" />
                </section>
            </Link>
            
            <IconContainer>
                <li>
                    <a href="https://github.com/LeonardoLombana">
                    <FaGithub className='icons'/>
                    </a>
                </li>
                <li>
                    <a href="https://leonardolombanacontento-qaengineer.vercel.app/">
                    <FaWebAwesome className='icons'/>
                    </a>
                </li>
                <li>
                    <a href="https://api.whatsapp.com/send/?phone=3112722062&text=Hola%2C+Leonardo+vi+tu+perfil+me+interesa+contactarte%2C+gracias.&type=phone_number&app_absent=0">
                    <BsWhatsapp className='icons' />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/leonardo-lombana-contento/">
                    <BsLinkedin className='icons' />
                    </a>
                </li>
            </IconContainer>
            <FooterText className='text'>
                Diseño por Alura-Latam<br />
                Desarrollado por Leonardo Lombana<br />
                Proyecto para One + Alura - G7
            </FooterText>
        </StyledFooter>
    );
}

export default Footer