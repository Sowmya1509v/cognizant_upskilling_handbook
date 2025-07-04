SELECT u.full_name, u.email
FROM Users u
WHERE u.registration_date >= CURDATE() - INTERVAL 30 DAY
AND u.user_id NOT IN (
  SELECT user_id FROM Registrations
);
