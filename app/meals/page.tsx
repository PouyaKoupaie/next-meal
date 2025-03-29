import Link from "next/link";
import style from "./page.module.css";
import MealsGrid from "@/components/meals/MealsGrid";
import { getMeals } from "@/lib/meals";
export default async function Meals() {
  const meals = await getMeals();
  return (
    <>
      <header className={style.header}>
        Delicious meals, created{" "}
        <span className={style.highlight}> by you </span>
      </header>
      <p>
        Choose your favorite recipe and cook it yourself. It is easy and fun!
      </p>
      <p className={style.cta}>
        <Link href="./meals/share">Share your recipe</Link>
      </p>
      <main className={style.main}>
        <MealsGrid meals={meals} />
      </main>
    </>
  );
}
