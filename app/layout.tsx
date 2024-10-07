import type { Metadata } from "next";
import { Header } from "@/components/Header";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="inter.classname">
        <Header />
        {children}
      </body>
    </html>
  );
}
