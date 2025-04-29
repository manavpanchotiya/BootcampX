SELECT cohorts.name AS cohort, count(assignment_submissions.*) AS total_submissions
FROM cohorts
JOIN students ON cohorts.id = students.cohort_id
JOIN assignment_submissions ON students.id = assignment_submissions.student_id
GROUP BY cohorts.name IS NULL
ORDER BY total_submissions DESC;