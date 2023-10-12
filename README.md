

Instructions pour Exécuter Localement avec la Base de Données Railway
Ouvrez un terminal et démarrez un serveur PostgreSQL. Utilisez la commande suivante en remplaçant <utilisateur>, <hôte> et <base_de_données> par les informations appropriées (si nécessaire) :

//
psql -U <utilisateur> -h <hôte> -d <base_de_données>


Clonez le référentiel GitHub de votre projet en utilisant Git :

//
git clone https://github.com/stikpy/ECF.git


Accédez au répertoire du projet ECF :

//
cd ECF

Accédez au répertoire "vparrot" :
//
cd vparrot
Installez les dépendances du projet en utilisant l'une des commandes suivantes en fonction de votre gestionnaire de paquets (choisissez celle qui convient à votre projet) :

npm :
npm install

yarn :
yarn

Depuis le dossier "ECF", générez les fichiers Prisma en utilisant la commande suivante. Assurez-vous que votre fichier schema.prisma est dans le répertoire spécifié :


npx prisma generate --schema=./vparrot/prisma/schema.prisma

Créez un fichier .env à la racine de votre projet et ajoutez la variable d'environnement suivante pour spécifier la URL de la base de données PostgreSQL de Railway :

DATABASE_URL="postgresql://postgres:CMH4AgudPQuJEdWDM2Nl@containers-us-west-41.railway.app:6351/railway"
Assurez-vous que les informations de connexion sont correctes.

Maintenant, vous pouvez démarrer votre application localement. Assurez-vous que vous êtes toujours dans le répertoire "vparrot" et exécutez :


npm start
Pour accéder à l'interface d'administration depuis le site, utilisez les informations suivantes :

Email : vincent@parrot.com
Mot de passe : 1Garage2Fou
