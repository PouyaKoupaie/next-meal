import Link from "next/link";
import style from "./page.module.css";
import MealsGrid from "@/components/meals/MealsGrid";
import { getMeals } from "@/lib/meals";
import { Suspense } from "react";
import type { Metadata } from 'next'

export const metadata:Metadata = {
  title: "Meals",
  description: "Discover and share delicious meals",
}

async function Meals() {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
}
export default async function MealsPage() {
  return (
    <>
      <header className={style.header}>
        <h1>
          Delicious meals, created{" "}
          <span className={style.highlight}> by you </span>
        </h1>
        <p>
          Choose your favorite recipe and cook it yourself. It is easy and fun!
        </p>
        <p className={style.cta}>
          <Link href="./meals/share">Share your recipe</Link>
        </p>
      </header>
      <main className={style.main}>
        <Suspense
          fallback={<p className={style.loading}>fetching meals ...</p>}
        >
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
