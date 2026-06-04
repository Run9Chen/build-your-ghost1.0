import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '你是什么鬼？ | Build Your Ghost',
  description: '每天一句话，创造你的数字幽灵。',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
