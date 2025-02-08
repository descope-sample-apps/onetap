import LogoutButton from "./logout-button";
import Link from "next/link";
import React from "react";
import { FullWidthCardContainer } from "../ui/full-width-card";
import { AuthenticationInfo } from "./descope-types";
import Image from "next/image";

export default function Info({ session }: { session: AuthenticationInfo | undefined }) {
  return <FullWidthCardContainer className="px-4 sm:px-8 py-8 space-y-3 rounded-none flex flex-col">
    {session ? <div className="space-y-4 max-w-2xl">
      <h1 className="text-[#192740] text-3xl font-bold">
        {`Welcome${session.token.givenName ? `, ${session.token.givenName}` : ""}!`}
      </h1>
      <p className="text-[#192740] text-base font-normal max-w-sm">You&apos;ve just experienced Descope&apos;s &quot;One Tap&quot; Login. Feel free to log out and try it again.</p>
      <LogoutButton />
    </div> : <div className="space-y-4 max-w-2xl">
      <h1 className="text-[#192740] text-3xl font-bold flex items-center gap-2">
        What Is <Image src="/one_tap.svg" alt="One Tap" width={100} height={30} />?
      </h1>
      <div className="space-y-4">
        <h3 className="text-[#192740] text-lg font-normal">Google One Tap is a sign-in feature that allows users to log into websites or apps with just one click without remembering or entering passwords.</h3>
      </div>
      <h1 className="text-[#192740] text-3xl font-bold">Benefits of One Tap</h1>
      <div className="space-y-4">
        <h3 className="text-[#192740] text-lg font-normal">- Reduces the number of anonymous users by providing them active, low-friction prompts to sign up and see the full value of your app.</h3>
        <h3 className="text-[#192740] text-lg font-normal">Google One Tap is a sign-in feature that allows users to log into websites or apps with just one click without remembering or entering passwords.</h3>
        <h3 className="text-[#192740] text-lg font-normal">Google One Tap is a sign-in feature that allows users to log into websites or apps with just one click without remembering or entering passwords.</h3>
      </div>
    </div>}
  </FullWidthCardContainer>
}