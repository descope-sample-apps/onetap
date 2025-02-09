import Message from "@/components/features/message";
import OneTapComp from "@/components/features/one-tap-component";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { session } from "@descope/nextjs-sdk/server";
import Image from "next/image";
import SectionDivider from '@/components/elements/section-divider';
import SectionWrapper from '@/components/elements/section-wrapper';

export default function Home() {
  const currSession = session();

  return (
    <div className="relative h-[150vh]">
      <OneTapComp />
      <div className="absolute inset-0 z-0">
        <BackgroundGradientAnimation />
      </div>

      <div className="relative z-10 flex flex-col h-[120vh]">
        <div className="min-h-screen flex flex-col items-center justify-start text-white font-bold px-4 text-3xl text-center pt-20 gap-0">
          <Image src='/descope-logo.svg' alt='Descope logo' width={500 / 3} height={200 / 3} className="mb-20" />
          <Image src='/onetap_guru.svg' alt='Descope logo' width={250 * 1.25} height={200 * 1.25} className="mb-0" />
          <Message session={currSession} />

          <div className="relative z-20 w-screen left-0">
            <SectionDivider />
            <SectionWrapper order={0} className="w-screen left-0 relative z-30">
              <div className="h-[300px] grid place-items-center">
                <div className="space-y-4 max-w-2xl mx-auto">
                  <h1 className="text-[#192740] text-4xl text-center font-bold flex items-center justify-center gap-2">
                    What Is <div className="flex items-center h-[36px]"><Image src="/one_tap.svg" alt="One Tap" width={165} height={55} className="object-contain" /></div>
                  </h1>
                  <div className="space-y-6 pb-2">
                    <h3 className="text-[#686e78] text-center text-lg font-normal">Google One Tap is a sign-in feature that allows users to log into websites or apps with just one click without remembering or entering passwords.
                      This feature can be embedded into websites and apps, offering a seamless, fast login experience that reduces user friction. It helps businesses increase user sign-ups and engagement by minimizing barriers to entry.
                    </h3>
                  </div>
                  <div className="flex justify-center mt-8">
                    <a
                      href="https://www.descope.com/blog/post/one-tap"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#7deded] text-[#0a101a] px-8 py-3 rounded-full hover:bg-[#6bd8d8] transition-colors duration-200 flex items-center gap-2 text-lg font-normal"
                    >
                      Tell Me More&nbsp; <Image src="/right_arrow.svg" alt="Right Arrow" width={20} height={20} className="object-contain" />
                    </a>
                  </div>
                </div>
              </div>
            </SectionWrapper>
            <div className="rotate-180 -mt-[1px]">
              <SectionDivider />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

