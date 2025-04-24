// app/layout.tsx
import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "The Fallen Angels",
  description: "Token to support women lost to violence.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">{children}</body>
    </html>
  );
}
