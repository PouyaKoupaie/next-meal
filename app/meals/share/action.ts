"use server";

import { addMeal } from "@/lib/meals";
import { redirect } from "next/navigation";

export async function shareMeal(formData: FormData) {
  const meal = {
    title: formData.get("title") as string,
    summary: formData.get("summary") as string,
    instructions: formData.get("instructions") as string,
    image: formData.get("image") as string,
    creator: formData.get("name") as string,
    creator_email: formData.get("email") as string,
  };
  await addMeal(meal);
  redirect('/meals')
}
