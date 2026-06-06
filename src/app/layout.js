import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import BackToTop from "@/components/BackToTop";
import Loader from "@/components/Loader";

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
  description: "Frontend Developer portfolio of Suresh Kumar, skilled in HTML, CSS, JavaScript, React, Next.js, Tailwind CSS and Shopify.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <Loader>
          <Navbar />

          <main className="flex-1">{children}</main>

          <Footer />
          <Footer />
          <BackToTop />
          </Loader>
        </ThemeProvider>
      </body>
    </html>
  );
}
