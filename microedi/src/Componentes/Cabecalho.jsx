import HorizontalMenu from './HorizontalMenu'
import '../Estilos/Cabecalho.css'

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