# Enhancing Diamond Open Access
## How OS-APS Facilitates Media-Neutral Scholarly Publishing

> THIS REPOSITORY MAY SUFFER CHANGES UNTIL 22.11.2024

**Moderation**: Dr. Joao Martins, Yannik Hampf (M.A),  Dr. Carsten Borchert, Sarah Bösendörfer(M.A)

**Duration** : 90 minutesThe workshop works for both passive-receptive participants and those who want to actively learn about the use of OS-APS on site and try it out in practice.For the active group of participants, it is necessary to install Docker on their computer beforehand. You will find instructions for this below:

## Requirements

Install this repository: `git clone https://github.com/fid-philosophie/munin-2024.git`

Install Docker Desktop: https://www.docker.com/products/docker-desktop/ and visit: https://os-aps.de

## Install

On Linux:

```
cd osaps
docker run --rm -d -p 127.0.0.1:3000:3000/tcp --platform linux/amd64 --name phidi-osaps --volume "$(pwd):/data" --env LOCAL_STORAGE_PATH=/data/manuscripts --env INSTANCE_TITLE="Munin Conference 2024" jmagalha/phidi-osaps-2024:latest
```

On Windows: open CMD or Powershell:
```
cd osaps
docker run --rm -d -p 127.0.0.1:3000:3000 --platform linux/amd64 --name phidi-osaps --volume "${PWD}:/data" --env LOCAL_STORAGE_PATH=/data/manuscripts --env INSTANCE_TITLE="Munin Conference 2024" jmagalha/phidi-osaps-2024:latest
```
## Running instance

https://localhost:3000

## Stop instance

On Docker Desktop, you can stop the running container under ‘Containers’.

## Including Templates

```
docker run --rm -p 127.0.0.1:3000:3000/tcp --platform linux/amd64 --name phidi-osaps --volume "$(pwd):/data" --env LOCAL_STORAGE_PATH=/data/manuscripts --env INSTANCE_TITLE="Munin Conference 2024" --env TEMPLATE_SOURCE=/data/templates jmagalha/phidi-osaps-2024:latest
```