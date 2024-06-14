import { Inter } from 'next/font/google';
import './globals.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Nexus Wallet',
};

export default function RootLayout({ children }) {
  return (
    <html lang='kz'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
