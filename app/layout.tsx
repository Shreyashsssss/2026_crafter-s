import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'NyayaAI | Multi-Agent Judicial Decision Support',
  description: 'NyayaAI is a multi-agent AI-powered legal workflow platform for explainable case analysis.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
