import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BUSINESS_INFO } from "@/config/siteTheme";
import { Phone, ArrowRight } from "lucide-react";
import ctaImage from "@/assets/cta-smile.jpg";

export function CTASection() {
  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-10">
        <img
          src={ctaImage}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Prenota la tua visita oggi stesso
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
            Il primo passo verso un sorriso sano e luminoso inizia con una
            semplice chiamata. Il nostro team è pronto ad accoglierti.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-background text-foreground hover:bg-background/90"
            >
              <a href={`tel:${BUSINESS_INFO.phone}`}>
                <Phone className="w-4 h-4 mr-2" />
                {BUSINESS_INFO.phoneDisplay}
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
            >
              <Link to="/contatti">
                Come raggiungerci
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
