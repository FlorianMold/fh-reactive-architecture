#!/bin/bash

BACKEND_NAME=reactive-architecture-backend
BACKEND_VERSION=0.1.0
BACKEND_CONTAINER_NAME=reactive-architecture-backend

echo "--------------"
echo "Build fh/reactive-architectures backend."
echo "Make sure to call this script from the project root directory."
echo "--------------"
echo ""

WKDIR=`dirname "$0"`
echo "Working directory:" $WKDIR"/bundle-backend.sh"

# Build the application
nx run api:build:production

# Build docker container
docker build -t $BACKEND_NAME:$BACKEND_VERSION -f docker/backend.Dockerfile .

# Remove existing container
docker rm $BACKEND_CONTAINER_NAME