import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from '../components/page-ui/navbar'
import Footer from '../components/page-ui/footer'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kanvashram - Birth Place of Emperor Bharat | Spiritual Heritage Ashram",
  description: "Discover the sacred grounds of Kanvashram, the ancient hermitage of Sage Kanva and birthplace of Emperor Bharat. Experience spiritual enlightenment through yoga, meditation, and Vedic traditions in the heart of Uttarakhand.",
  keywords: "Kanvashram, Emperor Bharat, Sage Kanva, Shakuntala, spiritual ashram, yoga retreat, Uttarakhand, Vedic traditions, ancient heritage",
  authors: [{ name: "Kanvashram Ashram" }],
  openGraph: {
    title: "Kanvashram - Birth Place of Emperor Bharat",
    description: "Experience the spiritual heritage of ancient India at Kanvashram Ashram",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
