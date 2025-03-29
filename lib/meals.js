import sql from 'better-sqlite3'
const db= sql('meals.db')

export async function getMeals() {
    // Simulate a delay of 1 second
    await new Promise((resolve => setTimeout(resolve, 1000)))
    // Uncomment the line below to use the database
    // throw new Error('Database connection failed')
    return db.prepare('SELECT * FROM meals').all()
}