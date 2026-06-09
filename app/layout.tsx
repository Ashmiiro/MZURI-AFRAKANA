import type {Metadata} from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Mzuri Afrikana Safaris | Ultra-Premium East African Luxury Travel',
  description: 'Design your ultimate bespoke luxury safari in Uganda, Rwanda, Kenya, and Tanzania. Explore Africa in style with customized itineraries and five-star hosting.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} scroll-smooth`}>
      <body className="font-sans antialiased text-stone-800 bg-stone-50/50" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
