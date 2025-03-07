import { Metadata } from "next";
import "./../globals.css";

export const metadata: Metadata = {
  title: "Кулинарные мастер-классы",
  description: "Recipe - рецепты, статьи, мастерклассы, новости кулинарии",
};

export default function AcademyLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full">
      {children}
    </div>
  );
}
