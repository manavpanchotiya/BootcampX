SELECT COUNT(*) AS total_assistance,students.name
FROM students
JOIN assistance_requests ON students.id = assistance_requests.student_id
WHERE students.name = 'Elliot Dickinson'
GROUP BY students.name;