-- Active: 1693216234410@@127.0.0.1@5432@ecf
CREATE TABLE Car (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255),
  imageUrl VARCHAR(255),
  description TEXT,
  price INT
);

CREATE TABLE testimonial (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    date DATE,
    rating INT,
    message VARCHAR(255)
);

INSERT INTO testimonial (id, name, date, rating, message) VALUES
(1, 'Jean Dupont', '2023-08-01 00:00:00', 5, 'Service exceptionnel ! J''ai acheté ma voiture ici et l''expérience a été fluide du début à la fin.'),
(2, 'Marie Martin', '2023-07-05 00:00:00', 4, 'La réparation de ma voiture a été rapide et à un prix raisonnable.'),
(3, 'Pierre Lemoine', '2023-07-15 00:00:00', 4.5, NULL),
(4, 'Emilie Bernard', '2023-06-20 00:00:00', 5, 'J''ai acheté des pièces détachées pour ma voiture. Bon rapport qualité-prix et personnel serviable.');

INSERT INTO cars (title, imageUrl, description, price, slug) VALUES
('Voiture de sport rouge', 'https://images.pexels.com/photos/2684219/pexels-photo-2684219.jpeg?auto=compress&cs=tinysrgb&w=1200', 'Voiture de sport rouge avec des roues noires', 29000, '1'),
('Nissan GTR de nuit', 'https://images.pexels.com/photos/4674344/pexels-photo-4674344.jpeg?auto=compress&cs=tinysrgb&w=1200', 'Nissan GTR de nuit avec des lumières bleues', 48000, '2'),
('Mini Cooper', 'https://images.pexels.com/photos/5660840/pexels-photo-5660840.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load', 'Mini Cooper de couleur verte', 17500, '3');


INSERT INTO users (email, password, lastname, firstname, role) VALUES
('Lea@test.com', 'leapdw', 'Dupont', 'Lea', 'admin') 

UPDATE testimonial SET validated = FALSE WHERE id = 1;


INSERT INTO testimonials (name, date, rating, message, "isValidated", status)
VALUES
  ('Alice', '2023-08-25T08:00:00.000Z', 5, 'Excellent service !', true, 'En ligne'),
  ('Bob', '2023-08-25T08:00:00.000Z', 4, 'Bonne expérience.', true, 'En ligne'),
  ('Charlie', '2023-08-25T08:00:00.000Z', 3, 'Service moyen.', false, 'À valider'),
  ('David', '2023-08-25T08:00:00.000Z', 5, 'Hautement recommandé !', true, 'En ligne'),
  ('Eve', '2023-08-25T08:00:00.000Z', 2, 'Pas satisfait.', false, 'À valider');


