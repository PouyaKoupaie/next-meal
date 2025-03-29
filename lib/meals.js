import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";
import fs from "node:fs";
const db = sql("meals.db");

export async function getMeals() {
  // Simulate a delay of 1 second
  await new Promise((resolve) => setTimeout(resolve, 1000));
  // Uncomment the line below to use the database
  // throw new Error('Database connection failed')
  return db.prepare("SELECT * FROM meals").all();
}

export function getMeal(id) {
  // Simulate a delay of 1 second
  return db.prepare("SELECT * FROM meals WHERE id = ?").get(id);
}

export async function addMeal(meal) {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);

  const extension = meal.image.name.split(".").pop();
  const fileName = `${meal.slug}.${extension}`;
  const stream = fs.createWriteStream(`public/images/${fileName}`);
  const bufferedImage = await meal.image.arrayBuffer();
  stream.write(Buffer.from(bufferedImage), (err) => {
    if (err) {
      throw new Error("Failed to write image to file system");
    }
  });
  meal.image = `/images/${fileName}`;
  db.prepare(
    `INSERT INTO meals(title, summary, instructions, creator, creator_email, image, slug)
    VALUES (         
        @title,
        @summary,
        @instructions,
        @creator,
        @creator_email,
        @image,
        @slug
    )`
  ).run(meal);
}
