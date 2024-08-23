'use client'

import { useDescope, useSession } from "@descope/nextjs-sdk/client";
import { useEffect } from "react";

let oneTapInitialized = false;

const OneTapComp = () => {
    const oneTap = true;
    const sdk = useDescope();
    const { isAuthenticated, isSessionLoading } = useSession();

    const startOneTap = async () => {
        // eslint-disable-next-line
        if (oneTapInitialized) return;

        const res: any = await sdk.fedcm.oneTap('google-implicit');
        console.log("Response: ", res.data);
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

export default OneTapComp