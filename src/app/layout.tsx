// app/layout.tsx or app/page.tsx (depending on your project structure)
import React from "react";
import { Roboto } from "next/font/google";  // Optional, for example font
import './globals.css'; // Make sure you import your global styles

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
});

export default function RootLayout({
  children, // Will contain the page content
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className={roboto.className}>
        {/* You can add a header or footer here, shared across pages */}
        <header className="bg-purple-900 p-4 text-white">
          <h1>Welcome to The Fallen Angels</h1>
        </header>
        
        {children}

        <footer className="text-center bg-black text-white p-4">
          <p>&copy; 2025 The Fallen Angels. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
