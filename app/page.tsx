/**
 * FILE: app/page.tsx
 * DESC: This file exports the main page component that displays the names of Allah based on the view type.
 */

import { namesOfAllah } from "@/lib/data/names";
import Manager from "@/components/design/Manager";
import { RawTable } from "@/components/design/ListView";


export default function Home() {

  return (
    <main className="min-h-screen w-full md:p-8">
      <RawTable names={namesOfAllah} className="sr-only" /> {/* This is for screen readers */}
      <Manager />
    </main>
  );
}
