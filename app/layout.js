import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "Muhammad Shiraz Kamran | Portfolio",
  description: "Software Engineering student at COMSATS University specializing in backend development, AI/ML, and full-stack solutions",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth ">
      <body
        className={`${outfit.className} ${ovo.className} antialiased dark:bg-darkTheme dark:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
