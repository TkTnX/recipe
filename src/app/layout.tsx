import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

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
        <div className="max-w-[1176px] mx-auto px-3 h-full mt-14 md:mt-16 relative flex gap-14">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
