-- Insertion des utilisateurs
INSERT INTO users (email, password, firstname, lastname, role)
VALUES
  ("user1@example.com", "password1", "John", "Doe", "ADMIN"),
  ("user2@example.com", "password2", "Jane", "Smith", "USER"),
  ("user3@example.com", "password3", "Bob", "Johnson", "USER"),
  ("user4@example.com", "password4", "Alice", "Brown", "USER"),
  ("user5@example.com", "password5", "Eve", "Williams", "USER");

-- Insertion des annonces de voitures
INSERT INTO "carPosts" (title, "imageUrl", description, price, km, year, status, "userId")
VALUES
  ('BMW Série 3', 'https://images.example.com/car1.jpg', 'Une BMW Série 3 en excellent état.', 15000, 60000, 2019, 'en ligne', 1),
  ('Toyota Camry', 'https://images.example.com/car2.jpg', 'Une Toyota Camry spacieuse et confortable.', 12000, 55000, 2020, 'en ligne', 3),
  ('Volkswagen Golf', 'https://images.example.com/car3.jpg', 'Une Volkswagen Golf économique en carburant.', 10000, 70000, 2018, 'en ligne', 3),
  ('Ford Focus', 'https://images.example.com/car4.jpg', 'Une Ford Focus compacte et agile.', 9000, 50000, 2020, 'en ligne', 3),
  ('Honda Civic', 'https://images.example.com/car5.jpg', 'Une Honda Civic fiable et économique.', 11000, 65000, 2019, 'en ligne', 5);

-- Insertion des horaires d'ouvertureINSERT INTO "OpeningHours" (day, "timeSlots")
VALUES
  ('lundi', '{"9:00-12:00", "14:00-19:30"}'),
  ('mardi', '{"9:00-12:00", "14:00-19:30"}'),
  ('mercredi', '{"9:00-12:00", "14:00-19:30"}'),
  ('jeudi', '{"9:00-12:00", "14:00-19:30"}'),
  ('vendredi', '{"9:00-12:00", "14:00-19:30"}'),
  ('samedi', '{"9:00-12:00"}'),
  ('dimanche', '[]');

-- Insertion des témoignages (testimonials)
INSERT INTO testimonials (name, rating, message, "isValidated", status)
VALUES
  ('Alice', 5, 'Excellent service, je recommande vivement !', true, 'En ligne'),
  ('Bob', 4, 'Le personnel est très compétent et sympathique.', true, 'En ligne'),
  ('David', 3, 'Un bon endroit pour acheter des voitures d.', true, 'En ligne'),
  ('Élise', 4, 'Le service client était exceptionnel.', true, 'En ligne'),
  ('Hugo', 5, 'Le garage a une grande sélection de voitures.', true, 'En ligne'),
  ('Inès', 3, 'Les prix sont raisonnables.', true, 'En ligne'),
  ('Jules', 4, 'Je suis satisfait de mon achat.', true, 'En ligne');

-- Insertion du contenu textuel (textContent)
INSERT INTO TextContent (slug, title, content, imageUrl)
VALUES
  ('header-text', 'À propos de notre garage', 'Bienvenue chez Garage AutoPro, votre source de confiance pour des voitures de qualité et un service exceptionnel. Nous sommes fiers de vous offrir un large choix de véhicules et un personnel dévoué pour vous aider à trouver la voiture parfaite.', 'https://example.com/image1.jpg'),
  ('presentation-2', 'Notre histoire', 'Depuis plus de 20 ans, Garage AutoPro fournit à nos clients des véhicules fiables et abordables. Notre équipe experte en automobiles est là pour répondre à vos besoins et vous guider tout au long du processus .', 'https://example.com/image2.jpg'),
  ('presentation-3', 'Nos services', 'Chez Garage AutoPro, nous offrons une gamme complète de services, de la vente de voitures  et à la réparation. Nous nous engageons à vous fournir la meilleure expérience automobile possible.', 'https://example.com/image3.jpg');

-- Insertion des services
SELECT * FROM Services;