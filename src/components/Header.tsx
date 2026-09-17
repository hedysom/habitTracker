import { Button } from "./Button";

export function Header(){
  return <header className="flex items-center justify-between">
    <div className="flex flex-col gap-3">
      <h1 className="text-3xl font-bold">Habit Tracker</h1>
      <span className="text-zinc-402 text-sm">1 / 1 done today</span>
    </div>

    <div className="flex flex-col gap-3">
      <span className="text-zinc-402 text-sm">Sep 17 - Sep 18</span>
      <div className="flex items-center gap-5">
        <Button>Prev</Button>
        <Button>Next</Button>
      </div>
    </div>
  </header>
}