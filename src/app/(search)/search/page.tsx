import SearchList from "@/components/Search/SearchList";

type Params = {
  searchParams: Promise<{ [key: string]: string }>;
};

const SearchPage = async ({ searchParams }: Params) => {
  const params = await searchParams;

  return (
    <div className="">
      <SearchList params={params} />
    </div>
  );
};

export default SearchPage;
