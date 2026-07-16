import type {Metadata} from 'next';
import { ThemeProvider } from '@/components/theme-provider';
import { AuthProvider } from '@/context/auth-context';
import NextTopLoader from 'nextjs-toploader';
import './globals.css';

export const metadata: Metadata = {
  title: 'Noviq | Video Editing & YouTube Automation Agency',
  description: 'We handle scriptwriting, voiceovers, video editing, thumbnail design, and channel management so you can focus on growing your business.',
  icons: {
    icon: '/logo-premium.png',
    shortcut: '/logo-premium.png',
    apple: '/logo-premium.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Instrument+Serif:ital@0;1&display=swap" rel="stylesheet" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js" defer></script>
      </head>
      <body className="font-body antialiased selection:bg-primary/30 selection:text-primary-foreground min-h-screen">
        <AuthProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            <NextTopLoader color="#f97316" showSpinner={false} height={3} shadow="0 0 10px #f97316,0 0 5px #f97316" />
            {children}
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}

