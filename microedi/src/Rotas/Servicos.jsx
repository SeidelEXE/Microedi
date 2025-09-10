import '../Estilos/Servicos.css';
import { SinceIcon, TransparenciaIcon, ExpertiseIcon, SolucoesIcon, ShieldIcon, PrecoBaixoIcon } from '../assets/icons/Icons?react'

export default function Servicos(){
    return(<>

        <div className='cards-serviços-wrapper'>
            <div>
                <div className='card-qualidade'>
                    <TransparenciaIcon className='card-qualidade-icons'/>
                    <h1 className='tituloS'>Trasnparência</h1>
                </div>

                <div className='card-qualidade-ativo'>
                    <SinceIcon className='card-qualidade-icons'/>
                    <h1>Desde <br /> 2001</h1>
                </div>

                <div className='card-qualidade'>
                    <ExpertiseIcon className='card-qualidade-icons'/>
                    <h1 className='tituloS'>Expertise</h1>
                </div>
                
                <div className='card-qualidade'>
                    <SolucoesIcon className='card-qualidade-icons'/>
                    <h1 className='tituloS'>Soluções</h1>
                </div>

                <div className='card-qualidade'>
                    <ShieldIcon className='card-qualidade-icons'/>
                    <h1 className='tituloS'>Segurança</h1>
                </div>

                <div className='card-qualidade'>
                    <PrecoBaixoIcon className='card-qualidade-icons'/>
                    <h1 className='tituloS'>Preço Justo</h1>
                </div>
            </div>
        </div>

    </>)
}