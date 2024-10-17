A Django, Next.js and DB template

# Getting started
- Clone the repo
  - `git clone git@github.com:nynvr/django-nextjs-db-template.git`
- To review / update
  - `./docker-compose.yml`
  - `./deploy/backend/backend.development.Dockerfile`
  - `./deploy/backend/backend.development.default.conf`
  - `./deploy/backend/backend.production.Dockerfile`
  - `./deploy/backend/backend.production.default.conf`
  - `./deploy/backend/backend.run.sh`
  - `./deploy/web/web.development.Dockerfile`
  - `./deploy/web/web.production.Dockerfile`
  - `./deploy/web/web.run.sh`
  - `./web/app/src/app/apple.icon.png`
  - `./web/app/src/app/favicon.ico`
  - `./web/app/src/app/icon.ico`
  - `./web/app/src/app/opengraph.image.png`
  - `./web/app/src/app/robots.ts`
  - `./web/app/src/app/sitemapt.ts`
  - `./web/app/src/app/twitter-image.png`
- Install Docker Desktop
    - It has both Docker and Docker Compose
- Run docker compose
  - `docker compose up --build`
  - This will run 3 services,
    - backend service
      - Django app
      - `http://0.0.0.0:8000/`
      - `http://0.0.0.0:8000/api/`
      - `http://0.0.0.0:8000/admin`
      - Default Django superuser: nynvr
      - Default Django superuser password: password
    - web service
      - Next.js app
      - `http://0.0.0.0:3000/`
    - db service
      - PostgreSQL

# Local development
- Python and Node.js version management
  - Docker will handle the version management
  - As of 16OCT2024,
    - Python - v3.12
    - Node.js - v20.18
- "Hot reload"
  - No need to "restart" the services to make code changes
  - Docker Compose is using "volumes"

# TODO - Testing

# Tech stack
- Python v3.12, Django v5.1
- JavaScript, TypeScript, React, Next.js v14.2
- Tailwind CSS v3.4
- Shadcn v2.1

# TODO - Coding standards 

# TODO - Architecture

# Maintenance tasks
- keep tech stack versions up to date
- keep application security (AppSec) healthy
- keep documentation up to date
  - README
    - Getting started
    - Local development
    - Testing
    - Tech stack
    - Coding standards
    - Architecture
  - `./backend/app/.python-version`
  - `./web/app/.nvmrc`

# TODO - Release checklist
- update documentation
- create release/tag
  - semver
  - release notes

# TODO - Production deployment  - Backend / Web services

# Misc: Docker commands
- `docker compose up --build`
- `docker compose -f ./docker-compose.yml up --build`
- `docker compose down`
- `docker compose build`
- `docker compose up`
- `docker exec -it {container-name} bash`
- `docker logs --follow`
- `docker system prune -a`
- `docker image prune -a`
- `docker volume prune -a`
- `docker network prune`
- `docker container prune`