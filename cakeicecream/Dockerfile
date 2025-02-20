# Utiliser une image Node.js comme base
FROM node:18

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier package.json et package-lock.json en premier (pour optimiser le cache Docker)
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier tous les fichiers restants du projet
COPY . .

# Exposer le port (si nécessaire)
EXPOSE 3000

# Lancer l'application
CMD ["npm", "start"]
