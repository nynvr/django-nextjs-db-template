# Use an official Node runtime as the parent image
FROM node:20.18-slim

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY ./web/app/package*.json ./

# Install dependencies
RUN npm install

# Copy the current directory contents into the container at /app
COPY ./web/app .
COPY ./deploy/web/web.run.sh /scripts/

EXPOSE 3000

RUN chmod +x /scripts/web.run.sh
CMD ["/scripts/web.run.sh"]