import './Conteudo.css'
import CardBotoes from './CardBotoes'

export default function Conteudo(){
    return(
        /*um wrapper é como uma caixa organizadora, que serve para encapsular uma ou mais tags que formem um pedaço do
        layout, facilitando assim sua manipulação e redimensionamento em alguns casos. Nesse caso debaixo em específico,
        foi usado para conter o texto ao lado da imagem da mulher sorrindo, ambos estão juntos lado a lado, porém cada um
        em uma direção*/
        <>
        {/*mulher sentada com notebook*/}
        <div className="conteudo-wrapper">
            <div className="conteudo">
                <h1>
                Informática e tecnologia,
                tudo em um só lugar</h1>
                A Microedi é o lugar certo para manutenções de notebooks e PCs, compras de computadores já montados, acessórios e gadgets. Honestidade, confiança e preço justo com o melhor atendimento da região!
            </div>
            <img className="mulher-sentada" src="/unnamed.png" alt="" />
        </div>
        {/*cards com ícones inacabados*/}
        <div className='cards-wrapper'>
            <CardBotoes/>
            <div className='informativo-botoes'>
                <h1>Confiança e alta qualidade em manutenções</h1>
                Temos mais de 24 anos de experiência na manutenção e reparos de notebooks e computadores para empresas e pessoas físicas. Somos reconhecidos pelo compromisso, qualidade no atendimento e transparência no diagnóstico.
            </div>
        </div>
        {/*breve descritivo e homem fazendo joinha*/}
        <div className='solucoes-rapidas-wrapper'>
            <div className='solucoes-rapidas-content'>
                <h1>Soluções rápidas e assertivas</h1>
                Entendemos que o seu tempo é precioso e que precisa de um atendimento rápido com soluções certeiras de tecnologia.
            </div>
            <img className='homem-joinha' src="/homem-joinha-com-laptop.jpg" alt="" />
            <div className='solucoes-items'>
                asd
            </div>
        </div>
        </>
    )
}
