'use client'

import { useDescope } from "@descope/nextjs-sdk/client";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

export default function LogoutButton() {

    const { logout } = useDescope();
    const router = useRouter();

    return <Button variant="secondary" className="active:scale-95 transition-transform" onClick={async () => {
        await logout();
        router.refresh();
    }}>Logout</Button>;
}