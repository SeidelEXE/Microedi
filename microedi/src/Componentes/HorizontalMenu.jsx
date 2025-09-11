import { Link } from 'react-router-dom';
import '../Estilos/HorizontalMenu.css' 

export default function HorizontalMenu(){
    return (
        <>
        <div className='Horizontal_menu'>
            <ul>
                <li><Link to='/' >Home</Link></li>
                <li><Link to='/servicos' >Serviços</Link></li>
                <li><Link to='/quemsomos' >Quem Somos</Link></li>
                <li><Link to='/contato' >Contato</Link></li>
            </ul>
        </div>    
        </>
    );
}