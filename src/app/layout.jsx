import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600", "700"], // You can adjust the weights as needed
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
        className={` ${poppins.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
