/**
 * FILE: components/design/GridView.tsx
 * DESC: This file exports a component that displays the names of Allah in a grid view.
 */
import NameCard from "@/components/design/NameCard";
import type { NameOfAllah } from "@/lib/data/names";


interface GridViewProps {
  names: NameOfAllah[]
}

export default function GridView({ names }: GridViewProps) {
  return (
    <section className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
      {names.map((name) => (
        <NameCard key={name.id} name={name} />
      ))}
    </section>
  )
}

