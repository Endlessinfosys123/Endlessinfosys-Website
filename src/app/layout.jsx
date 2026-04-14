import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import BackToTop from "@/components/BackToTop";

const syne = Syne({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "EndlessInfosys | We Are the Architects of Your Online Success",
  description: "Let's Craft Your Digital Success Story. Expert digital marketing services in Gandhinagar, Gujarat. SEO, PPC, Social Media, and more.",
  keywords: ["Digital Marketing", "SEO", "PPC", "Social Media Marketing", "EndlessInfosys", "Gandhinagar", "Gujarat"],
  icons: {
    icon: "/images/logo-square.png",
    apple: "/images/logo-square.png",
  },
};

export default function RootLayout({
  children,
}) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${dmSans.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full font-body text-brand-gray bg-white selection:bg-brand-purple/20 flex flex-col">
        <ScrollProgressBar />
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
