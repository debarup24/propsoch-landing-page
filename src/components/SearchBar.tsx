"use client";

import { Search } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const suggestions = [
  "HSR Layout",
  "Mumbai",
  "J.P Nagar",
  "J.P Nagar 6th phase",
  "J.P Nagar 7th phase",
  "Jayanagar",
  "Malabar Hill",
  "Byculla",
  "Whitefield",
  "Electronic City",
  "BTM Layout",
];

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [filtered, setFiltered] = useState<string[]>([]);
  const [open, setOpen] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (query.trim() === "") {
      setFiltered([]);
      return;
    }

    const result = suggestions.filter((item) =>
      item.toLowerCase().includes(query.toLowerCase()),
    );

    setFiltered(result);
  }, [query]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={containerRef} className="relative w-62">
      <div className="relative w-full">
        {/* Icon */}
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-800 size-4 pointer-events-none" />

        {/* Input */}
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
          }}
          placeholder="Search for Developer, location, projects..."
          className="w-full bg-gray-100 text-sm text-gray-800 rounded-sm py-2 pl-10 pr-4 focus:outline-none focus:outline-orange-300 "
        />
      </div>

      {open && filtered.length > 0 && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg border border-orange-300 mt-1 rounded z-50">
          {filtered.map((item, index) => (
            <div
              key={index}
              className="px-4 py-2 hover:bg-orange-50 text-gray-700 cursor-pointer"
              onClick={() => {
                setQuery(item);
                setOpen(false);
              }}
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
