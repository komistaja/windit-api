# windit-api
Api for Windit application front-end

Edit the .env file to correspond to your own setup, mainly docker hostname for developer use.
Use localhost with docker for windows or 192.168.99.100 for docker toolbox

#Development database setup
The development database in run in a docker container. Install docker following dockers online instructions for your operating system.

To run database in docker. Use sudo in linux if docker user is not configured to have sudo rights.
```
docker-compose up
```
To run migrations first install knex
```
npm install knex
```
Then run latest migrations
```
knex migrate:latest
```
Then seed database with test data
```
knex seed:run
```
#Managing development database
To rollback migrations run
```
knex migrate:rollback
```

To create a new migration use the following command. More info on the subject: https://knexjs.org/
```
knex migrate:make migration_name
```

#Application setup
```
npm install
```

To run
```
npm start
```
The server will be online on http://localhost:3000
