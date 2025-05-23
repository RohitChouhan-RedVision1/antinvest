import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Antinvest",
    template: "%s - Antinvest",
  },
  description:
    "Antinvest helping them make informed decisions to achieve their financial goals with confidence",
  keywords: [
    "Mutual Funds",
    "Investment",
    "Financial Planning",
    "Mutual Fund News",
    "Finance Tips",
    "Antinvest",
  ],
  twitter: {
    card: "summary_large_image",
    site: "@antinvest",
  },
  authors: [{ name: "Antinvest Team" }],
};


export default function RootLayout({ children }) {


  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#FFFFFF]`}
      >
        {children}
      </body>
    </html>
  );
}
