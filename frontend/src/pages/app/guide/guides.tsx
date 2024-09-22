import { DateFilter } from "@/components/dataFilter";
import { GuideList } from "@/components/itemList";
import { SearchBar } from "@/components/searchBar";


export const Guide = () => {
  return (
    <div>
      <SearchBar />
      <DateFilter />
      <GuideList />
    </div>
  );
};
