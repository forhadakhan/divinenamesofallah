/**
 * FILE: components/ViewToggle.tsx
 * DESC: This file exports a component that allows users to toggle between different views of the names of Allah.
 */
"use client";

import { cn } from "@/lib/utils";
import { useView } from "@/context/ViewContext";
import { Button } from "@/components/ui/shadcn/button";
import { LayoutGridIcon, Rows3Icon, SquareDashedIcon } from "lucide-react";


export function ViewToggle() {
    const { viewType, setViewType } = useView();

    return (
        <div className="flex justify-center">
            <Button
                onClick={() => setViewType("single")}
                className={cn("rounded-none")}
                variant={"outline"}
                size="icon"
                title="Single View"
                disabled={viewType === "single"}
            >
                <SquareDashedIcon className="w-6 h-6" />
            </Button>
            <Button
                onClick={() => setViewType("grid")}
                className={cn("rounded-none")}
                variant={"outline"}
                size="icon"
                title="Grid View"
                disabled={viewType === "grid"}
            >
                <LayoutGridIcon className="w-6 h-6" />
            </Button>
            <Button
                onClick={() => setViewType("list")}
                className={cn("rounded-none")}
                variant={"outline"}
                size="icon"
                title="List View"
                disabled={viewType === "list"}
            >
                <Rows3Icon className="w-6 h-6" />
            </Button>
        </div>
    );
}