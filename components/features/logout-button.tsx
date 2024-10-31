'use client'

import { useDescope } from "@descope/nextjs-sdk/client";
import { Button } from "../ui/button";

export default function LogoutButton() {

    const { logout } = useDescope();
    return <Button variant="secondary" className="active:scale-95 transition-transform" onClick={async () => {
        await logout();
        window.location.reload()
    }}>Logout</Button>;
}
