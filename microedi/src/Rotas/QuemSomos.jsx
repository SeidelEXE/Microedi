
import '../Estilos/QuemSomos.css';
import { TransparenciaIcon, Handshake, Certificado, CheckIcon, WhatsappIcon } from '../assets/icons/Icons'

export default function QuemSomos() {

    const anoAtual = new Date().getFullYear();
    const anosDeHistoria = anoAtual - 2001;

    return (<>

        {/*propostas*/}
        <div className='proposta-quemsomos'>
            <h1 className='titulo'>+ de {anosDeHistoria} anos de História</h1>
            <p>Desde 2001 a Microedi Informática oferece o melhor <br />
                atendimento e atenção na manutenção, venda e <br />reparo de computadores.</p>
        </div>

        <div className='cards-wrapper'>
            <div className='card-quemsomos'>
                <TransparenciaIcon className='card-icon' />
                <h1>Transparência</h1>
                <p>Realizar um diagnóstico honesto, transparente e justo é um dos nossos principais pilares.</p>
            </div>

            <div className='card-ativo-quemsomos'>
                <Handshake className='card-icon' />
                <h1>Compromisso</h1>
                <p>Temos um compromisso com a expectativa dos clientes e oferecemos o melhor atendimento.</p>
            </div>

            <div className='card-quemsomos'>
                <Certificado className='card-icon' />
                <h1>Qualificação</h1>
                <p>Todos os técnicos da nossa equipe possuem alta qualificação e conhecimento em informática.</p>
            </div>
        </div>

        {/*breve descritivo e homem fazendo joinha*/}
        <div className='solucoes-rapidas'>
            <h1 className='titulo'>Muito além do conserto, soluções para o seu dia a dia digital</h1>
            <p>Aqui você encontra soluções de tecnologia e informática para atender suas necessidades, seja  <br />para trabalho ou entretenimento.</p>
        </div>

        <div className='solucoes-rapidas-wrapper'>
            <img className='homem-joinha' src="/homem-joinha.png" alt="" />
            <div className='solucoes-items'>

                <div className='solucao-item'>
                    <CheckIcon className='check-icon' />
                    <div className='manutencao-de-computadores'>
                        <h1>Manutenção de computadores</h1>
                        <section>Agilidade e qualidade na manutenção de notebooks e PCs. Formatação, upgrade, limpeza física, reparos, trocas de tela, etc.</section><br />
                    </div>
                </div>

                <div className='solucao-item'>
                    <CheckIcon className='check-icon' />
                    <div className='instalacao-de-programas'>
                        <h1>Instalação de programas</h1>
                        <section>Instalamos programas complementares, drivers de componentes, ou algum outro programa de seu interesse</section><br />
                    </div>
                </div>

                <div className='solucao-item'>
                    <CheckIcon className='check-icon' />
                    <div className='acessorios-e-gadgets'>
                        <h1>Acessórios e gadgets</h1>
                        <section>Temos diversas linhas de acessórios para completar o seu setup de trabalho e lazer, e gadgets para auxiliar no dia a dia.</section><br />
                    </div>
                </div>

                <div className='solucao-item'>
                    <CheckIcon className='check-icon' />
                    <div className='computadores-montados'>
                        <h1>Computadores montados</h1>
                        <section>Temos máquinas já montadas para escritório, home e gamers. Converse com nossos especialistas para uma compra assertiva.</section><br />
                    </div>
                </div>
            </div>

        </div>

        {/*contato*/}
        <div className='contato-wrapper'>
            <div>
                <section className='diagnostico-sem-compromisso'>
                    <h1 className='titulo'>Solicite o diagnóstico e <br />orçamento sem compromisso <br /> do seu computador.</h1>
                </section>
            </div>
            <div className='entre-em-contato'>
                <button
                    className='entre-em-contato-button'
                    onClick={() => window.open("https://wa.me/5517997078504?text=Ol%C3%A1%20quero%20fazer%20um%20or%C3%A7amento", "_blank")}>

                    entre em contato
                    <WhatsappIcon className='whatsapp-icon' />
                </button>

            </div>
        </div>

    </>)
}