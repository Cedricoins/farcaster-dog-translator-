import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Traducteur Wouf",
  description: "Traduis ta phrase en langage de chien ! Partage sur Farcaster.",
  openGraph: {
    title: "Traducteur Wouf",
    description: "Wouf ! Traduis ta phrase en aboiements !",
    url: "https://farcaster-dog-translator.vercel.app",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <script src="https://warpcast.com/embed.js" async></script>
      </head>
      <body className={`${inter.className} bg-gradient-to-br from-amber-100 to-orange-100 min-h-screen`}>
        {children}
      </body>
    </html>
  );
}
