# windit-api
Api for Windit application front-end

Edit the .env file to correspond to your own setup, mainly docker hostname for developer use.
Use localhost with docker for windows or 192.168.99.100 for docker toolbox

#Development database
To run database in docker
```
docker-compose up
```

To run migrations first install knex
```
npm install knex -g
```
Then run latest migrations
```
knex migrate:latest
```
To rollback migrations run
```
knex migrate:rollback
```
To seed database
```
knex seed:run
```

#Setup
```
npm install
```

To run
```
npm start
```
The server will be online on http://localhost:3000
