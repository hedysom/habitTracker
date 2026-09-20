import { Header } from "./components/Header";
import { HabitForm } from "./components/HabitForm";
import HabitsList from "./components/HabitsList";
import { useState } from "react";
import type { Habit } from "./components/HabitsList";

export default function App() {
  const [habits, setHabits] = useState<Habit>([]);

  function addHabit(name: string) {
    // to update the habits we need to return a new array of habits as React
    // compares habits === habits which is true as the reference to the same array
    setHabits((curr) => [...curr, { id: crypto.randomUUID(), name }]); // curr to use the function version, it's impossible to add multiple times without it with existin value of state
  }

  function deleteHabit(id : string){
    setHabits(curr => curr.filter(h => h.id !== id))
  }

  return (
    <div className="max-w-2xl mx-auto p-4 flex flex-col gap-4">
      <Header />
      <HabitForm addHabit={addHabit} />
      <HabitsList deleteHabit = {deleteHabit} habits={habits} />
    </div>
  );
}
