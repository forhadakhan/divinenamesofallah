/**
 * FILE: context/ViewContext.tsx
 * DESC: provide context for view type and current index
 */
"use client";

import { createContext, useContext, useState } from "react";
import { namesOfAllah, NameOfAllah } from "@/lib/data/names";

type ViewType = "single" | "grid" | "list";

interface ViewContextType {
  viewType: ViewType;
  setViewType: (view: ViewType) => void;
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
  handleNext: () => void;
  handlePrev: () => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  filteredNames: NameOfAllah[];
}

const ViewContext = createContext<ViewContextType | null>(null);

export function ViewProvider({ children }: { children: React.ReactNode }) {
  const [viewType, setViewType] = useState<ViewType>("grid");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  // Filter names based on search query (supports partial matches and all fields)
  const filteredNames = namesOfAllah.filter((name) => {
    const query = searchQuery.toLowerCase();

    // Convert all fields to strings and check for partial matches
    return (
      name.id.toString().toLowerCase().includes(query) ||
      name.arabic.toLowerCase().includes(query) ||
      name.englishName.toLowerCase().includes(query) ||
      name.englishMeaning.toLowerCase().includes(query) ||
      name.banglaName.toLowerCase().includes(query) ||
      name.banglaMeaning.toLowerCase().includes(query) ||
      (name.audioUrl && name.audioUrl.toLowerCase().includes(query))
    );
  });

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % filteredNames.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + filteredNames.length) % filteredNames.length);
  };

  return (
    <ViewContext.Provider
      value={{
        viewType,
        setViewType,
        currentIndex,
        setCurrentIndex,
        handleNext,
        handlePrev,
        searchQuery,
        setSearchQuery,
        filteredNames,
      }}
    >
      {children}
    </ViewContext.Provider>
  );
}

export function useView() {
  const context = useContext(ViewContext);
  if (!context) {
    throw new Error("useView must be used within a ViewProvider");
  }
  return context;
}
