// import sql from 'sqlite3'

// const db = sql('meals.db')

// export async function getMeals (){
//     await new Promise ((resolve)=>setTimeout(resolve,2000))
//  return db.prepare('SELECT * FROM meals').all()
// }

const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Path to your database file
const dbPath = path.resolve(__dirname, 'meals.db');

// Open a database connection
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Error opening database:', err.message);
  } else {
    console.log('Connected to the database.');
  }
});

// Function to get meals
function getMeals() {
  return new Promise((resolve, reject) => {
    db.all('SELECT * FROM meals', [], (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
}

// Export the function
module.exports = { getMeals };
