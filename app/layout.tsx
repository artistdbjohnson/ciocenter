import type { Metadata } from "next";
import { Newsreader, Outfit } from "next/font/google";
import { Shell } from "@/components/shell";
import { Providers } from "@/lib/i18n";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: {
    default: "Central Indiana Orthopedics · design study",
    template: "%s · CIO design study",
  },
  description:
    "A dglxss design study of Central Indiana Orthopedics. Not the official site. Six clinics, published physicians, and the real phone line.",
  icons: { icon: "/media/favicon.png" },
  robots: { index: false, follow: false },
};

const themeBoot = `(function(){try{var t=localStorage.getItem("cio-theme");if(t==="dark")document.documentElement.classList.add("dark");}catch(e){}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${outfit.variable} ${newsreader.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBoot }} />
      </head>
      <body>
        <Providers>
          <Shell>{children}</Shell>
        </Providers>
      </body>
    </html>
  );
}
