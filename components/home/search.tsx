import { SearchIcon } from "lucide-react"
import { SetStateAction } from "react";

export function Search({
  value,
  onChange
}: {
  value: string | undefined;
  onChange: React.Dispatch<SetStateAction<string>>
}) {
  return (
    <div className="flex items-center gap-2 p-1 rounded-lg bg-muted border shadow-sm">
      <SearchIcon className="w-4 h-4 text-muted-foreground" />
      <input
        placeholder="Search"
        type="text"
        className="pr-12 outline-none bg-transparent text-sm"
        onChange={(e) => onChange(e.currentTarget.value)}
        value={value}
      />
    </div>
  );
}
