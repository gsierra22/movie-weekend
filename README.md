

## Description
I updated the app so that it could take movies from a database and update and post new movies. This meant creating a database in postico using the database.sql file. There were two tables and a junction table so this meant using a many to many relationship to connect the tables. Afterwards saga was utilized to create the get and post routes within the index.js file. A details page was created that would be accesses by clicking on a movie poster. By targeting the movie's id, the get route would get all of the information of the selected movie. Next a addMovie page was created where the user could input a title, genre, poster and description for a new movie and not only append it to the dom, but also add it to the database. I had an issue with posting the genres that was eventually resolved by setting the genre_id's event.target.value into a number.

Technologies used: React, Redux, PostgresSQL, Node, Express, Javascript, CSS