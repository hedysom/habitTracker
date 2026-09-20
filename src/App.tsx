import { Header } from "./components/Header"
import { HabitForm } from "./components/HabitForm"
import HabitsList from "./components/HabitsList"
import { useState } from "react"
import type { Habit } from "./components/HabitsList"

export default function App(){

  const [ habits, setHabits ] = useState<Habit>([])

  function addHabit(name : string){
    console.log(name)
  }

  return  (
  <div className="max-w-2xl mx-auto p-4 flex flex-col gap-4">
    <Header/>
    <HabitForm addHabit={addHabit}/>
    <HabitsList habits = {habits}/>
  </div>
  )
}