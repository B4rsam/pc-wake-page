import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "PC Wake Page",
    description: "Bismarck must be offline!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
