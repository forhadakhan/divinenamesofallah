/**
 * FILE: app/page.tsx
 * DESC: This file exports the main page component that displays the names of Allah based on the view type.
 */
"use client";

import { MenuBar } from "@/components/menu-bar";
import { useView } from "@/context/ViewContext";
import GridView from "@/components/design/GridView";
import ListView from "@/components/design/ListView";
import SingleView from "@/components/design/SingleView";


export default function HomePage() {
  const { viewType, currentIndex, filteredNames } = useView();

  return (
    <>
      <MenuBar /> {/* Client component (as wrapped in ViewProvider) */}
      <div className="min-h-screen w-full max-w-full md:p-8">
        {/* View */}
        {filteredNames.length === 0 ? (
          <div className="text-center text-gray-600">No results found.</div>
        ) : (
          <>
            {viewType === "single" && (
              <SingleView name={filteredNames[currentIndex]} />
            )}
            {viewType === "grid" && <GridView names={filteredNames} />}
            {viewType === "list" && <ListView names={filteredNames} />}
          </>
        )}
      </div>
    </>
  );
}
