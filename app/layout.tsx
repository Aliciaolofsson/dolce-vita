import type { Metadata } from 'next';
import './globals.css';
import Footer from './components/footer';
import Navbar from './components/navbar';

export const metadata: Metadata = {
  title: 'Dolce Vita',
  description:
    'At Dolce Vita, we craft everything with love and care—from delicate pastries to small-batch, handmade gelato. Using only the highest quality ingredients, we bring global flavors to the heart of Linköping. ',
  icons: {
    icon: '/favicon.svg',
  },
  keywords:
    'Dolce Vita, fika, coffee, pastries, Sweden, Linköping, kaffe, bakverk, espresso, cappuccino, latte, mysigt, café, gelato, kvalité, Desmond Del Frate, vallastaden, lunch, frukost, brunch, kaka, soppa, sandwich, toast, macka, smörgås, hemmagjord glass, kvalitet kaffe, local cafe, lokalt, äta, luncha, varm choklad, matcha latte, chai latte',
  openGraph: {
    type: 'website',
    url: 'https://www.dolcevitaCafe.se',
    title: 'Dolce Vita',
    description: 'Dolce Vita Café is located in Linköping, Sweden',
    images: [
      {
        url: '/images/dolce-vita-hero.png',
        width: 800,
        height: 600,
        alt: 'Dolce Vita Café entrence',
      },
    ],
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='sv'>
      <body className='bg-white flex flex-col'>
        <Navbar />
        <div className='flex justify-center'>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
