import '../Estilos/Servicos.css';
import CardBotoes from '../Componentes/CardBotoes'
import { SinceIcon, TransparenciaIcon, ExpertiseIcon, SolucoesIcon, ShieldIcon, PrecoBaixoIcon } from '../assets/icons/Icons?react'

export default function Servicos() {
    return (<>

        <div className='cards-servicos'>
            <div className='cards-wrapper-icones'>
                <CardBotoes />
                <div className='informativo-botoes'>
                    <h1 className='titulo'>Assistência técnica e vendas de alta qualidade</h1>
                    Nossa equipe possui técnicos qualificados para atender pessoas físicas e jurídicas, com todo suporte em infraestrutura que você precisa. Também trabalhamos com as melhores marcas de tecnologia para atender sua demanda.
                </div>
            </div>
        </div>

    </>)
}