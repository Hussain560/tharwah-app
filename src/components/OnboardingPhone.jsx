import React, { useState } from "react";
import OnboardingScreen from "../screens/OnboardingScreen";
import AuthScreen from "../screens/AuthScreen";

// This component simulates the onboarding/auth flow inside a phone frame
export default function OnboardingPhone() {
  const [step, setStep] = useState("onboarding");

  // Always fill the phone frame, and allow AuthScreen to return to onboarding
  return (
    <div
      className="bg-black rounded-3xl shadow-2xl flex flex-col"
      style={{ width: 430, height: 932, overflow: "hidden", border: "8px solid #222" }}
    >
      <div className="flex-1 flex flex-col">
        {step === "onboarding" ? (
          <OnboardingScreen onComplete={() => setStep("auth")} />
        ) : (
          <AuthScreen onLoginSuccess={() => setStep("onboarding")} />
        )}
      </div>
    </div>
  );
}
