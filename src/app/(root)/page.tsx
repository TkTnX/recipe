import Categories from "@/components/Categories/Categories";
import Hero from "@/components/Hero/Hero";

export default function Home() {
  return (
    <main className="flex flex-col items-center lg:items-start  w-full h-full max-w-[600px] mx-auto lg:mx-0">
      <Hero />
      <Categories />
    </main>
  );
}
