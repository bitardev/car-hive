import type { Metadata } from "next";
import "./globals.css";
import { Footer, Navbar } from "@/components";
import { Analytics } from "@vercel/analytics/react"

export const metadata: Metadata = {
  title: "Car Hive",
  description:
    "Streamline your car rental experience with our effortless booking process.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`relative`}>
        <Navbar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
