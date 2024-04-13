# base image  Node.js 
FROM node:14 as build

# working directory
WORKDIR /app

# Copy package.json and package-lock.json to work directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React app for production
RUN npm run build

# Use a lighter image for serving the built app
FROM nginx:alpine

# Copy the built app from the previous stage
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Default command to start Nginx when the container starts
CMD ["nginx", "-g", "daemon off;"]
