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
            <div className='solucoes-rapidas'>
                <h1>Soluções rápidas e assertivas</h1>
                <p>Entendemos que o seu tempo é precioso e que precisa de um atendimento rápido,<br /> com soluções certeiras de tecnologia.</p>
            </div>

        <div className='solucoes-rapidas-wrapper'>
            <img className='homem-joinha' src="/homem-joinha-com-laptop.jpg" alt="" />
            <div className='solucoes-items'>

                <div className='manutencao-de-computadores'>
                <img className='check-icon' src="../src/assets/icons/sinal-de-visto.svg" alt="" />
                    <h1>Manutenção de computadores</h1>
                    <section>Agilidade e qualidade na manutenção de notebooks e PCs. Formatação, upgrade, limpeza física, reparos, trocas de tela, etc.</section><br />
                </div>

                <div className='instalacao-de-programas'>
                <img className='check-icon' src="../src/assets/icons/sinal-de-visto.svg" alt="" />
                    <h1>Instalação de programas</h1>
                    <section>Instalamos programas complementares, drivers de componentes, ou algum outro programa de seu interesse</section><br />
                </div>

                <div className='acessorios-e-gadgets'>
                <img className='check-icon' src="../src/assets/icons/sinal-de-visto.svg" alt="" />
                    <h1>Acessórios e gadgets</h1>
                    <section>Temos diversas linhas de acessórios para completar o seu setup de trabalho e lazer, e gadgets para auxiliar no dia a dia.</section><br />
                </div>


                <div className='computadores-montados'>
                <img className='check-icon' src="../src/assets/icons/sinal-de-visto.svg" alt="" />
                    <h1>Computadores montados</h1>
                    <section>Temos máquinas já montadas para escritório, home e gamers. Converse com nossos especialistas para uma compra assertiva.</section><br />
                </div>
        
            </div>
        </div>

        {/*propostas*/}
            <div className='proposta'>
                <h1>Por que nos <b>escolher ?</b></h1>
                <p>Somos especializados em tecnologia e informática com anos de conhecimento e expertise no mercado. Nosso atendimento possui um ótimo custo-benefício.</p>
            </div>

        <div className='propostas-wrapper'>
            <div>
                
            </div>
        </div>
        </>
    )
}
