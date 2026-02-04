import { Layout } from "@/components/layout/Layout";
import { BUSINESS_INFO } from "@/config/siteTheme";

const Privacy = () => {
  return (
    <Layout>
      <section className="pt-32 pb-16">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-foreground mb-8">
              Privacy Policy
            </h1>

            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-lg mb-6">
                Informativa sulla privacy ai sensi del Regolamento UE 2016/679
                (GDPR).
              </p>

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
                Tipologie di Dati Raccolti
              </h2>
              <p>
                Il presente sito web non raccoglie dati personali degli utenti
                attraverso form di contatto o sistemi di tracciamento. La
                navigazione sul sito non comporta la raccolta di dati personali
                identificativi.
              </p>

              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
                Dati di Navigazione
              </h2>
              <p>
                I sistemi informatici e le procedure software preposte al
                funzionamento di questo sito web acquisiscono, nel corso del
                loro normale esercizio, alcuni dati personali la cui
                trasmissione è implicita nell'uso dei protocolli di
                comunicazione di Internet. In questa categoria di dati rientrano
                gli indirizzi IP, il tipo di browser utilizzato, il sistema
                operativo, il nome di dominio e gli indirizzi dei siti web dai
                quali è stato effettuato l'accesso o l'uscita, le informazioni
                sulle pagine visitate dagli utenti all'interno del sito.
              </p>

              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
                Finalità del Trattamento
              </h2>
              <p>I dati di navigazione potrebbero essere utilizzati per:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Garantire il corretto funzionamento del sito</li>
                <li>
                  Ricavare informazioni statistiche anonime sull'uso del sito
                </li>
                <li>
                  Verificare il corretto funzionamento dei servizi offerti
                </li>
              </ul>

              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
                Diritti dell'Interessato
              </h2>
              <p>
                Ai sensi degli articoli 15-22 del GDPR, l'interessato ha il
                diritto di:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>
                  Accedere ai propri dati personali e ottenerne una copia
                </li>
                <li>Rettificare i dati inesatti</li>
                <li>
                  Richiedere la cancellazione dei dati ("diritto all'oblio")
                </li>
                <li>Limitare il trattamento dei propri dati</li>
                <li>Opporsi al trattamento</li>
                <li>Richiedere la portabilità dei dati</li>
              </ul>

              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
                Modifiche alla Privacy Policy
              </h2>
              <p>
                Il Titolare si riserva il diritto di apportare modifiche alla
                presente privacy policy in qualunque momento, dandone
                pubblicità agli utenti su questa pagina.
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

export default Privacy;
