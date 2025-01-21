/**
 * FILE: components/SearchInput.tsx
 * DESC: This file exports a component that allows users to search for names of Allah by name or meaning.
 */
"use client";

import { cn } from "@/lib/utils";
import { useView } from "@/context/ViewContext";
import { Input } from "@/components/ui/shadcn/input";



export function SearchInput({ className }: { className?: string }) {
    const { searchQuery, setSearchQuery } = useView();

    return (
        <div className={cn("flex justify-center", className)}>
            <Input
                type="text"
                placeholder="Search ..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full max-w-md px-4 py-2 bg-white dark:bg-gray-800 rounded-none"
            />
        </div>
    );
}
