import { Pool } from "pg";

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

const fetchDataFromDB = async () => {
    try {
       const res = await pool.query("SELECT * FROM candidate_info");
       const data = res.rows;
       console.log("Fetched data:", data);
       return data;
    } catch (error) {
       console.error("Failed to fetch data from the database:", error.message);
       throw error;  // propagate the error to higher-level handlers
    }
};

// calling fetchDataFromDb and handling its result
fetchDataFromDB()
    .then((data) => console.log("Fetched data:", data))
    .catch((error) => console.error("Failed to fetch data:", error));

export const insertDataToDB = async (data) => {
    try {
       const res = await pool.query(
           "INSERT INTO candidate_info (fname, lname, email, phone, address, province, link, salary) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *",
           [data.fname, data.lname, data.email, data.phone, data.address, data.province, data.link, data.salary]
       );
       console.log("Inserted data:", res.rows[0]);
       return res.rows[0];
    } catch (error) {
       console.error("Failed to insert data to the database:", error.message);
       throw error;  // propagate the error to higher-level handlers
    }
};

// calling insertDataToDB and handling its result
// const data2 = {
//     fname: "John",
//     lname: "Doe",
//     email: "s@s.com",
//     phone: "1234567890",
//     address: "123 Main St",
//     province: "ON",
//     link: "https://example.com/resume.pdf",
// };

// insertDataToDB(data2)
//     .then((data) => console.log("Inserted data:", data))
//     .catch((error) => console.error("Failed to insert data:", error));



export default pool;
