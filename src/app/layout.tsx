import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Quran Circle | Consistent Engagement',
  description: 'Maintain a daily connection with the Quran through habit-building and accountability.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&family=Amiri:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased selection:bg-primary/30 selection:text-primary-foreground min-h-screen bg-[#050505]">
        {children}
      </body>
    </html>
  );
}
