#!/bin/bash

FRONTEND_NAME=reactive-architecture-frontend
FRONTEND_VERSION=0.1.0
FRONTEND_CONTAINER_NAME=reactive-architecture-frontend

echo "--------------"
echo "Build fh/reactive-architectures frontend."
echo "Make sure to call this script from the project root directory."
echo "--------------"
echo ""

WKDIR=`dirname "$0"`
echo "Working directory:" $WKDIR"/bundle-frontend.sh"

# Build the application
nx run reactive-architecture:build:production

# Build docker container
docker build -t $FRONTEND_NAME:$FRONTEND_VERSION -f docker/frontend.Dockerfile .

# Remove existing container
docker rm $FRONTEND_CONTAINER_NAME