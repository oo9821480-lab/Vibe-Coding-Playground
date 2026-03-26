"use client";

import { useConfetti } from "@/hooks/useConfetti";
import GlowButton from "@/components/ui/GlowButton";
import SectionHeader from "@/components/ui/SectionHeader";
import SectionWrapper from "@/components/ui/SectionWrapper";

export default function InteractivitySection() {
  const fire = useConfetti();

  return (
    <SectionWrapper id="interactivity">
      <SectionHeader title="Interactivity" subtitle="Live controls" />
      <GlowButton onClick={fire}>Launch confetti!</GlowButton>
    </SectionWrapper>
  );
}
