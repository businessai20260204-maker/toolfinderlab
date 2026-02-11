import { Geist, Geist_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import Link from "next/link";
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
  title: "Tool Finder Lab — AI Tool Reviews for Beginners",
  description: "Honest, beginner-friendly reviews of the best AI tools in 2026. Find the right tool for writing, video, and content creation.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <header className="site-header">
          <div className="header-inner">
            <Link href="/" className="site-logo">
              <span className="logo-mark">TFL</span>
              <span className="logo-text">Tool Finder Lab</span>
            </Link>
            <nav className="site-nav">
              <Link href="/articles/best-ai-writing-tools-2026">Writing</Link>
              <Link href="/articles/best-ai-video-tools-2026">Video</Link>
              <Link href="/articles/best-ai-tools-content-creators-2026">For Creators</Link>
            </nav>
          </div>
        </header>
        <main className="site-main">
          {children}
        </main>
        <footer className="site-footer">
          <div className="footer-inner">
            <p className="footer-copy">© 2026 Tool Finder Lab. Honest AI tool reviews for beginners.</p>
            <p className="footer-disclosure">This site contains affiliate links. We may earn a commission if you purchase through our links, at no extra cost to you.</p>
          </div>
        </footer>
        <GoogleAnalytics gaId="G-PHNGVRNWGY" />
      </body>
    </html>
  );
}