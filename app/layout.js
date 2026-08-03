import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata = {
  title: "Muhammad Shiraz Kamran | Backend & Full-Stack Engineer",
  description: "Software Engineering student at COMSATS University specializing in RAG applications, FastAPI backend services, lightweight CLI tools, and responsive web interfaces.",
  keywords: ["Muhammad Shiraz Kamran", "Backend Engineer", "FastAPI", "Python", "RAG", "AI Engineer", "Software Engineer", "COMSATS"],
  authors: [{ name: "Muhammad Shiraz Kamran" }],
  creator: "Muhammad Shiraz Kamran",
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: "Muhammad Shiraz Kamran | Backend & Full-Stack Engineer",
    description: "Building RAG applications, FastAPI backend services, lightweight CLI tools, and responsive web interfaces.",
    url: "https://shirazkamran.dev",
    siteName: "Muhammad Shiraz Kamran Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Shiraz Kamran | Backend & Full-Stack Engineer",
    description: "Building RAG applications, FastAPI backend services, lightweight CLI tools, and responsive web interfaces.",
    creator: "@shirazkamran",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased bg-canvas text-ink font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
