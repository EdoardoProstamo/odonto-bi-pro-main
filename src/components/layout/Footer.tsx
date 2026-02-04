import { Link } from "react-router-dom";
import { BUSINESS_INFO } from "@/config/siteTheme";
import { Phone, MapPin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo e Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">
                  OB
                </span>
              </div>
              <div>
                <span className="font-semibold text-background">
                  {BUSINESS_INFO.shortName}
                </span>
                <span className="block text-xs text-background/70">
                  Studio Dentistico
                </span>
              </div>
            </div>
            <p className="text-background/70 text-sm leading-relaxed">
              {BUSINESS_INFO.name}
              <br />
              Il tuo sorriso è la nostra priorità.
            </p>
          </div>

          {/* Contatti */}
          <div>
            <h3 className="font-semibold text-background mb-4">Contatti</h3>
            <div className="space-y-3">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="flex items-center gap-3 text-sm text-background/70 hover:text-background transition-colors"
              >
                <Phone className="w-4 h-4 text-primary" />
                <span>{BUSINESS_INFO.phoneDisplay}</span>
              </a>
              <div className="flex items-start gap-3 text-sm text-background/70">
                <MapPin className="w-4 h-4 text-primary mt-0.5" />
                <span>{BUSINESS_INFO.address.full}</span>
              </div>
            </div>
          </div>

          {/* Link Utili */}
          <div>
            <h3 className="font-semibold text-background mb-4">Link Utili</h3>
            <nav className="flex flex-col gap-2">
              <Link
                to="/"
                className="text-sm text-background/70 hover:text-background transition-colors"
              >
                Home
              </Link>
              <Link
                to="/servizi"
                className="text-sm text-background/70 hover:text-background transition-colors"
              >
                Servizi
              </Link>
              <Link
                to="/contatti"
                className="text-sm text-background/70 hover:text-background transition-colors"
              >
                Contatti
              </Link>
              <Link
                to="/privacy"
                className="text-sm text-background/70 hover:text-background transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/cookie"
                className="text-sm text-background/70 hover:text-background transition-colors"
              >
                Cookie Policy
              </Link>
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/10 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-background/60">
              © {currentYear} {BUSINESS_INFO.name}. Tutti i diritti riservati.
            </p>
            <p className="text-sm text-background/60">
              P.IVA: {BUSINESS_INFO.vatNumber}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
