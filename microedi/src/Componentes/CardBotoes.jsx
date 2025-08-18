import './CardBotoes.css'

export default function CardBotoes(){
    return(
        <>
        <img src="../assets/icons/2001.svg"  alt="" />
        <div className='container-cards'>
            <button id='transparencia'>
                
                Transparência
                </button>
            <button id='marcado'>Desde 2001</button>
            <button id='expertise'>Expertise</button> <br />
            <button id='solucao'>Soluções</button>
            <button id='seguranca'>Segurança</button>
            <button id='preco-justo'>Preço Justo</button>
        </div>
        </>
    )
}