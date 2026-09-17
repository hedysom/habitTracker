import { Button } from "./Button";

export default function HabitsList() {
  const habits = [
    { id: 1, name: "wiw" },
    { id: 2, name: "wow" },
    { id: 3, name: "wuw" },
  ];
  if (habits.length === 0) {
    return (
      <p className="text-center text-zinc-500 py-12">
        No habits. Add one above to get started!
      </p>
    );
  }
  return (
    <div className="flex flex-col gap-3">
      {habits.map((habit) => (
        <h1 key={habit.id}>{habit.name}</h1>
      ))}
    </div>
  );
}