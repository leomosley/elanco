import { SearchIcon } from "lucide-react"

export default function Search() {
  return (
    <div className="flex items-center gap-2 p-1 rounded-lg bg-muted border shadow-sm">
      <SearchIcon className="w-4 h-4 text-muted-foreground" />
      <input
        placeholder="Search"
        className="pr-12 outline-none bg-transparent text-sm"
      />
    </div>
  );
}
