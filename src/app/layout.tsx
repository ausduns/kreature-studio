import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kreature — AI Product Studio for Founders Who Ship Fast",
  description:
    "Kreature is a productized build engine for non-technical founders and indie builders. Ship your first product fast with fixed-scope sprints.",
  icons: {
    icon: "/logo/kreature-icon.svg",
    apple: "/logo/kreature-icon.svg",
  },
  openGraph: {
    title: "Kreature — AI Product Studio",
    description:
      "Ship your first product fast. Fixed-scope sprints for non-technical founders.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
