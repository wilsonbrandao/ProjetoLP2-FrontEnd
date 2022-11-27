import logoJuntosSomosMais from '../../assets/logoJuntosSomosMais.png'
import './FooterContentStyle.scss';

export function FooterContent() {
    return (
        <footer>
            <img src={logoJuntosSomosMais} alt="Logo Juntos Somos Mais" />
            <p>Printing Manager - Todos os direitos reservados</p>
            <p>Siganos-nos em nossas redes sociais</p>
        </footer>
    );
}
