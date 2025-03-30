"use server";

import { addMeal } from "@/lib/meals";
import { redirect } from "next/navigation";
function isInvalidInput(input: unknown): boolean {
  return typeof input !== "string" || input.trim().length === 0;
}
export async function shareMeal(
  prevState: { message: string | null },
  formData: FormData
) {
  const meal = {
    title: formData.get("title") as string,
    summary: formData.get("summary") as string,
    instructions: formData.get("instructions") as string,
    image: formData.get("image"),
    creator: formData.get("name") as string,
    creator_email: formData.get("email") as string,
  };
  if (
    isInvalidInput(meal.title) ||
    isInvalidInput(meal.summary) ||
    isInvalidInput(meal.instructions) ||
    isInvalidInput(meal.creator) ||
    isInvalidInput(meal.creator_email) ||
    !meal.creator_email.includes("@")
  ) {
    return {
      message: "Invalid input",
    };
  }
  if (!(meal.image instanceof File)) {
    return { message: "Please upload a valid image file." };
  }
  await addMeal(meal);
  redirect("/meals");
}
