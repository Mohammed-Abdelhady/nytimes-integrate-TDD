# Use an official Node runtime as a parent image
FROM node:20-alpine as build

# Set the working directory in the container
WORKDIR /app

# Install dependencies
COPY package.json yarn.lock ./
RUN yarn install --production

# Add the rest of the application code
COPY . .

# Build the React app
RUN yarn build

# Use NGINX for serving the React app
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
