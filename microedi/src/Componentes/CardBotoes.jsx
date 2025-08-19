import './CardBotoes.css'

export default function CardBotoes(){
    return(
        <>
        
        <div className='container-cards'>
            <button id='transparencia'>
                
                Transparência
                </button>
            <button id='marcado'>
                <img className='desde2001' src="../src/assets/icons/2001.svg"  alt="" />
                Desde 2001
                </button>
            <button id='expertise'>
                <img className='expertise' src="../src/assets/icons/TempExpertise_1.svg" alt="" />
                Expertise
                </button> <br />  
            <button id='solucao'>
                
                Soluções
                </button>
            <button id='seguranca'>
                
                Segurança
                </button>
            <button id='preco-justo'>
                
                Preço Justo
                </button>
        </div>
        </>
    )
}