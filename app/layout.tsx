import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import { Header } from "@/components/shared/header";
import "./globals.css";

export const metadata: Metadata = {
  title: "Country Populations | Elanco",
  description: ""
};

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={inter.className}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
