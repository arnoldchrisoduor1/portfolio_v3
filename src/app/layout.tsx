"use client";
import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/sections/Navigation";
import grainImage from "../../public/images/grain.jpg";

// export const metadata: Metadata = {
//   title: "Oduor",
//   description: "My portfolio",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* Grain overlay */}
        <div 
          className="fixed inset-0 -z-10 opacity-20"
          style={{
            backgroundImage: `url(${grainImage.src})`,
            backgroundRepeat: 'repeat',
            pointerEvents: 'none',
            // mixBlendMode: 'multiply',
            // backgroundColor: 'rgba(0, 128, 80, 0)'
          }}
        ></div>
        
        {/* Main content */}
        <div className="relative z-0">
          <Navigation />
          {children}
        </div>
      </body>
    </html>
  );
}