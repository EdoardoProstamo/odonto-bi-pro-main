import { Layout } from "@/components/layout/Layout";
import { BUSINESS_INFO } from "@/config/siteTheme";
import { Phone, MapPin, Clock, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contatti = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-secondary/30">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center animate-slide-up">
            <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary mb-4">
              Contatti
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Vieni a trovarci
            </h1>
            <p className="text-lg text-muted-foreground">
              Siamo a Monza, facilmente raggiungibili. Contattaci per prenotare
              un appuntamento.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-24">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Cards */}
              <div className="space-y-6 animate-slide-up">
                {/* Address */}
                <div className="bg-card rounded-xl p-6 shadow-card">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">
                        Indirizzo
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        {BUSINESS_INFO.address.street}
                        <br />
                        {BUSINESS_INFO.address.cap} {BUSINESS_INFO.address.city}{" "}
                        ({BUSINESS_INFO.address.province})
                        <br />
                        {BUSINESS_INFO.address.country}
                      </p>
                      <Button asChild variant="outline" size="sm">
                        <a
                          href={BUSINESS_INFO.googleMapsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Apri su Google Maps
                          <ExternalLink className="w-4 h-4 ml-2" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="bg-card rounded-xl p-6 shadow-card">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">
                        Telefono
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        Per prenotazioni e informazioni
                      </p>
                      <a
                        href={`tel:${BUSINESS_INFO.phone}`}
                        className="text-xl font-semibold text-primary hover:text-primary/80 transition-colors"
                      >
                        {BUSINESS_INFO.phoneDisplay}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Hours */}
                <div className="bg-card rounded-xl p-6 shadow-card">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">
                        Orari
                      </h3>
                      <p className="text-muted-foreground">
                        {BUSINESS_INFO.hours}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Info Box */}
              <div className="animate-slide-up animation-delay-200">
                <div className="bg-primary rounded-xl p-8 h-full">
                  <h2 className="text-2xl font-bold text-primary-foreground mb-4">
                    Prenota un appuntamento
                  </h2>
                  <p className="text-primary-foreground/80 mb-6 leading-relaxed">
                    Per prenotare una visita o richiedere informazioni sui
                    nostri servizi, chiamaci direttamente. Il nostro staff sarà
                    lieto di assisterti e trovare l'orario più adatto alle tue
                    esigenze.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-primary-foreground/90">
                      <Phone className="w-5 h-5" />
                      <span>Chiamaci al {BUSINESS_INFO.phoneDisplay}</span>
                    </div>
                    <div className="flex items-center gap-3 text-primary-foreground/90">
                      <Clock className="w-5 h-5" />
                      <span>Ricevi conferma immediata</span>
                    </div>
                    <div className="flex items-center gap-3 text-primary-foreground/90">
                      <MapPin className="w-5 h-5" />
                      <span>Studio a Monza, zona centrale</span>
                    </div>
                  </div>
                  <div className="mt-8">
                    <Button
                      asChild
                      size="lg"
                      className="w-full bg-background text-foreground hover:bg-background/90"
                    >
                      <a href={`tel:${BUSINESS_INFO.phone}`}>
                        <Phone className="w-4 h-4 mr-2" />
                        Chiama Ora
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contatti;
