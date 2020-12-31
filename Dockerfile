FROM node:lts AS develop
# Just in case
RUN apt-get update && \
  apt-get install -y \
  libgtk2.0-0 \
  libnotify-dev \
  libgconf-2-4 \
  libnss3 \
  libxss1 \
  libasound2 \
  xvfb && \
  apt-get clean && \
  rm -rf /var/lib/apt/lists/*
# Create working directory
WORKDIR /app
# Copy dependencies
COPY ./package.json ./yarn.lock ./
# Fetch dependencies
RUN yarn install --pure-lockfile

FROM develop AS build
# Run build script
COPY . .
RUN yarn build

FROM nginx:alpine AS production
# Copy nginx config, project to machine
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/build /app

# Set command
CMD ["nginx", "-g", "daemon off;"]

# Expose port
EXPOSE 80

# sudo docker build -t huynhducduy.github.io .
# sudo docker run -dit -p 3000:80 --name huynhducduy.github.io huynhducduy.github.io:latest
# (sudo docker kill huynhducduy.github.io || true) && sudo docker rm huynhducduy.github.io
