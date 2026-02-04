import { Layout } from "@/components/layout/Layout";
import { SERVICES } from "@/config/siteTheme";
import { Sparkles, Shield, Crown, Target, AlignCenter, Star } from "lucide-react";
import serviceIgiene from "@/assets/service-igiene.jpg";
import serviceImplantologia from "@/assets/service-implantologia.jpg";
import serviceConservativa from "@/assets/service-conservativa.jpg";

const iconMap = {
  sparkles: Sparkles,
  shield: Shield,
  crown: Crown,
  target: Target,
  alignCenter: AlignCenter,
  star: Star,
};

const serviceImages: Record<string, string> = {
  igiene: serviceIgiene,
  implantologia: serviceImplantologia,
  conservativa: serviceConservativa,
};

const Servizi = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-secondary/30">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center animate-slide-up">
            <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary mb-4">
              I Nostri Servizi
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Trattamenti odontoiatrici completi
            </h1>
            <p className="text-lg text-muted-foreground">
              Offriamo una gamma completa di servizi per la salute e l'estetica
              del tuo sorriso, dalla prevenzione ai trattamenti più avanzati.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24">
        <div className="container mx-auto">
          <div className="space-y-16">
            {SERVICES.map((service, index) => {
              const Icon = iconMap[service.icon as keyof typeof iconMap] || Sparkles;
              const image = serviceImages[service.id];
              const isEven = index % 2 === 0;

              return (
                <div
                  key={service.id}
                  className={`grid lg:grid-cols-2 gap-12 items-center animate-slide-up`}
                >
                  {/* Content */}
                  <div className={isEven ? "order-1" : "order-1 lg:order-2"}>
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                      {service.title}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <div className="h-1 w-20 bg-primary rounded-full" />
                  </div>

                  {/* Image */}
                  <div className={isEven ? "order-2" : "order-2 lg:order-1"}>
                    {image ? (
                      <div className="rounded-2xl overflow-hidden shadow-card">
                        <img
                          src={image}
                          alt={service.title}
                          className="w-full h-64 object-cover"
                        />
                      </div>
                    ) : (
                      <div className="bg-secondary rounded-2xl h-64 flex items-center justify-center">
                        <Icon className="w-16 h-16 text-primary/30" />
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
            Hai bisogno di una consulenza?
          </h2>
          <p className="text-primary-foreground/80 mb-6">
            Contattaci per prenotare una visita e scoprire il trattamento più
            adatto alle tue esigenze.
          </p>
          <a
            href="tel:+390392310667"
            className="inline-flex items-center px-6 py-3 bg-background text-foreground font-medium rounded-lg hover:bg-background/90 transition-colors"
          >
            Chiama: 039 231 0667
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Servizi;
