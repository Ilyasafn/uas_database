import mysql from "mysql2";

const database = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "uas_database",
});

export default database.promise();
