import './Conteudo.css'

export default function Conteudo(){
    return(
        /*um wrapper é como uma caixa organizadora, que serve para encapsular uma ou mais tags que formem um pedaço do
        layout, facilitando assim sua manipulação e redimensionamento em alguns casos. Nesse caso debaixo em específico,
        foi usado para conter o texto ao lado da imagem da mulher sorrindo, ambos estão juntos lado a lado, porém cada um
        em uma direção*/
        <>
        <div className="conteudo-wrapper">
            <div className="conteudo">
                <h1>
                Informática e tecnologia,
                tudo em um só lugar</h1>
                A Microedi é o lugar certo para manutenções de notebooks e PCs, compras de computadores já montados, acessórios e gadgets. Honestidade, confiança e preço justo com o melhor atendimento da região!
            </div>
            <img className="mulher-sentada" src="/unnamed.png" alt="" />
        </div>
        </>
    )
}