import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer, Header, SideBar } from "@/components";
// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "QR code Generator",
  description: "QR code Generator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <body className={inter.className}> */}
      <body className="m-2">
        <SideBar />
        <main className="flex flex-col md:ml-60 sm:border-r sm:border-zinc-700 min-h-screen ml-2">
          <div className="flex flex-col pt-2 px-4 space-y-2 flex-grow pb-4">
            <Header />
            {children}
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
