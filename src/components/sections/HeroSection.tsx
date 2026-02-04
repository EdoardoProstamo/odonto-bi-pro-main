import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BUSINESS_INFO } from "@/config/siteTheme";
import { Phone, MapPin, Clock } from "lucide-react";
import heroImage from "@/assets/hero-clinic.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="animate-slide-up">
            <span className="inline-block px-4 py-2 bg-secondary rounded-full text-sm font-medium text-secondary-foreground mb-6">
              Studio Dentistico a Monza
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Il tuo sorriso,
              <br />
              <span className="text-primary">la nostra missione</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl">
              Da oltre vent'anni ci prendiamo cura della salute orale dei nostri
              pazienti con professionalità, tecnologie all'avanguardia e un
              approccio umano e personalizzato.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button asChild size="lg" className="gradient-cta">
                <Link to="/contatti">Prenota una Visita</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href={`tel:${BUSINESS_INFO.phone}`}>
                  <Phone className="w-4 h-4 mr-2" />
                  Chiama Ora
                </a>
              </Button>
            </div>

            {/* Info Cards */}
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 p-4 bg-card rounded-lg shadow-soft">
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <span className="block text-xs text-muted-foreground">
                    Telefono
                  </span>
                  <span className="text-sm font-medium text-foreground">
                    {BUSINESS_INFO.phoneDisplay}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-card rounded-lg shadow-soft">
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <span className="block text-xs text-muted-foreground">
                    Sede
                  </span>
                  <span className="text-sm font-medium text-foreground">
                    Monza (MB)
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-card rounded-lg shadow-soft">
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <span className="block text-xs text-muted-foreground">
                    Orari
                  </span>
                  <span className="text-sm font-medium text-foreground">
                    Su appuntamento
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-slide-up animation-delay-200">
            <div className="relative rounded-2xl overflow-hidden shadow-card">
              <img
                src={heroImage}
                alt="Studio Dentistico Odonto Bi - Reception e sala d'attesa moderna"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/10 rounded-2xl -z-10" />
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent/20 rounded-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
