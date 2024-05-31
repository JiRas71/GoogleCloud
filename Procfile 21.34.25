# Použijte oficiální obraz Node.js
FROM node:14

# Nastavte pracovní adresář
WORKDIR /app

# Zkopírujte soubor package.json a package-lock.json (pokud existuje)
COPY package*.json ./

# Nainstalujte závislosti
RUN npm install

# Zkopírujte zbytek zdrojového kódu aplikace
COPY . .

# Postavte aplikaci pro produkční prostředí
RUN npm run build

# Nainstalujte server serve globálně
RUN npm install -g serve

# Nastavte výchozí příkaz pro spuštění aplikace
CMD ["serve", "-s", "build"]

# Exponujte port, na kterém bude aplikace dostupná
EXPOSE 5000