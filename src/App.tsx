import { useState } from "react";
import Header from "./components/header/Header";
import TeachingSection from "./components/TeachingSection";
import DifferencesSection from "./components/DifferencesSection";
import IntroSection from "./components/introSection";
import TabSection from "./components/TabsSection";
import FeedBackSection from "./components/FeedbackSection";
import EffectSection from "./components/EffectSection";

export default function App(): JSX.Element {
  const [tab, setTab] = useState<string>("effect");

  return (
    <>
      <Header />
      <main>
        <IntroSection />
        <TabSection
          active={tab}
          onChange={(current: string) => setTab(current)}
        />

        {tab === "main" && (
          <>
            <TeachingSection />
            <DifferencesSection />
          </>
        )}

        {tab === "feedback" && <FeedBackSection></FeedBackSection>}

        {tab === "effect" && <EffectSection></EffectSection>}
      </main>
    </>
  );
}
