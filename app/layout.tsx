import './global.css';
import { inter } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`page-root-layout ${inter.className} antialiased`}>{children}</body>
      {/* <body>{children}</body> */}
    </html>
  );
}
