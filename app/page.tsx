import Message from "@/components/features/message";
import OneTapComp from "@/components/features/one-tap-component";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { session } from "@descope/nextjs-sdk/server";
import Image from "next/image";
import { redirect } from "next/navigation";

export default function Home() {
  const currSession = session()

  return (
    <>
      <OneTapComp />
      <BackgroundGradientAnimation>
        <div className="absolute z-50 inset-0 flex flex-col items-center justify-center text-white font-bold px-4 text-3xl text-center">
          <Image src='/descope-logo.svg' alt='Descope logo' width={250} height={200} />
          <Message session={currSession} />
        </div>
      </BackgroundGradientAnimation>
    </>
  );
}
