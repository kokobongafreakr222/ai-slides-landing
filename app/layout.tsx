import type { Metadata } from 'next';
import { Cinzel, Cormorant_Garamond, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const cinzel = Cinzel({
  subsets: ['latin'],
  variable: '--font-cinzel',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-cormorant',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'DeckMind — AI-ассистент для создания презентаций',
  description:
    'Описываете задачу — система строит структуру, подбирает стиль, компонует слайды. Результат через 3–5 минут. Первая презентация бесплатно.',
  robots: 'index, follow',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${cinzel.variable} ${cormorant.variable} ${jetbrainsMono.variable}`}>
      <body>
        <a href="#main-content" className="skip-to-content">
          Перейти к содержимому
        </a>
        {children}
      </body>
    </html>
  );
}
