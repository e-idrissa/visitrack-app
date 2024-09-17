import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const dateFormat = (date: string) => {
  const dateObject = new Date(date);
  // const day = `${dateObject.toLocaleString().split(",")[0]}`;
  const day = `${dateObject.toDateString()}`;
  const hours = dateObject.getHours();
  const minutes = dateObject.getMinutes();

  return `${day}, ${hours}:${minutes}`;
};