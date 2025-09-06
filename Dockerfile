FROM node:lts-alpine

# Install a minimal static server
RUN npm install -g serve

# Set working directory
WORKDIR /app

# Copy built static files
COPY dist/ .

# Serve the static files
CMD ["serve", "-s", ".", "-l", "7654"]