# Use Node.js version 20.11.0 as the base image
FROM node:20.11.0

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if available) to leverage Docker cache
COPY package.json package-lock.json /app/

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . /app

# Expose port 5173
EXPOSE 5173

# Command to run the application
CMD ["npm", "run", "dev"]
