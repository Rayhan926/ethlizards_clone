import AboutSection from "./components/AboutSection";
import ComingSoonSection from "./components/ComingSoonSection";
import CouncilSection from "./components/CouncilSection";
import FindUsOnOpenseaSection from "./components/FindUsOnOpenseaSection";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import JoinTheLoungeSection from "./components/JoinTheLoungeSection";
import OurAdvisiorSection from "./components/OurAdvisiorSection";
import OurVisionSection from "./components/OurVisionSection";
import RoadmapSection from "./components/RoadmapSection";
import TeamSection from "./components/TeamSection";

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutSection />
      <OurVisionSection />
      <FindUsOnOpenseaSection />
      <RoadmapSection />
      <TeamSection />
      <CouncilSection />
      <ComingSoonSection />
      <OurAdvisiorSection />
      <JoinTheLoungeSection />
    </>
  );
}

export default App;
