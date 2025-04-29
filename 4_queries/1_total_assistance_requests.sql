SELECT COUNT(*) AS total_assistance,teachers.name
FROM teachers
JOIN assistance_requests ON teachers.id = assistance_requests.teacher_id
WHERE teachers.name = 'Waylon Boehm'
GROUP BY teachers.name;