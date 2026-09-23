import { parseISO } from "date-fns/parseISO";
import { useEffect, useState } from "react";

export function useLocalStorage<T>(key: string, initialValue: T) {
  // If i pass a function to useCase to check if there's anything already it will check only the first time the component is rendered
  const [storedValue, setStoredValue] = useState<T>(() => {
    //get data out of localStorage
    try {
      const item = localStorage.getItem(key);
      if (item === null) return initialValue;

      return JSON.parse(item, dateReviver);
    } catch {
      return initialValue;
    }
  });

  //store data in localStorage
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(storedValue));
  }, [storedValue, key]);

  return [storedValue, setStoredValue] as const;
}

function dateReviver(_key: string, value: unknown) {
  if (typeof value === "string" && /^\d{4}-\d{2}-\d{2}T/.test(value)) {
    return parseISO(value);
  }
  return value;
}
