import Principal from "./components/Principal";
import VideoStart from "./components/VideoStart";
import VideoClasses from "./components/VideoClasses";
import WhoTeachYou from "./components/WhoTeachYou";
import Plans from "./components/Plans";
import Faq from "./components/Faq";
import FadeInSection from "./components/FadeInSection";

export default function Home() {
  return (
    <main>
      <FadeInSection delay={0}>
        <Principal />
      </FadeInSection>
      <FadeInSection delay={150}>
        <VideoStart />
      </FadeInSection>
      <FadeInSection delay={300}>
        <VideoClasses />
      </FadeInSection>
      <FadeInSection delay={450}>
        <WhoTeachYou />
      </FadeInSection>
      <FadeInSection delay={600}>
        <Plans />
      </FadeInSection>
      <FadeInSection delay={750}>
        <Faq />
      </FadeInSection>
    </main>
  );
}
