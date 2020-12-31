# Duy's simple blog & profile

This project was based on [Create React App](https://github.com/facebook/create-react-app). [4.0.1 (2020-11-23))](https://github.com/facebook/create-react-app/blob/master/CHANGELOG.md)

## Configure

`cp .env.example .env && vi .env`

## Development

With docker: `docker-compose up --build -d`

Without docker: `yarn start`

Configure in `docker-compose.yml` file, default running on port `3000`

Running test: `yarn test`

## Production

Build image: `sudo docker build -t huynhducduy.github.io .`

Run container: `sudo docker run -dit -p 3000:80 --name huynhducduy.github.io huynhducduy.github.io:latest`

Kill and remove: `(sudo docker kill huynhducduy.github.io || true) && (sudo docker rm huynhducduy.github.io || true)`

Without docker: `yarn build`, output is located at `/build`
