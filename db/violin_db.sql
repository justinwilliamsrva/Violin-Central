DROP DATABASE IF EXISTS violin_db;

CREATE DATABASE violin_db;

Use violin_db

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

