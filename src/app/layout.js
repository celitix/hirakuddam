import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Hirakud Dam | Longest Dam In The World | Dams In India | Hirakud",
  description: "Hirakud Dam is one of the longest dam in the world. Constructed on Mahanadi River this is historic dam in india, situated near Sambalpur District of Odisha",
   icons: {
    icon: [
      { url: '/hirakud-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/hirakud-192x192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [
      { url: '/hirakud-180x180.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
