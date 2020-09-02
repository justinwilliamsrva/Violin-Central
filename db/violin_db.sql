DROP DATABASE IF EXISTS violin_db;

CREATE DATABASE violin_db;

Create Table exercises(
id INT auto_increment,
exercise DECIMAL(3,1),
book_title VARCHAR(100),
author_composer VARCHAR(100),
primary_positions VARCHAR(100),
secondary_positions VARCHAR(100),
primary_bowing VARCHAR(100),
secondary_bowing VARCHAR(100),
musical_key VARCHAR(100),
difficulty VARCHAR(100),
focus VARCHAR(100),
type VARCHAR(100),
image VARCHAR(100),
link VARCHAR(100),
book_description VARCHAR(500),
CreatedAt DATE,
UpdatedAt DATE,
PRIMARY Key(id)

);

INSERT INTO Exercises (exercise, book_title, author_composer, primary_positions, secondary_positions, primary_bowing, secondary_bowing, key, difficulty, focus, type, image, link, book_description) VALUES (1, "42 Etudes for Violin", "Kreutzer, Rodolphe", "1","2,3,4", "legato", "null", "A Minor", "Medium", "Tone", "Etude", "null", "null", "null")
INSERT INTO Exercises (exercise, book_title,author_composer, primary_positions, secondary_positions, primary_bowing, secondary_bowing, key, difficulty, focus, type, image, link, book_description) VALUES (2, "42 Etudes for Violin", "Kreutzer, Rodolphe", "1","2,3,4", "legato", "null", "C Major", "Medium", "Facility", "Etude", "null", "null", "null")
INSERT INTO Exercises (exercise, book_title, author_composer, primary_positions, secondary_positions, primary_bowing, secondary_bowing, key, difficulty, focus, type, image, link, book_description) VALUES (3, "42 Etudes for Violin", "Kreutzer, Rodolphe", "1", "2,3,4,5,5+", "detache", "null", "C Major ", "Medium", "Facility", "Etude", "null", "null" ,"null")

INSERT INTO Teachers (first_name, last_name, city, state, email) VALUES ("Justin", "Williams", "Richmond", "Virginia", "justin.williams2@me.com");
INSERT INTO Teachers (first_name, last_name, city, state, email) VALUES ("Katie", "Woolridge", "Richmond", "Virginia", "katharine.wooldridge@gmail.com");

