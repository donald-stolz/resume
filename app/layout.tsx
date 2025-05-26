import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { resumeSchema } from "@/lib/resume-schema";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";

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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Donald Stolz - Senior Software Engineer",
  description:
    "Senior Software Engineer with 6+ years of experience in cloud technologies and full stack application development. Based in Austin, TX.",
  metadataBase: new URL("https://stolz.dev"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/images/favicon_io/favicon.ico" },
      {
        url: "/images/favicon_io/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/images/favicon_io/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/images/favicon_io/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
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
    url: "https://stolz.dev",
    title: "Donald Stolz - Senior Software Engineer",
    description:
      "Senior Software Engineer with 6+ years of experience in cloud technologies and full stack application development.",
    siteName: "Donald Stolz Portfolio",
    images: [
      {
        url: "/images/social/donald-stolz-social-preview.jpg",
        width: 1200,
        height: 630,
        alt: "Donald Stolz - Senior Software Engineer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Donald Stolz - Senior Software Engineer",
    description:
      "Senior Software Engineer with 6+ years of experience in cloud technologies and full stack application development.",
    creator: "@donstolz",
    images: ["/images/social/donald-stolz-social-preview.jpg"],
  },
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
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
