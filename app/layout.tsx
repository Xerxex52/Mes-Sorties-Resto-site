import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ variable: "--font-geist", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mes Sorties Resto — Vos meilleures tables, toujours avec vous",
  description: "L’app iPhone qui réunit vos sorties au restaurant, bonnes adresses, tickets, dépenses, cartes et statistiques. Gratuite à télécharger, sans abonnement.",
  applicationName: "Mes Sorties Resto",
  icons: { icon: "/app-icon.png", shortcut: "/app-icon.png", apple: "/app-icon.png" },
  openGraph: { type: "website", locale: "fr_FR", siteName: "Mes Sorties Resto", title: "Mes Sorties Resto — Vos meilleures tables, toujours avec vous", description: "Sorties, bonnes adresses, tickets et dépenses réunis dans une app iPhone simple et privée.", images: [{ url: "/og.png", width: 1200, height: 630, alt: "Mes Sorties Resto sur iPhone" }] },
  twitter: { card: "summary_large_image", title: "Mes Sorties Resto", description: "Vos meilleures tables, toujours avec vous.", images: ["/og.png"] },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#f7f0e7" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fr"><body className={geist.variable}>{children}</body></html>;
}
