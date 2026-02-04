import { BUSINESS_INFO } from "@/config/siteTheme";
import { Star, ExternalLink } from "lucide-react";

export function ReviewsSection() {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto">

        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary mb-4">
            Recensioni
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Le opinioni dei nostri pazienti
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            La fiducia dei pazienti rappresenta il nostro miglior risultato.
          </p>
        </div>

        {/* Static Rating */}
        <div className="text-center mb-12 animate-slide-up animation-delay-200">

          <div className="flex justify-center gap-1 mb-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className="w-6 h-6 text-amber-400 fill-amber-400"
              />
            ))}
          </div>

          <p className="text-lg font-semibold text-foreground">
            Punteggio medio: 4,8 su 5,0
          </p>

          <p className="text-sm text-muted-foreground mt-2">
            Valutazioni autentiche pubblicate su Google
          </p>
        </div>

        {/* Google Reviews Link */}
        <div className="text-center animate-slide-up animation-delay-400">
          <a
            href={BUSINESS_INFO.googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
          >
            Visualizza tutte le recensioni
            <ExternalLink className="w-4 h-4" />
          </a>

          <p className="text-xs text-muted-foreground mt-2">
            (Fonte: Google – verificabile dal link)
          </p>
        </div>

      </div>
    </section>
  );
}
