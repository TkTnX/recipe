import SearchFilter from "@/components/Search/SearchFilter";
import SearchList from "@/components/Search/SearchList";

type Params = {
  searchParams: Promise<{ [key: string]: string }>;
};

export async function generateMetadata({ searchParams }: Params) {
  const { search } = await searchParams;

  return {
    title: `Результаты поиска: ${search}`,
  };
}

const SearchPage = async ({ searchParams }: Params) => {
  const params = await searchParams;
  return (
    <div className="">
      <SearchFilter />
      <SearchList params={params} />
    </div>
  );
};

export default SearchPage;
