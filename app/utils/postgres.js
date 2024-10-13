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
    const client = await pool.connect();
    try {
       const res = await client.query("SELECT * FROM candidate_info");
       const data = res.rows;
       
       console.log("fetched data:",data);

       return data;

    } catch (error) {
       console.error("Failed to fetch data from the database resumeBank");
    } finally {
       client.release();
    }
}

//calling fetchDataFromDb and handling its result
fetchDataFromDB().then((data) => {
    console.log("fetched data:", data);


})
.catch((error) => {
    console.error("Failed to fetch data from the database", error);
    });



const insertDataToDB = async (data) => {
    const client = await pool.connect();
    try {
       const res = await client.query("INSERT INTO candidate_info (fname, lname, email, phone, address, province, link) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *", [data.fname, data.lname, data.email, data.phone, data.address, data.province, data.link]);
       console.log("inserted data:", res.rows[0]);
       return res.rows[0];
    } catch (error) {
       console.error("Failed to insert data to the database");
    } finally {
       client.release();
    }
}

export default pool;