import '../Estilos/Rodape.css'
import { InstagramIcon } from '../assets/icons/Icons?react'
import { Link } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';

export default function Rodape() {
    return (
        <>
            <footer className='rodape-wrapper'>
                {/* Coluna 1: Logo e descrição */}
                <div className="rodape-col">
                    <img src="/Logo-da-MICROEDI-INFORMÁTICA.ico" alt="icone" className='logo' />
                    <p className="descricao">
                        Somos especialistas em assistência técnica, manutenção e reparos de computadores.
                    </p>
                </div>

                {/* Coluna 2: Contato */}
                <div className="rodape-col">
                    <h3>Endereço</h3>
                    <p>Avenida Emílio Arroyo Hernandes, 2164, Pozzobon Votuporanga, SP</p>
                    <p>Telefone: (17) 99707-8504</p>
                    <p>E-mail: microedi@terra.com.br</p>
                </div>

                {/* Coluna 3: Links úteis */}
                <div className="rodape-col">
                    <h3>Links Úteis</h3>
                    <ul>
                        < ScrollToTop />
                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link to={'/Servicos'}>Serviços</Link></li>
                        <li><Link to={'/QuemSomos'}>Quem Somos</Link></li>
                        <li><Link to={'/Contato'}>Contato</Link></li>
                    </ul>
                </div>

                {/* Coluna 4: Redes sociais */}
                <div className="rodape-col">
                    <h3>Instagram da Loja</h3>
                    <button
                        className='insta-button'
                        onClick={() => window.open("https://www.instagram.com/microedi_informatica?igsh=N3gzM3c0Zzc3YmR3", "_blank")}>

                        <InstagramIcon className='insta-icon' />
                    </button>
                </div>
            </footer>
        </>
    )
}
