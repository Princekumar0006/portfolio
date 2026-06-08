import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import BackToTop from "@/components/BackToTop";
import Loader from "@/components/Loader";
import CommandMenu from "@/components/CommandMenu";
import CustomCursor from "@/components/CustomCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Suresh Kumar | Frontend Developer",
  description: "Frontend Developer portfolio of Suresh Kumar, skilled in HTML, CSS, JavaScript, React, Next.js, Tailwind CSS, Bootstrap and Shopify.",

  keywords: ["Suresh Kumar", "Frontend Developer", "HTML Developer", "React Developer", "Next.js Developer", "Tailwind CSS Developer", "Shopify Developer"],

  authors: [{ name: "Suresh Kumar" }],

  openGraph: {
    title: "Suresh Kumar | Frontend Developer",
    description: "Explore the portfolio of Suresh Kumar, a Frontend Developer skilled in React, Next.js, Tailwind CSS and Shopify.",
    url: "https://portfolio-theta-five-lvp8yr04uh.vercel.app/",
    siteName: "Suresh Kumar Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Suresh Kumar Frontend Developer Portfolio",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Suresh Kumar | Frontend Developer",
    description: "Frontend Developer portfolio built with Next.js and Tailwind CSS.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <Loader>
            <CustomCursor />
            <CommandMenu />
            <Navbar />

            <main className="flex-1">{children}</main>

            <Footer />
            <BackToTop />
          </Loader>
        </ThemeProvider>
      </body>
    </html>
  );
}
