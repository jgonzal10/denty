import type { Metadata } from "next";
import "./globals.css";
import Footer from "./dashboard/footer/page";
import Navbar from "./dashboard/navbar/page";



export const metadata: Metadata = {
  title: "Denty",
  description: "Denty",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="antialiased"
      >
        <Navbar />

        {children}
        <Footer />
      </body>
    </html>
  );
}
