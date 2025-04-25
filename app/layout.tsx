import React from "react";
import "@/assets/styles/globals.css";
import Head from "next/head";
import CosmosBackground from "@/components/CosmosBackground";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { APP_NAME, APP_DESCRIPTION   } from "@/lib/constants";  




export const metadata = {
  title:`${APP_NAME}`, // This is used for the <title> tag in the HTML head
  description: `${APP_DESCRIPTION}`, // This is used for the meta description tag

  keyworkds:
    "dj, music, event planning, party, rentals, photobooth,request a song, lighting, speaker, sound system rental, cheap dj services", // Keywords for SEO purposes
  openGraph: {}, // Open Graph metadata for social media sharing (optional)
  twitter: {},
  instagram: {}, // Instagram metadata (optional)
  facebook: {}, // Facebook metadata (optional) ,
};

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* Set the title of the page */}
    
      <body className="flex h-screen flex-col bg-black text-white shadow-lg m-4 rounded-lg">
       
       
        <CosmosBackground />
       <Navbar/>
        {children}
      <Footer/>
      </body>
    </html>
  );
}
