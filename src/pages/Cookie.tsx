import { Layout } from "@/components/layout/Layout";
import { BUSINESS_INFO } from "@/config/siteTheme";

const Cookie = () => {
  return (
    <Layout>
      <section className="pt-32 pb-16">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-foreground mb-8">
              Cookie Policy
            </h1>

            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-lg mb-6">
                Informativa sull'utilizzo dei cookie ai sensi del Regolamento UE
                2016/679 (GDPR) e della Direttiva 2009/136/CE.
              </p>

              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
                Cosa sono i Cookie
              </h2>
              <p>
                I cookie sono piccoli file di testo che i siti visitati
                inviano al browser dell'utente, dove vengono memorizzati, per
                poi essere ritrasmessi agli stessi siti alla visita successiva.
              </p>

              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
                Cookie utilizzati da questo sito
              </h2>
              <p>
                Il presente sito web <strong>non utilizza cookie</strong> di
                profilazione né cookie di terze parti per finalità di marketing.
              </p>
              <p className="mt-4">
                Il sito potrebbe utilizzare esclusivamente cookie tecnici
                strettamente necessari per il corretto funzionamento delle
                pagine web. Questi cookie non richiedono il consenso
                dell'utente.
              </p>

              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
                Cookie Tecnici
              </h2>
              <p>
                I cookie tecnici sono quelli utilizzati al solo fine di
                effettuare la trasmissione di una comunicazione su una rete di
                comunicazione elettronica, o nella misura strettamente
                necessaria al fornitore di un servizio della società
                dell'informazione esplicitamente richiesto dall'abbonato o
                dall'utente a erogare tale servizio.
              </p>

              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
                Come disabilitare i Cookie
              </h2>
              <p>
                L'utente può gestire le preferenze relative ai cookie
                direttamente all'interno del proprio browser. Tuttavia, la
                disabilitazione dei cookie tecnici potrebbe compromettere il
                corretto funzionamento del sito.
              </p>
              <p className="mt-4">
                Per maggiori informazioni sulla gestione dei cookie nei
                principali browser:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>
                  <strong>Chrome</strong>: Impostazioni → Privacy e sicurezza →
                  Cookie
                </li>
                <li>
                  <strong>Firefox</strong>: Opzioni → Privacy e Sicurezza →
                  Cookie
                </li>
                <li>
                  <strong>Safari</strong>: Preferenze → Privacy → Cookie
                </li>
                <li>
                  <strong>Edge</strong>: Impostazioni → Cookie e autorizzazioni
                  sito
                </li>
              </ul>

              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
                Titolare del Trattamento
              </h2>
              <p>
                {BUSINESS_INFO.name}
                <br />
                {BUSINESS_INFO.address.full}
                <br />
                Tel: {BUSINESS_INFO.phoneDisplay}
                <br />
                P.IVA: {BUSINESS_INFO.vatNumber}
              </p>

              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
                Aggiornamenti
              </h2>
              <p>
                La presente Cookie Policy può essere soggetta a modifiche. Si
                consiglia di consultare periodicamente questa pagina.
              </p>

              <p className="mt-8 text-sm">
                Ultimo aggiornamento: Febbraio 2026
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Cookie;
