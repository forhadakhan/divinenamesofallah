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
        <section className="flex items-center justify-between p-4 sm:p-6 lg:p-8 2xl:p-12">
            <div className="flex items-center space-x-4">
                {/* View Options */}
                <ViewToggle />
            </div>
            <div className="flex items-center space-x-4">
                {/* Search Input */}
                <SearchInput />
                {/* Theme Toggle Selector */}
                <ThemeToggle />
            </div>
        </section>
    )
}
