CREATE TABLE CarPosts (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255),
  imageUrl VARCHAR(255),
  description TEXT,
  price INT
);

CREATE TABLE testimonials (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    date DATE,
    rating INT,
    message VARCHAR(255)
);


INSERT INTO users (email, password, lastname, firstname, role) VALUES
('vincent@parrot.com', '1Garage2Folie!', 'Parrot', 'Vincent', 'ADMIN')


INSERT INTO "carPosts" (brand, model, version, price, km, year, status, "userId") VALUES
('BMW', 'Série 3', 'Berline', 15000, 60000, 2019, 'en ligne', 1)

INSERT INTO testimonials (name, rating, message, "isValidated", status)
VALUES
  ('Alice', 5, 'Excellent service, je recommande vivement !', true, 'En ligne'),
  ('Bob', 4, 'Le personnel est très compétent et sympathique.', true, 'En ligne'),
  ('David', 4, 'Un bon endroit pour acheter des voitures d.', true, 'En ligne'),
  ('Élise', 4, 'Le service client était exceptionnel.', true, 'En ligne'),
  ('Hugo', 5, 'Le garage a une grande sélection de voitures.', true, 'En ligne'),
  ('Inès', 4, 'Les prix sont raisonnables.', true, 'En ligne'),
  ('Jules', 4, 'Je suis satisfait de mon achat.', true, 'En ligne');

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