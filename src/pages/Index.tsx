import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { StrengthsSection } from "@/components/sections/StrengthsSection";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ReviewsSection />
      <ServicesPreview />
      <StrengthsSection />
      <FAQSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
