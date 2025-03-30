import Image from "next/image";
import style from "./page.module.css";
import { getMeal } from "@/lib/meals";
import { notFound } from "next/navigation";
const MealDetail = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const meal = getMeal(id);
  if (!meal) {
    notFound();
  }
  meal.instructions = meal.instructions.replace(/<[^>]+>/g, "<br />");
  return (
    <>
      <header className={style.header}>
        <div className={style.image}>
          <Image src={meal.image} fill alt="" />
        </div>
        <div className={style.headerText}>
          <h1>{meal.title}</h1>
          <p className={style.creator}>
            by <a href={`mail to: ${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={style.summary}></p>
        </div>
      </header>
      <main>
        <p
          className={style.instructions}
          dangerouslySetInnerHTML={{ __html: meal.instructions }}
        ></p>
      </main>
    </>
  );
};

export default MealDetail;
