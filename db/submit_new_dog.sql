insert into dogs (user_id, name, description, reason, interested_in, breed, age, gender, img1, img2, img3, img4, img5, img6, radius)
values($1, $2, null, 'Play dates', 'Both', $3, $4, $5, null, null, null, null, null, null, 20)
returning *;