"use client";

import WelcomeText from "../components/adminPanel/paragraphs/WelcomeText";

export default function AdminPanel() {
  return (
    <div className="flex overflow-y-scroll w-full items-center max-h-screen flex-col">
      <WelcomeText />
      <WelcomeText />
      <WelcomeText />
      <WelcomeText />
    </div>
  );
}
