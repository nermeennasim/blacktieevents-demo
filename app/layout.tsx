import React from "react";
import Navbar from "@/components/Navbar";
import "@/assets/styles/globals.css";
import Head from "next/head";
import Footer from "@/components/Footer";
import CosmosBackground from '@/components/CosmosBackground';


export const metadata = {
  title: "Black Tie Events", // This is used for the <title> tag in the HTML head
  description: "Black Tie Events - Excellent DJ Services At Your Event!", // This is used for the meta description tag

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
      <Head>
        <title>BlackTie Events</title> {/* Default title for the site */}
        <meta
          name="description"
          content="BlackTie Events - Your Event Planning Partner"
        />
      </Head>
      <body className="bg-black text-white shadow-lg m-4 rounded-lg">
        {' '}
        {/* Outer container for the page */}
        {/* Outer container for the page */}
        <CosmosBackground />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
