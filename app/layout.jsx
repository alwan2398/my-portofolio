import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Portfolio Alwan",
  description: "Generated Portfolio by Alwan from scratch",
  icons: {
    icon: "/icons/logo.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={cn(
          `${jakartaSans.className} dark min-h-screen bg-background text-foreground antialiased font-heading relative`
        )}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
