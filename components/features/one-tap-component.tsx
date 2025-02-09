"use client";

import { useDescope, useSession } from "@descope/nextjs-sdk/client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

let oneTapInitialized = false;

const OneTapComp = () => {
  const oneTap = true;
  const sdk = useDescope();
  const router = useRouter();
  const { isAuthenticated, isSessionLoading } = useSession();

  const OneTapConfig: {
    //auto_select: boolean;
    //prompt_parent_id: string;
    //cancel_on_tap_outside: boolean;
    //context: "signup" | "signin" | "use" | undefined;
    //intermediate_iframe_close_callback: any;
    //itp_support: boolean;
    //login_hint: string;
    //hd: string;
    use_fedcm_for_prompt?: boolean;
  } = {
    //auto_select: true,
    //prompt_parent_id: "example-id",
    //cancel_on_tap_outside: false,
    //context: "signin",
    //intermediate_iframe_close_callback: logBeforeClose,
    //itp_support: true,
    //login_hint: "user@example.com",
    //hd: "example.com",
    use_fedcm_for_prompt: false,
  };

  const startOneTap = async () => {
    // eslint-disable-next-line
    if (oneTapInitialized) return;

    const isLoggedIn = await sdk.fedcm.isLoggedIn();
    const isSupported = await sdk.fedcm.isSupported();

    const res: any = await sdk.fedcm.oneTap(
      "google",
      {use_fedcm_for_prompt: true},
      {},
      () => {
        console.log("One-Tap sign-in was skipped");
      },
      () => {
        console.log("One-Tap sign-in was dismissed.");
      }
    );
    if (isLoggedIn && isSupported) {
        console.log("One-Tap sign-in was actually shown.");
    }

    router.refresh();
    oneTapInitialized = true;
  };

  useEffect(() => {
    if (oneTap && !isAuthenticated && !isSessionLoading) {
      startOneTap();
    }
  }, [isAuthenticated, isSessionLoading]);

  // Return some JSX here. For example, return null if there's nothing to render:
  return null;
};

export default OneTapComp;
