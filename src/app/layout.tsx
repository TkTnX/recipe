import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Sidebar from "@/components/Sidebar/Sidebar";

// TODO: Доделать аутентификацию с помощью supabase
// TODO: Login страница
// TODO: Register page
// TODO: Основной layout перенести в (root), а login и register должны быть без sidebar
// TODO: Подключить next auth к базе данных

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Recipe - рецепты, статьи, мастерклассы, новости кулинарии",
  description: "Recipe - рецепты, статьи, мастерклассы, новости кулинарии",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html data-lt-installed="true" lang="ru">
      <body className={` ${roboto.className} antialiased`}>
        <Header />
        <div className="max-w-[1176px] mx-auto px-3 h-[calc(100vh-80px)] mt-14 md:mt-16 relative flex gap-10">
          <Sidebar />
          {children}
        </div>
      </body>
    </html>
  );
}
