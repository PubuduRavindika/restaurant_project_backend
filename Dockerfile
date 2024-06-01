FROM node:20.12.1

# Copy package.json and package-lock.json.
COPY package*.json ./

# Install dependencies.
RUN npm install

# Copy the rest of the application code.
COPY . .

# Expose the backend port.
EXPOSE 4000

# Start the backend server.
CMD ["npm", "run", "server"]