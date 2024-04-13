#  base image Node.js 
FROM node:14

#  working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY ../package.json ./
COPY ../package-lock.json ./

# Install dependencies
RUN npm install --production

# Copy the rest of the application code
COPY . .

# Expose port 3000
EXPOSE 3000

# run the application
CMD ["npm", "start"]
