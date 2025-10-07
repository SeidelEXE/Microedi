import '../Estilos/Contato.css';
import { WhatsappIcon } from '../assets/icons/Icons';

export default function SobreNos() {
  return (
    <>

      <div className='contato-whatsapp'>
        <h1 className='entre-em-contato'>Entre em contato conosco!</h1>
        <p>Em caso de dúvidas ou para mais informações, entre em contato pelo Whatsapp!</p>


        <button
          className='entre-em-contato-button'
          onClick={() => window.open("https://wa.me/5517997078504?text=Ol%C3%A1%20quero%20fazer%20um%20or%C3%A7amento", "gostaria de fazer um orçamento")}>

          entre em contato
          <WhatsappIcon className='whatsapp-icon' />
        </button>
      </div>

      <div className='mapa-wrapper'>
        <div>
          <section><h1 className='encontre-nos'>Encontre-nos:</h1></section>
          <section><span>
            Av. Emílio Arroio Hernandes, 2164 - Pozzobon

            Votuporanga - SP

            Telefone: (17) 99707-8504</span></section>
        </div>

        <iframe className='mapa'
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233.71935557119755!2d-49.97755010452667!3d-20.40309638172434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94bd5983408d50f3%3A0xde2a91455518fa3c!2sMICROEDI%20Inform%C3%A1tica!5e0!3m2!1spt-BR!2sbr!4v1757773878006!5m2!1spt-BR!2sbr"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </>
  );
}
