'use client'

import Message from "@/components/features/message";
import OneTapComp from "@/components/features/one-tap-component";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-[#18283F]">
      <OneTapComp />
      <BackgroundGradientAnimation>
        <div className="absolute z-50 inset-0 flex flex-col items-center justify-center text-white font-bold px-4 text-3xl text-center">
          <Image src='/descope-logo.svg' alt='Descope logo' width={250} height={200} />
          <Message isAuthenticated={false} />
        </div>
      </BackgroundGradientAnimation>
    </main>
  );
}
