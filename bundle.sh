#!/bin/bash

DIST_FOLDER=build

FRONTEND_NAME=reactive-architecture-frontend
FRONTEND_VERSION=0.1.0
FRONTEND_CONTAINER_NAME=reactive-architecture-frontend

BACKEND_NAME=reactive-architecture-backend
BACKEND_VERSION=0.1.0
BACKEND_CONTAINER_NAME=reactive-architecture-backend

# Change working directory to script directory
BASEDIR=$(dirname "$0")
cd $BASEDIR

# Cleanup & create directory structure
rm -rf $DIST_FOLDER
mkdir $DIST_FOLDER

# Build containers
./docker/bundle-frontend.sh
./docker/bundle-backend.sh

echo "Saving docker-images to" $DIST_FOLDER
docker save $FRONTEND_NAME:$FRONTEND_VERSION > $DIST_FOLDER/$FRONTEND_CONTAINER_NAME.tar
docker save $BACKEND_NAME:$BACKEND_VERSION > $DIST_FOLDER/$BACKEND_CONTAINER_NAME.tar

# Copy helpers
echo "Copy run.sh to" $DIST_FOLDER
cp docker/run.sh $DIST_FOLDER/run.sh
echo "Copy HELP.md to" $DIST_FOLDER
cp docker/HELP.md $DIST_FOLDER/README.md
echo "Copy docker-compose.yml to" $DIST_FOLDER
cp docker/docker-compose.yml $DIST_FOLDER/docker-compose.yml
echo "Copy .env to" $DIST_FOLDER
cp .env $DIST_FOLDER/.env
echo "Copy make-backend-request.sh to" $DIST_FOLDER
cp make-backend-request.sh $DIST_FOLDER/make-backend-request.sh