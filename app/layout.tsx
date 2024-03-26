import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";

const roboto = Roboto_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "NULLPTRS",
    description: "In computing, a null pointer or null reference is a value saved for indicating that the pointer or reference does not refer to a valid object.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={roboto.className}>
                <div className="bg-neutral-50 text-neutral-900 min-w-screen min-h-screen">
                    {children}
                </div>
            </body>
        </html>
    );
}
