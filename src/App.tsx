import { Header } from "./components/Header";
import { HabitForm } from "./components/HabitForm";
import HabitsList from "./components/HabitsList";
import { HabitProvider } from "./context/HabitProvider";
import { addWeeks, eachDayOfInterval, endOfWeek, startOfWeek } from "date-fns";
import { useState } from "react";

export default function App() {
  const [weekOffset, setWeekOffset] = useState(0);


  const week = addWeeks(new Date(), weekOffset);
  // could have used a state also for visibleDates but it can be derived from the state of the thing actually changing on the screen (avoid out of sync moments)
  const visibleDates = eachDayOfInterval({
    start: startOfWeek(week, { weekStartsOn: 1 }),
    end: endOfWeek(week, { weekStartsOn: 1 }),
  });

  return (
    <div className="max-w-2xl mx-auto p-4 flex flex-col gap-4">
      <HabitProvider>
        <Header
          visibleDates={visibleDates}
          onNext={() => setWeekOffset((o) => o + 1)}
          onPrev={() => setWeekOffset((o) => o - 1)}
        />
        <HabitForm />
        <HabitsList visibleDates={visibleDates} />
      </HabitProvider>
    </div>
  );
}
