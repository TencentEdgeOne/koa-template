import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Node Functions on EdgeOne Pages - Koa",
  description: "Node Functions 允许您在 Node Runtime 中运行代码,而无需管理服务器。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="dark">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
