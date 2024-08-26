'use client'

import { useDescope } from "@descope/nextjs-sdk/client";
import { Button } from "../ui/button";

export default function LogoutButton() {

    const { logout } = useDescope();

    return <Button variant="secondary" onClick={async () => {
        await logout();
    }}>Logout</Button>;
}