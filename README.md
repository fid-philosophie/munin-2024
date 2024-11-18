# Enhancing Diamond Open Access
## How OS-APS Facilitates Media-Neutral Scholarly Publishing

> THIS REPOSITORY MAY SUFFER CHANGES UNTIL 22.11.2024

**Moderation**: Dr. Joao Martins, Yannik Hampf (M.A),  Dr. Carsten Borchert, Sarah Bösendörfer(M.A)

**Duration** : 90 minutesThe workshop works for both passive-receptive participants and those who want to actively learn about the use of OS-APS on site and try it out in practice.For the active group of participants, it is necessary to install Docker on their computer beforehand. You will find instructions for this below:

## Requirements

Install Docker Desktop: https://www.docker.com/products/docker-desktop/ and visit: https://os-aps.de

## Install

On Linux:

```
mkdir osaps
cd osaps
docker run \ --rm \ -p 127.0.0.1:3000:3000/tcp \ --platform linux/amd64 \ --name os-aps-demo \ --volume "$(pwd):/data" \ --env LOCAL_STORAGE_PATH=/data/manuscripts \ --env INSTANCE_TITLE="Personal demo instance" \ --env TEMPLATE_SOURCE=/data/templates \        registry.gitlab.com/sciflow/development/server:main
```

On Windows: open CMD or Powershell:
```
md osaps
cd osaps
docker run --rm -p 127.0.0.1:3000:3000/tcp --platform linux/amd64 --name os-aps-demo --volume "%cd%":/data --env LOCAL_STORAGE_PATH=/data/manuscripts --env INSTANCE_TITLE="Personal demo instance" registry.gitlab.com/sciflow/development/server:main
```
## Running instance

https://localhost:3000

## Stop instance

On Docker Desktop, you can stop the running container under ‘Containers’.

## Including Templates

```
docker run --rm -p 127.0.0.1:3000:3000/tcp --platform linux/amd64 --name os-aps-demo --volume "$(pwd):/data" --env LOCAL_STORAGE_PATH=/data/manuscripts --env INSTANCE_TITLE="Personal demo instance" --env TEMPLATE_SOURCE=/data/templates registry.gitlab.com/sciflow/development/server:main
```