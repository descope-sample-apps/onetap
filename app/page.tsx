'use client'

import LogoutButton from "@/components/features/logout-button";
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
          {/* <p className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
            Gradients X Animations
          </p> */}
          <Image src='/descope-logo.png' alt='Descope logo' width={200} height={200} />
          {isSessionLoading ? <p>Loading...</p> : <Message isAuthenticated={isAuthenticated} />}
        </div>
      </BackgroundGradientAnimation>
    </main>
  );
}

function Message( { isAuthenticated } : { isAuthenticated: boolean }) {
  if (isAuthenticated) {
    return <Card>
      <h1 className="">Welcome back!</h1>
      <LogoutButton />
    </Card>
  }
  return <Card>
    <h1 className="">Experience Google &quot;One Tap&quot; Login</h1>
    <h3>Log in like magic! Look at the top-right corner of your screen.</h3>
    <p>Not seeing the &quot;One Tap&quot; Login popup? You
      might be on an unsupported browser. Check list <Link target='_blank' href='https://developers.google.com/identity/gsi/web/guides/supported-browsers'>here</Link>.
    </p>
  </Card>
}