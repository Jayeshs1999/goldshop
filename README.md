# Zupotsu - Sports Marketing React Project

## Table of Contents
1. [Quick Summary](#quick-summary)
2. [Version](#version)
3. [Pre-requisites](#prerequisites)
4. [Setup Instructions](#setup-instructions)
5. [Configuration](#configuration)
6. [Dependencies](#dependencies)
7. [Deployment Instructions](#deployment-instructions)

## Quick Summary
Zupotsu is a React Application designed for sports marketing purposes. It provides a platform for managing various aspects of sports marketing, including administration and containerized components. This README file provides essential information for setting up, configuring, and deploying the project.

## Version
Current version: 1.0.0

## Pre-requisites
1. Git
2. Github Account
3. VS Code 
4. Node Js Installation (https://nodejs.org/en/download )
5. Docker 
6. Docker hub account

## Setup Instructions
To set up the project locally, follow below steps:

1. Clone the repository:
    Copy & paste following command on your terminal
    ```
    git clone https://ops-gitlab.iauro.co/zupotsu/sports-application.git
    ```
   (Latest branch - sonar-into-prod-3)

2. Go to clone folder directory: `/sports-application/zupotsu`

3. Install dependencies:
    ```
    npm install --force
    ```

4. Run the container application:
    ```
    nx serve container
    ```
   See the output - http://localhost:4200/

5. Run the admin application:
    ```
    nx serve admin
    ```
   See the output - http://localhost:4201/

## Configuration
The project utilizes Nx for managing the monorepo structure. Key configurations include:

- `package.json`: Contains project metadata, dependencies, and scripts.
- `.storybook`: Configuration for Storybook, a UI component development environment.
- `nx.json`: Configuration file for Nx workspace settings.

## Dependencies
The project relies on the following dependencies:

- React (v17.0.2)
- Firebase (v10.8.0)
- Material-UI (v4.12.4)
- Redux Toolkit (v1.9.7)
- Storybook (v6.3.0)
- and many others (see `package.json` for full list)

## Deployment Instructions
To deploy the project, follow these steps:

1. Build the container application for production:
    ```
    nx build container --prod -- --memoryLimit=8192
    ```

2. Build the admin application for production:
    ```
    nx build admin --prod -- --memoryLimit=8192
    ```

3. These commands create `dist` folder in `zupotsu` directory:
    - Zupotsu > dist > apps > container (The container folder create when you run container build command) 
    - Zupotsu > dist > apps > admin (The container folder create when you run container build command) 

4. Now you need to copy `apps` folder (Path: Zupotsu > dist > apps)  and paste that folder in `server` folder directory present inside Zupotsu project folder (Zupotsu > Server)

5. After that inside `server` folder you should see `apps` folder, `Dockerfile`, `package.json`, and `server.js` file.

6. Now you need to click on `Dockerfile` (Zupotsu > Server > Dockerfile)

7. If you need to deploy the container app, then you need to uncomment `COPY apps/container/ container/`. Similarly, if you need to deploy the admin app, then you need to uncomment `COPY apps/admin/ admin/` and vice versa.

### For container build, Dockerfile looks like:
```Dockerfile
FROM node:14.16.0-alpine3.13
# Create app directory
WORKDIR /app
# Install app dependencies
COPY package.json .
COPY server.js .
RUN apk --no-cache add curl && apk --no-cache add vim && npm install pm2 -g && npm install --production
# Bundle app source
COPY apps/container/ container/ 
# COPY apps/admin/ admin/ 
EXPOSE 80
CMD ["pm2-docker", "server.js"]
```

### For Admin build, Dockerfile looks like:
```Dockerfile
FROM node:14.16.0-alpine3.13
# Create app directory
WORKDIR /app
# Install app dependencies
COPY package.json .
COPY server.js .
RUN apk --no-cache add curl && apk --no-cache add vim && npm install pm2 -g && npm install --production
# Bundle app source
# COPY apps/container/ container/ 
COPY apps/admin/ admin/ 
EXPOSE 80
CMD ["pm2-docker", "server.js"]
```
8. After that, open terminal and go to server directory.
9. Now run following commands inside your zupotsu> server direcory

  A. Below Command is for building your docker image
   ```bash
   docker build -t iaurosystems/zuptosu .
   ```
  (Note: dot(.) represents you are building current directory Dockerfile)

   B. This command push the image on docker hub
   ```bash
   docker push iaurosystems/zuptosu
   ```
10. Now, we have successfully pushed the current changes image on Docker Hub. So we need to replace this current tag with the old one for respective deployment. It means if your old tag was suppose Ex. abc:v1 for container and new tag is abc:v2 then we need to replace v1 by v2.
