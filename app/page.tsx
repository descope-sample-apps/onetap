'use client'

import LogoutButton from "@/components/features/logout-button";
import Message from "@/components/features/message";
import OneTapComp from "@/components/features/one-tap-component";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { Card } from "@/components/ui/card";
import { useSession } from "@descope/nextjs-sdk/client";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const { isAuthenticated, isSessionLoading } = useSession();

  return (
    <main className="bg-gray-800">
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
