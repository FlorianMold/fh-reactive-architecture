# Reactive architecture

The project was made with nx. It contains an angular and nestjs project.

## Getting started

The angular frontend can be started with `nx serve reactive-architecture` and the backend can be started with `nx serve api`.

Inside the `package.json`, there are two targets named
- `npm codegen-frontend`
- `npm codegen-backend`

This commands build the types and functions for graphql inside the frontend or backend.

The graphql-schema runs on a hasura cloud instance. The url of the hasura schema is saved as an 
environment variable. The urls are also stored inside the `.env.example`, but the hasura secret is omitted.

With the environment variable the frontend as well as the backend can be built and run.

## Build

To build the application run the `bundle.sh` script. This script builds the frontend and the backend.
The results are stored as docker-images inside the build-folder. A `docker-compose.yml` file for starting
the containers is also included. Another script called `run.sh` is also contained inside the directory.
This script loads the docker-images from the `.tar`-files and spins up the frontend and the backend with 
the docker-compose file. A README.md with additional instructions is also included and a script to 
execute an example request to the nestjs backend.

## Running 

To simplify the initialization a `run.sh` was created inside the `build/`-folder. This loads the 
docker-images and executes the `docker-compose.yml`.