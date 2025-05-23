import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { resumeSchema } from "@/lib/resume-schema";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Don",
  description:
    "Senior Software Engineer with 6+ years of experience in cloud technologies and full stack application development. Based in Austin, TX.",
  keywords: [
    "Software Engineer",
    "Full Stack Developer",
    "Cloud Technologies",
    "React",
    "Next.js",
    "TypeScript",
  ],
  authors: [{ name: "Donald Stolz" }],
  creator: "Donald Stolz",
  publisher: "Donald Stolz",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://donstolz.tech",
    title: "Donald Stolz - Senior Software Engineer",
    description:
      "Senior Software Engineer with 6+ years of experience in cloud technologies and full stack application development.",
    siteName: "Donald Stolz Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Donald Stolz - Senior Software Engineer",
    description:
      "Senior Software Engineer with 6+ years of experience in cloud technologies and full stack application development.",
    creator: "@donstolz",
  },
  viewport: "width=device-width, initial-scale=1",
  verification: {
    google: "your-google-site-verification", // Add your Google verification code
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(resumeSchema),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
