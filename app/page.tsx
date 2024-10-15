import Message from "@/components/features/message";
import OneTapComp from "@/components/features/one-tap-component";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { Button } from "@/components/ui/button";
import { session } from "@descope/nextjs-sdk/server";
import Image from "next/image";
import { redirect } from "next/navigation";

import * as React from "react"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Star } from "lucide-react";

const onetapHelperCards = [
  {
    title: "Reduce SMS costs",
    icon: <Star />
  },
  {
    title: "Reduce SMS costs",
    icon: <Star />
  },
  {
    title: "Reduce SMS costs",
    icon: <Star />
  },
  {
    title: "Reduce SMS costs",
    icon: <Star />
  }
]

export default function Home() {
  const currSession = session()

  return (
    <>
      <OneTapComp />
      <BackgroundGradientAnimation>
        <div className="max-w-xl mx-auto text-center py-12 relative z-50">
          <Image src='/descope-logo.svg' alt='Descope logo' width={250} height={200} className="mx-auto" />
          <Message isAuthenticated={currSession ? true : false} />
        </div>
      </BackgroundGradientAnimation>
      <div className="bg-white py-12">
        <div className="max-w-xl mx-auto space-y-4">
          <h2 className="mt-10 scroll-m-20 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
            What is Google One Tap?
          </h2>
          <p className="leading-7 [&:not(:first-child)]:mt-6 text-gray-600">
            The king, seeing how much happier his subjects were, realized the error of
            his ways and repealed the joke tax.
          </p>
          <Button>
            Tell me more &#8594;
          </Button>
        </div>
      </div>
      <BackgroundGradientAnimation>
        <div className="max-w-xl mx-auto py-12 space-y-6 text-center">
          <h2 className="mt-10 scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 text-white">
            How Google One Tap helps
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {onetapHelperCards.map(({ title, icon }, i) => {
              return <CustomCard
                key={i}
                title={title}
                icon={icon}
              />
            })}
          </div>
          
          <Button className="z-50 relative">
            Book Google One Tap demo &#8594;
          </Button>
        </div>
      </BackgroundGradientAnimation>
    </>
  );
}



export function CustomCard({ title, icon }: { title: string, icon: React.ReactNode }) {
  return (
    <Card>
      <CardHeader>
        {icon}
        <CardTitle>{title}</CardTitle>
      </CardHeader>
    </Card>
  )
}

