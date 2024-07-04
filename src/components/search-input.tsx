import { SearchIcon } from "../assets/icons/SearchIcon";

export function SearchInput() {
  return (
    <form>
      <div className="relative">
        <SearchIcon className="absolute left-2 top-2 " />
        <input
          className="flex h-8 w-full rounded-md bg-muted px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-300 placeholder:text-muted-foreground pl-8 pr-8"
          placeholder="Search..."
        ></input>
        <p className="block absolute right-2 top-1 text-muted-foreground">⌘/</p>
      </div>
    </form>
  );
}
