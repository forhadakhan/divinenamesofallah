/**
 * FILE: components/design/SingleView.tsx
 * DESC: A single view of a name card with swipe gestures for mobile.
 */
"use client";

import { useSwipeable } from "react-swipeable";
import { useView } from "@/context/ViewContext";
import NameCard from "@/components/design/NameCard";
import type { NameOfAllah } from "@/lib/data/names";
import { Button } from "@/components/ui/shadcn/button";
import { ChevronRightIcon, ChevronLeftIcon } from "lucide-react";


interface SingleViewProps {
  name: NameOfAllah;
}


export default function SingleView({ name }: SingleViewProps) {
  const { handleNext, handlePrev } = useView();

  // Swipe handlers for mobile gestures
  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => handleNext(), // Swipe left to go to the next name
    onSwipedRight: () => handlePrev(), // Swipe right to go to the previous name
    onSwipedUp: () => handleNext(), // Swipe up to go to the next name
    onSwipedDown: () => handlePrev(), // Swipe down to go to the previous name
    trackMouse: true, // Enable mouse swipe support (optional)
  });

  return (
    <section {...swipeHandlers} className="touch-none">
      <NameCard
        name={name}
        large
        className="flex flex-col items-center justify-center"
      />
      <div className="flex justify-center mt-8 space-x-4">
        <Button variant={"outline"} onClick={handlePrev} title="Previous">
          <ChevronLeftIcon />
        </Button>
        <Button variant={"outline"} onClick={handleNext} title="Next">
          <ChevronRightIcon />
        </Button>
      </div>
    </section>
  );
}
