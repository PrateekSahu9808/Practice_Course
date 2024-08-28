const sql = require("better-sqlite3");
const db = sql("meals.db");

// Create the table if it doesn't exist
db.prepare(
  `
  CREATE TABLE IF NOT EXISTS meals (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    slug TEXT NOT NULL UNIQUE,
    title TEXT NOT NULL,
    image TEXT NOT NULL,
    summary TEXT NOT NULL,
    instructions TEXT NOT NULL,
    creator TEXT NOT NULL,
    creator_email TEXT NOT NULL
  )
`
).run();

// Dummy data
const dummyMeals = [
  {
    title: "Juicy Cheese Burger",
    slug: "juicy-cheese-burger",
    image: "/images/burger.jpg",
    summary:
      "A mouth-watering burger with a juicy beef patty and melted cheese, served in a soft bun.",
    instructions: `
      1. Prepare the patty:
         Mix 200g of ground beef with salt and pepper. Form into a patty.

      2. Cook the patty:
         Heat a pan with a bit of oil. Cook the patty for 2-3 minutes each side, until browned.

      3. Assemble the burger:
         Toast the burger bun halves. Place lettuce and tomato on the bottom half. Add the cooked patty and top with a slice of cheese.

      4. Serve:
         Complete the assembly with the top bun and serve hot.
    `,
    creator: "John Doe",
    creator_email: "johndoe@example.com",
  },
  // ... other dummy meals
];

// Function to initialize data
function initData() {
  const insertStmt = db.prepare(`
    INSERT INTO meals (slug, title, image, summary, instructions, creator, creator_email)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `);

  dummyMeals.forEach(meal => {
    try {
      insertStmt.run(
        meal.slug,
        meal.title,
        meal.image,
        meal.summary,
        meal.instructions,
        meal.creator,
        meal.creator_email
      );
    } catch (err) {
      if (err.message.includes("UNIQUE constraint failed")) {
        console.warn(
          `Skipping meal with slug "${meal.slug}" due to duplicate.`
        );
      } else {
        console.error(
          `Failed to insert meal with slug "${meal.slug}": ${err.message}`
        );
      }
    }
  });
}

// Initialize the database
initData();
