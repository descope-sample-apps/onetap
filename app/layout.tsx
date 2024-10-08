import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@descope/nextjs-sdk";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "onetap.guru | Descope One Tap Demo",
  description: "Experience how adding Google One Tap to your app can give your users a semaless, secure login experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthProvider projectId={process.env.NEXT_PUBLIC_DESCOPE_PROJECT_ID!}>
      <html lang="en">
        <body className={cn(inter.className, "bg-[#18283F]")}>
          {children}
        </body>
      </html>
    </AuthProvider>
  );
}
