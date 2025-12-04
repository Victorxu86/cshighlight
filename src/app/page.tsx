import LandingSection from "@/components/LandingSection";
import IntroductionSection from "@/components/IntroductionSection";
import HighlightsSection from "@/components/HighlightsSection";
import AnalysisSection from "@/components/AnalysisSection";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <LandingSection />
      <IntroductionSection />
      <HighlightsSection />
      <AnalysisSection />
    </div>
  );
}
