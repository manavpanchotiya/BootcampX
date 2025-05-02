const { Pool } = require("pg");

const pool = new Pool({
  user: "development",
  password: "development",
  host: "localhost",
  database: "bootcampx",
});

const query1 = `
    SELECT DISTINCT teachers.name AS teacher, cohorts.name AS cohort
    FROM assistance_requests
    JOIN students ON assistance_requests.student_id = students.id
    JOIN cohorts ON students.cohort_id = cohorts.id
    JOIN teachers ON assistance_requests.teacher_id = teachers.id
    WHERE cohorts.name LIKE $1;
    `;
const values = [`%${process.argv[2] || 'JUL02'}%`];

pool
  .query(query1, values)
  .then((res) => {
    res.rows.forEach(row => {
      console.log(`${row.cohort} : ${row.teacher}`);
    });
  })
  .catch((err) => console.error("query error", err.stack));