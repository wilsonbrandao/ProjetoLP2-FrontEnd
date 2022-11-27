import logoJuntosSomosMais from '../../assets/logoJuntosSomosMais.png'
import './HeaderContentStyle.scss'

export function HeaderContent() {
    return (
        <header className='Header'>
            <img src={logoJuntosSomosMais} alt="Logo Juntos Somos Mais" />
        </header>
    )
}