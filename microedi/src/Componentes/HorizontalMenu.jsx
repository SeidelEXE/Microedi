import { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoMdMenu } from 'react-icons/io';
import '../Estilos/HorizontalMenu.css';
import ScrollToTop from './ScrollToTop'; 

export default function HorizontalMenu(){
    const [menuAberto, setMenuAberto] = useState(false);

    return (
        <>
        <div className='Horizontal_menu'>
            <button
                className="menu-toggle"
                type="button"
                aria-label={menuAberto ? 'Fechar menu' : 'Abrir menu'}
                aria-expanded={menuAberto}
                onClick={() => setMenuAberto((aberto) => !aberto)}
            >
                <IoMdMenu className="menu-toggle-icon" />
            </button>
            <ul className={menuAberto ? 'menu-open' : ''}>
                < ScrollToTop />
                <li><Link to='/' onClick={() => setMenuAberto(false)}>Home</Link></li>
                <li><Link to='/servicos' onClick={() => setMenuAberto(false)}>Serviços</Link></li>
                <li><Link to='/quemsomos' onClick={() => setMenuAberto(false)}>Quem Somos</Link></li>
                <li><Link to='/contato' onClick={() => setMenuAberto(false)}>Contato</Link></li>
            </ul>
        </div>    
        </>
    );
}
