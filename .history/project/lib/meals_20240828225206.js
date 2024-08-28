const sql = require("better-sqlite3");
const db = sql("meals.db");

// Function to get all meals
export function getMeals() {
  return db.prepare("SELECT * FROM meals").all();
}
