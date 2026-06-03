FROM node:20-alpine

# Create app directory
WORKDIR /app

# Copy server dependency files from the server directory
COPY server/package*.json ./

# Install dependencies
RUN npm install

# Copy all server source code
COPY server/ .

# Fix tsc permissions and build the TypeScript code
RUN chmod +x node_modules/.bin/tsc
RUN npm run build

# Expose the default Hugging Face port
EXPOSE 7860

# Start the application
CMD [ "npm", "start" ]
