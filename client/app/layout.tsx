import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wayprint — Print Xizmati",
  description: "Futbolka, kurta, kepka va boshqa mahsulotlarga rasm chop etish xizmati. Tez va sifatli yetkazib berish.",
  openGraph: {
    title: "Wayprint — Print Xizmati",
    description: "Futbolka, kurta, kepka va boshqa mahsulotlarga rasm chop etish xizmati.",
    url: "https://wayprint.uz",
    siteName: "Wayprint",
    images: [
      {
        url: "https://wayprint.uz/icons/wayprint-logo.png", // ✅ preview rasmi shu!
        width: 1200,
        height: 630,
        alt: "Wayprint logotipi",
      },
    ],
    locale: "uz_UZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wayprint — Print Xizmati",
    description: "Futbolka, kurta, kepka va boshqa mahsulotlarga rasm chop etamiz.",
    images: ["https://wayprint.uz/icons/wayprint-logo.png"], // ✅ shu yerga ham qo‘shildi
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
