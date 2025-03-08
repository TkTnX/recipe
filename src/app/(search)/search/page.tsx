import SearchFilter from "@/components/Search/SearchFilter";
import SearchList from "@/components/Search/SearchList";
import { Suspense } from "react";

export async function generateMetadata() {
  return {
    title: `Результаты поиска`,
  };
}

const SearchPage = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <SearchFilter />
        <SearchList />
      </Suspense>
    </>
  );
};
export default SearchPage;
