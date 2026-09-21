import { Header } from "./components/Header";
import { HabitForm } from "./components/HabitForm";
import HabitsList from "./components/HabitsList";
import { useState } from "react";
import type { Habit } from "./components/HabitsList";
import { isSameDay } from "date-fns";

export default function App() {
  const [habits, setHabits] = useState<Habit[]>([]);

  function addHabit(name: string) {
    // to update the habits we need to return a new array of habits as React
    // compares habits === habits which is true as the reference to the same array
    setHabits((curr) => [
      ...curr,
      { id: crypto.randomUUID(), name, completions: [] },
    ]); // curr to use the function version, it's impossible to add multiple times without it with existin value of state
  }

  function deleteHabit(id: string) {
    setHabits((curr) => curr.filter((h) => h.id !== id));
  }

  function toggleHabit(id: string, date: Date) {
    setHabits((curr) =>
      curr.map((h) => {
        if (h.id !== id) return h;

        const alreadyDone = h.completions.some((c) => isSameDay(c, date));
        const completions = alreadyDone
          ? h.completions.filter((c) => !isSameDay(c, date))
          : [...h.completions, date];

        return { ...h, completions };
      }),
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-4 flex flex-col gap-4">
      <Header />
      <HabitForm addHabit={addHabit} />
      <HabitsList
        deleteHabit={deleteHabit}
        toggleHabit={toggleHabit}
        habits={habits}
      />
    </div>
  );
}
