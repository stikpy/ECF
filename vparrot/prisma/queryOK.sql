CREATE TABLE CarPosts (
  id SERIAL PRIMARY KEY NOT NULL,
  title VARCHAR(255) NOT NULL,
  imageUrl VARCHAR(255),
  description TEXT NOT NULL,
  price INT NOT NULL
);

CREATE TABLE testimonials (
    id SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(255) NOT NULL,
    date DATE NOT NULL,
    rating INT NOT NULL,
    message VARCHAR(255)
);


INSERT INTO "users"(email, password, lastname, firstname, role) VALUES
('vincent@parrot.com', '1Garage2Folie!', 'Parrot', 'Vincent', 'ADMIN')


INSERT INTO "carPosts" (title , description , price, km, year) VALUES
('BMW', 'Série 3',  15000, 60000, 2019)

INSERT INTO "testimonials" (name, rating, message, "isValidated")
VALUES
  ('Alice', 5, 'Excellent service, je recommande vivement !', true),
  ('Bob', 4, 'Le personnel est très compétent et sympathique.', true),
  ('David', 4, 'Un bon endroit pour acheter des voitures d.', true),
  ('Élise', 4, 'Le service client était exceptionnel.', true),
  ('Hugo', 5, 'Le garage a une grande sélection de voitures.',true),
  ('Inès', 4, 'Les prix sont raisonnables.', true),
  ('Jules', 4, 'Je suis satisfait de mon achat.', true),
  ('Léa', 5, 'Je suis très contente de mon expérience.', true),
  ('Mélissa', 5, 'Je suis très satisfaite de mon achat.', true),
  ('Nathan', 5, 'Je suis très satisfait de mon achat.', true),
  ('Océane', 5, 'Je suis très contente de mon expérience.', true),
  ('Pierre', 5, 'Je suis très content de mon achat.', true),
  ('Quentin', 5, 'Je suis très satisfait de mon achat.', true),
  ('Raphaël', 5, 'Je suis très content de mon achat.', true),
  ('Sara', 5, 'Je suis très satisfaite de mon achat.', true),
  ('Théo', 5, 'Je suis très content de mon achat.', true),
  ('Ulysse', 5, 'Je suis très satisfait de mon achat.', true),
  ('Victor', 5, 'Je suis très content de mon achat.', true),
  ('Wendy', 5, 'Je suis très satisfaite de mon achat.', true),
  ('Xavier', 5, 'Je suis très content de mon achat.', true),
  ('Yann', 5, 'Je suis très satisfait de mon achat.', true),
  ('Zoé', 5, 'Je suis très contente de mon achat.', true);

INSERT INTO "OpeningHours" (day, "timeSlots")VALUES

  ('lundi', '{"9:00-12:00", "14:00-19:30"}'),
  ('mardi', '{"9:00-12:00", "14:00-19:30"}'),
  ('mercredi', '{"9:00-12:00", "14:00-19:30"}'),
  ('jeudi', '{"9:00-12:00", "14:00-19:30"}'),
  ('vendredi', '{"9:00-12:00", "14:00-19:30"}'),
  ('samedi', '{"9:00-12:00"}'),
  ('dimanche', '[]');



INSERT INTO "carPosts" (title, "imageUrl", description, price, km, year, status, "userId")
VALUES
  ('BMW Série 3', 'https://images.example.com/car1.jpg', 'Une BMW Série 3 en excellent état.', 15000, 60000, 2019, 'en ligne', 1),
  ('Toyota Camry', 'https://images.example.com/car2.jpg', 'Une Toyota Camry spacieuse et confortable.', 12000, 55000, 2020, 'en ligne', 1),
  ('Volkswagen Golf', 'https://images.example.com/car3.jpg', 'Une Volkswagen Golf économique en carburant.', 10000, 70000, 2018, 'en ligne', 1),
  ('Ford Focus', 'https://images.example.com/car4.jpg', 'Une Ford Focus compacte et agile.', 9000, 50000, 2020, 'en ligne', 1),
  ('Honda Civic', 'https://images.example.com/car5.jpg', 'Une Honda Civic fiable et économique.', 11000, 65000, 2019, 'en ligne', 1);