const { Pool } = require("pg");

const pool = new Pool({
  user: "development",
  password: "development",
  host: "localhost",
  database: "bootcampx",
});

const query1 = `
    SELECT students.id as student_id, students.name as name, cohorts.name as cohort
    FROM students
    JOIN cohorts ON cohorts.id = cohort_id
    WHERE cohorts.name LIKE $1
    LIMIT $2;
`;

const values = [`%${process.argv[2]}%`, process.argv[3] || 5];
pool
  .query(query1, values)
  .then((res) => {
    res.rows.forEach((user) => {
      console.log(
        `${user.name} has an id of ${user.student_id} and was in the ${user.cohort} cohort`
      );
    });
  })
  .catch((err) => console.error("query error", err.stack));