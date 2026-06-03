FROM node:20-alpine

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package*.json ./
RUN npm install

# Bundle app source
COPY . .

# Fix tsc permissions and build
RUN chmod +x node_modules/.bin/tsc
RUN npm run build

# Expose port (Hugging Face Spaces default)
EXPOSE 7860

# Command to run the app
CMD [ "npm", "start" ]