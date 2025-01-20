import { Signika, Roboto } from 'next/font/google';
import useServerDarkMode from "@/hooks/use-server-dark-mode";
import "./globals.css";
import Header from '../components/header';

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
  return (
    <html lang="en">
     
      <body className={signika.className}>
      <main className="mt-12">
      {children}
      </main>
      </body>
    </html>
  )
}
