/**
 * FILE: components/menu-bar.tsx
 * DESC: A menu bar component that contains the view toggle and theme toggle.
 */

import React from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import { ViewToggle } from "@/components/design/ViewToggle";
import { SearchInput } from "@/components/design/SearchInput";

export const MenuBar = () => {
    return (
        <section className="container mx-auto p-4 sm:p-6 lg:p-8 2xl:p-12">
            <div className="flex items-center justify-between my-2">
                <div className="flex items-center space-x-4">
                    {/* View Options */}
                    <ViewToggle />
                </div>
                <div className="flex items-center space-x-4">
                    {/* Search Input */}
                    <SearchInput className="hidden md:block" />
                    {/* Theme Toggle Selector */}
                    <ThemeToggle />
                </div>
            </div>
            <SearchInput className="md:hidden mt-4 mb-2 w-full" />
        </section>
    )
}
