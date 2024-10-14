// Import your pool configuration
import { Pool } from "pg";

// Initialize the pool
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "resumeBank",
  password: "admin",
  port: 5432,
});
pool.connect()
    .then(() => console.log("Connected to the database"))
    .catch((error) => console.error("Failed to connect to the database", error));

// API route to fetch data from the database
export default async function handler(req, res) {
    if (req.method === 'GET') {
      try {
        const result = await pool.query("SELECT * FROM candidate_info");
        res.status(200).json(result.rows);
        console.log(result.rows)
      } catch (error) {
        console.error("Failed to fetch data from the database:", error.message);
        res.status(500).json({ error: "Database query failed" });
      }
    } else if (req.method === 'POST') {
      // Handle insertion of data if a POST request is made
      const { fname, lname, email, phone, address, province, link, salary } = req.body;
      
      try {
        // check if candidate applied already using email address
        const searchResult = await pool.query("SELECT * FROM candidate_info WHERE email = $1", [email]);
        if (searchResult.rows.length > 0) {
            return res.status(400).json({ message: "You have already applied for this offer" });
            }
        //insert the new candidate data 
        const result = await pool.query(
          "INSERT INTO candidate_info (fname, lname, email, phone, address, province, link, salary) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *",
          [fname, lname, email, phone, address, province, link, salary]
        );
        res.status(201).json(result.rows[0]);
      } catch (error) {
        console.error("Failed to insert data into the database:", error.message);
        res.status(500).json({ error: "Database insertion failed" });
      }
    }
  }