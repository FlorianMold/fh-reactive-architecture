#!/bin/bash

FRONTEND_NAME=reactive-architecture-frontend
FRONTEND_VERSION=0.1.0
FRONTEND_CONTAINER_NAME=reactive-architecture-frontend

BACKEND_NAME=reactive-architecture-backend
BACKEND_VERSION=0.1.0
BACKEND_CONTAINER_NAME=reactive-architecture-backend


# Change working directory to script directory
BASEDIR=$(dirname "$0")
cd $BASEDIR

# Load containers
echo "Loading docker-image from file-system"
docker load --input $FRONTEND_CONTAINER_NAME.tar
docker load --input $BACKEND_CONTAINER_NAME.tar

# Run containers
echo "Running reactive architecture"
docker-compose down
docker-compose up