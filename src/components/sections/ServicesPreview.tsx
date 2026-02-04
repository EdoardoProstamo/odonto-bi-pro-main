import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { SERVICES } from "@/config/siteTheme";
import { Sparkles, Shield, Crown, Target, AlignCenter, Star, ArrowRight } from "lucide-react";
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

export function ServicesPreview() {
  // Show only first 3 services on home
  const previewServices = SERVICES.slice(0, 3);

  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary mb-4">
            I Nostri Servizi
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Cure complete per il tuo sorriso
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Offriamo una gamma completa di trattamenti odontoiatrici per tutta
            la famiglia, dalla prevenzione all'estetica dentale.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {previewServices.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap] || Sparkles;
            const image = serviceImages[service.id];

            return (
              <div
                key={service.id}
                className={`group bg-card rounded-xl overflow-hidden shadow-card card-shadow-hover animate-slide-up animation-delay-${(index + 1) * 100}`}
              >
                {image && (
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                  </div>
                )}
                <div className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center animate-slide-up animation-delay-400">
          <Button asChild size="lg" variant="outline">
            <Link to="/servizi">
              Scopri tutti i servizi
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
