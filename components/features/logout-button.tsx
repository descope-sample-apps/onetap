'use client'

import { useDescope } from "@descope/nextjs-sdk/client";
import { Button } from "../ui/button";
import { useRouter } from "next/router";

export default function LogoutButton() {
    const router = useRouter();

    const { logout } = useDescope();

    return <Button variant="secondary" onClick={async () => {
        await logout()
        router.push('/')
    }}>Logout</Button>;
}