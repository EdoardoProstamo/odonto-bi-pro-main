import { STRENGTHS } from "@/config/siteTheme";
import { Award, Cpu, Heart, Users } from "lucide-react";
import studioImage from "@/assets/studio-interior.jpg";

const icons = [Award, Cpu, Heart, Users];

export function StrengthsSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative animate-slide-up">
            <div className="rounded-2xl overflow-hidden shadow-card">
              <img
                src={studioImage}
                alt="Studio Dentistico Odonto Bi - Sala operativa moderna"
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Decorative */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 rounded-2xl -z-10" />
          </div>

          {/* Content */}
          <div className="animate-slide-up animation-delay-200">
            <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary mb-4">
              Perché Sceglierci
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Professionalità e attenzione al paziente
            </h2>
            <p className="text-muted-foreground mb-8">
              Nel nostro studio combiniamo competenza medica e tecnologie moderne
              per offrirti cure odontoiatriche di qualità in un ambiente
              accogliente e rilassante.
            </p>

            {/* Strengths Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {STRENGTHS.map((strength, index) => {
                const Icon = icons[index] || Award;
                return (
                  <div
                    key={strength.title}
                    className="flex gap-4 p-4 bg-secondary/50 rounded-xl"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        {strength.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {strength.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
