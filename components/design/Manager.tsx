/**
 * FILE: components/design/Manager.tsx
 * DESC: This file manages view type.
 */
"use client";

import { useView } from "@/context/ViewContext";
import GridView from "@/components/design/GridView";
import ListView from "@/components/design/ListView";
import SingleView from "@/components/design/SingleView";


export function Manager() {
    const { viewType, currentIndex, filteredNames } = useView();

    return (
        <main className="min-h-screen w-full md:p-8">

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
        </main>
    );
}

export default Manager;
