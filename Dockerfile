FROM node:14

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN npm install

# Bundle app source
COPY . .

# Transpile TypeScript to JavaScript
RUN npm run build

# Command to run the application
CMD ["node", "dist/index.js"]
