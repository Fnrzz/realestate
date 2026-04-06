import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

const Search = () => {
  return (
    <div
      data-aos="fade-up"
      className="w-xs lg:w-lg flex items-center gap-2 bg-white rounded-full p-1"
    >
      <Input
        placeholder="Search properties..."
        className="bg-white text-black placeholder:text-black border-none shadow-none py-6"
      />
      <Button className="p-6" aria-label="search">
        <SearchIcon className="text-black w-10 h-10" />
      </Button>
    </div>
  );
};

export default Search;
