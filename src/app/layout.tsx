import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import AuthProvider from "@/context/AuthProvider";
import Provider from "./_trpc/Provider";

export const metadata: Metadata = {
  title: "TaskSpace",
  description: "Simple task manager app built with Next.js, Trpc and TailwindCSS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className="bg-red-100 mx-auto lg:w-2/3">
        <AuthProvider>
          <Provider>
          <Navbar />
          {children}
          </Provider>
        </AuthProvider>
      </body>
    </html>
  );
}
