import { Sora } from 'next/font/google';
import "./globals.css";
import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';
import ThemeProvider from '@/providers/ThemeProvider';


const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

export const metadata = {
  title: "DriveFleet",
  description: "Premium Car Rental Platform",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${sora.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <Navbar/>
            {children}
          <Footer/>
        </ThemeProvider>
        </body>
    </html>
  );
}
