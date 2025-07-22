import {Roboto } from 'next/font/google';
import useServerDarkMode from "@/hooks/use-server-dark-mode";
import "./globals.css";
import Footer from "@/components/footer";
import Header from "../components/header";
import Script from 'next/script';
import Head from 'next/head';

const signika = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
});


export const metadata = {
  title: 'Talk Haven',
  description: 'Safe & Anonymous Chat',
}

export default function RootLayout({ children }) {
  const theme = useServerDarkMode()
  {console.log(theme)}
  return (
    <html lang="en" className={theme}>
   
        {/* Tawk.to Chat Widget */}
        <Script
          id="tawk-to"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
              (function() {
                var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
                s1.async = true;
                s1.src = 'https://embed.tawk.to/685b261fed9673190b582bba/1iui0pr5q';
                s1.charset = 'UTF-8';
                s1.setAttribute('crossorigin', '*');
                s0.parentNode.insertBefore(s1, s0);
              })();
            `,
          }}
        />
     
    
     
      <body className={signika.className}>
      
      <main className="mt-12">
      {children}
      </main>
      <Footer />
      </body>
    </html>
  )
}
