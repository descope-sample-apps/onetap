import LogoutButton from "./logout-button";
import Link from "next/link";
import React from "react";
import { CardContainer } from "../ui/3d-card";
import { AuthenticationInfo } from "./descope-types";


export default function Message({ session }: { session: AuthenticationInfo | undefined }) {
  return <CardContainer containerClassName="py-20" className="backdrop-blur-sm bg-white/20 px-4 sm:px-8 py-4 space-y-3 max-w-2xl rounded-xl flex flex-col border border-white/70">
    {session ? <div className="space-y-4">
      <h1 className="text-white text-3xl font-bold">
        {`Welcome${session.token.givenName ? `, ${session.token.givenName}` : ""}!`}
      </h1>
      <p className="text-white text-base font-normal max-w-sm">You&apos;ve just experienced Descope&apos;s &quot;One Tap&quot; Login. Feel free to log out and try it again.</p>
      <LogoutButton />
    </div> : <div className="space-y-4 text-left">
      <h1 className="text-white text-3xl text-center font-bold">Experience Google &quot;One Tap&quot; Login</h1>
      <div className="space-y-4">
        <h3 className="text-gray-200 text-lg font-normal">Log in with a single click! Look at the top-right corner of your screen.</h3>
        <p className="text-gray-200 text-lg font-normal">Not seeing the &quot;One Tap&quot; Login popup?</p>
        <p className="text-gray-200 text-lg font-normal">&#8226; Make sure you have an active Chrome / Gmail session.</p>
        <p className="text-gray-200 text-lg font-normal">&#8226; You might be on an unsupported browser. Check out the list <Link className="text-gray-300 underline hover:text-gray-100 transition-colors" target='_blank' href='https://developers.google.com/identity/gsi/web/guides/supported-browsers'>here</Link>.</p>
      </div>
    </div>}
  </CardContainer>
}

