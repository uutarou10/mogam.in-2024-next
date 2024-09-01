import type { Metadata } from "next";
import { BIZ_UDPGothic } from "next/font/google";
import "./globals.css";
import {clsx} from "clsx";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


const bizUdPGothic = BIZ_UDPGothic({
  weight: ['400', '700'],
  preload: false,
  variable: '--font-biz-ud-p-gothic',
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={clsx(bizUdPGothic.variable, 'font-sans leading-normal')}>
        <div className={'flex flex-col gap-8'}>
          <Header/>
          <div>{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
