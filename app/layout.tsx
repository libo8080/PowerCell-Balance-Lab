import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: '功率 × 能量密度权衡器',
  description: '用可调权重比较移动电源的功率密度与能量密度',
  openGraph: {
    title: '功率 × 能量密度权衡器',
    description: '移动电源决策实验室：拖动权重，即时比较快充与续航。',
    images: ['/og.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: '功率 × 能量密度权衡器',
    description: '移动电源决策实验室：拖动权重，即时比较快充与续航。',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
