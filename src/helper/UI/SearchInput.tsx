"use client";

// Not In Use! will try fixing later

import { useState, useRef, useEffect } from "react";
import { Search } from "lucide-react";

type SearchInputProps<T> = {
  placeholder?: string;
  data: T[];
  getLabel: (item: T) => string;
  onSelect?: (item: T) => void;
  onSearch?: (query: string) => void;
  icon?: React.ReactNode;
  className?: string;
};

export default function SearchInput<T>({
  placeholder = "Search...",
  data,
  getLabel,
  onSelect,
  onSearch,
  icon,
  className = "",
}: SearchInputProps<T>) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const filtered = data.filter((item) =>
    getLabel(item).toLowerCase().includes(query.toLowerCase()),
  );

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={containerRef} className={`relative w-full ${className}`}>
      {/* Icon */}
      <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
        {icon || <Search size={16} />}
      </div>

      {/* Input */}
      <input
        type="text"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setOpen(true);
          onSearch?.(e.target.value);
        }}
        placeholder={placeholder}
        className="w-full bg-gray-100 text-sm rounded-md py-2 pl-10 pr-4 focus:outline-none focus:ring-1 focus:ring-gray-300"
      />

      {/* Dropdown */}
      {open && query && filtered.length > 0 && (
        <div className="absolute w-full bg-white shadow-lg border mt-1 rounded z-50">
          {filtered.map((item, index) => (
            <div
              key={index}
              onClick={() => {
                onSelect?.(item);
                setQuery(getLabel(item));
                setOpen(false);
              }}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              {getLabel(item)}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
