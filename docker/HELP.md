# Running the reactive-architecture

The configuration for the services is stored inside the .env file. The hasura secret can be omitted here, because it was
compiled into the applications for easier testing.

## Run the reactive-architecture frontend and backend

Run the shell-script to load the docker-images and spin them up.

```shell
./run.sh
````

This will load the docker-images and runs `docker-compose up` to start the apps.

An example request to the nestjs-backend can be found inside the `make-backend-request.sh`.
