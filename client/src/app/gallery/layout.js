
import "../globals.css";
import React from "react";
import Navbar from "@/components/common/Navbar";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className=""
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
