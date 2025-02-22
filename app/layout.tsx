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
    'Bästa caféet i Linköping, Café i Linköping, Fika i Linköping, Kaffe i Linköping, Bakverk i Linköping, Espresso i Linköping, Cappuccino i Linköping, Latte i Linköping, Mysigt café, Gelato i Linköping, Kvalitetskaffe, Vallastaden café, Lunch i Linköping, Frukost i Linköping, Brunch i Linköping, Hemmagjord glass, Varm choklad i Linköping, Matcha latte i Linköping, Chai latte i Linköping. Best café in Linköping, Café in Linköping, Fika in Linköping, Coffee in Linköping, Pastries in Linköping, Espresso in Linköping, Cappuccino in Linköping, Latte in Linköping, Cozy café, Gelato in Linköping, Quality coffee, Vallastaden café, Lunch in Linköping, Breakfast in Linköping, Brunch in Linköping, Homemade ice cream, Hot chocolate in Linköping, Matcha latte in Linköping, Chai latte in Linköping',
  openGraph: {
    type: 'website',
    url: 'https://www.dolcevitaCafe.se',
    title: 'Dolce Vita',
    description: 'Dolce Vita Café, the best café in Linköping',
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
