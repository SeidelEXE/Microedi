import HorizontalMenu from './HorizontalMenu'
import '../Estilos/Cabecalho.css'
import { Link } from 'react-router-dom'

export default function Cabecalho() {
    return(
        <>
            
                <div className='logo-area'>
                    <a><Link to={'/'}><img src="/Logo-da-MICROEDI-INFORMÁTICA.ico" alt="" /></Link></a>
                </div>
                <HorizontalMenu />
        </>
    );
}