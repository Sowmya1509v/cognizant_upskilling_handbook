SELECT u.full_name AS organizer_name, 
       COUNT(e.event_id) AS event_count,
       e.status
FROM Events e
JOIN Users u ON e.organizer_id = u.user_id
GROUP BY e.organizer_id, e.status;
