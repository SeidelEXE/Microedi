import '../Estilos/CardBotoes.css'
import { SinceIcon, TransparenciaIcon, ExpertiseIcon, SolucoesIcon, ShieldIcon, PrecoBaixoIcon } from '../assets/icons/Icons?react'

export default function CardBotoes() {
    return (
        <>

            <div className='cards-qualidade-wrapper'>
                <div className='card-qualidade'>
                    <TransparenciaIcon className='card-qualidade-icons'/>
                    <h1 className='tituloS'>Transparência</h1>
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
        </>
    )
}