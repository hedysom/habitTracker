import { Button } from "./Button";

export default function HabitsList() {
  const habits = [
    { id: "fnas,d", name: "wiw" },
    { id: "jflkrt", name: "wow" },
    { id: "ksagfj", name: "wuw" },
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
        <HabitItem key={habit.id} habit={habit} />
      ))}
    </div>
  );
}

type HabitItemsProps = {
  habit: { id: string; name: string };
};

function HabitItem({ habit }: HabitItemsProps) {
  return (
    <div className="rounded-x1 bg-zinc-800 p-4 flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <span className="font-medium">{habit.name}</span>
        <span className="text-sm text-amber-400"> Streak 3 </span>
      </div>
    </div>
  );
}
