FROM node:20-alpine

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package*.json ./
RUN npm install

# Bundle app source
COPY . .

# Build the TypeScript code
RUN npm run build

# Expose port (Hugging Face Spaces default)
EXPOSE 7860

# Command to run the app
CMD [ "npm", "start" ]
