FROM nginx:alpine
COPY dist/apps/reactive-architecture/ /usr/share/nginx/html
