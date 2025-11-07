import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Discipline & Focus: Rules and Pillars for Success",
  description: "A modern, concise self-help book on discipline, focus, systems, and the pillars of sustainable success.",
  metadataBase: new URL("https://agentic-275b6c95.vercel.app"),
  openGraph: {
    title: "Discipline & Focus",
    description: "A modern self-help guide to discipline, focus, and success.",
    type: "website",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Discipline & Focus",
    description: "A modern self-help guide to discipline, focus, and success.",
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <div className="container header-inner">
            <a className="brand" href="/">Discipline & Focus</a>
            <nav className="nav">
              <a href="/" className="nav-link">Home</a>
              <a href="#toc" className="nav-link">Contents</a>
            </nav>
          </div>
        </header>
        <main className="container">{children}</main>
        <footer className="site-footer">
          <div className="container footer-inner">
            <p>? {new Date().getFullYear()} Discipline & Focus. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
