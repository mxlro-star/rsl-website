"use client";

import { useState } from "react";
import Button from "./Button";
import OnboardingPackModal from "./OnboardingPackModal";

export default function OnboardingCTA() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsModalOpen(true)}>
        Request Onboarding Pack
      </Button>

      {isModalOpen && (
        <OnboardingPackModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
}
