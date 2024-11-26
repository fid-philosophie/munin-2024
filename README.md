# Enhancing Diamond Open Access
## How OS-APS Facilitates Media-Neutral Scholarly Publishing

**Moderation**: Dr. Joao Martins, Yannik Hampf (M.A),  Dr. Carsten Borchert, Sarah Bösendörfer (M.A)

**Duration** : 90 minutes

The workshop works for both passive-receptive participants and those who want to actively learn about the use of OS-APS on site and try it out in practice.For the active group of participants, it is necessary to install Docker on their computer beforehand. You will find instructions for this below:

## Requirements

* Install Git: https://git-scm.com/downloads
* Install Docker Desktop: https://www.docker.com/products/docker-desktop/
* Visit: https://os-aps.de/en/

## Install

Clone this repository: `git clone https://github.com/fid-philosophie/munin-2024.git`

```
cd munin-2024
cd osaps
```

On Linux:

```
docker run --rm -d -p 127.0.0.1:3000:3000/tcp --platform linux/amd64 --name phidi-osaps --volume "$(pwd):/data" --env LOCAL_STORAGE_PATH=/data/manuscripts --env INSTANCE_TITLE="Munin Conference 2024" jmagalha/phidi-osaps-2024:latest
```

On Windows: open CMD or Powershell:
```
docker run --rm -d -p 127.0.0.1:3000:3000 --platform linux/amd64 --name phidi-osaps --volume "${PWD}:/data" --env LOCAL_STORAGE_PATH=/data/manuscripts --env INSTANCE_TITLE="Munin Conference 2024" jmagalha/phidi-osaps-2024:latest
```
## Running instance in the browser

http://localhost:3000

## Accessing an existing document

http://localhost:3000/write/clean-thread-0ace5963-d04b-4f1a-9eac-a9def5bc9751

## Including Templates

Linux:
```
docker run --rm -d -p 127.0.0.1:3000:3000/tcp --platform linux/amd64 --name phidi-osaps --volume "$(pwd):/data" --env LOCAL_STORAGE_PATH=/data/manuscripts --env INSTANCE_TITLE="Munin Conference 2024" --env TEMPLATE_SOURCE=/data/templates jmagalha/phidi-osaps-2024:latest
```

Windows:
```
docker run --rm -d -p 127.0.0.1:3000:3000/tcp --platform linux/amd64 --name phidi-osaps --volume "${PWD}:/data" --env LOCAL_STORAGE_PATH=/data/manuscripts --env INSTANCE_TITLE="Munin Conference 2024" --env TEMPLATE_SOURCE=/data/templates --env jmagalha/phidi-osaps-2024:latest
```

## Stop instance

On Docker Desktop, you can stop the running container under ‘Containers’, or you can also stop the instance on command line via `docker stop phidi-osaps`

## Try the new version

https://os-aps-next.sciflow.cloud/start

You can also deploy the latest container of the new version using the instructions above:

Linux:
```
docker run --rm -d -p 127.0.0.1:3000:3000/tcp --platform linux/amd64 --name phidi-osaps --volume "$(pwd):/data" --env LOCAL_STORAGE_PATH=/data/manuscripts --env INSTANCE_TITLE="Munin Conference 2024" registry.gitlab.com/sciflow/development/server:development
```

Windows:
```
docker run --rm -d -p 127.0.0.1:3000:3000 --platform linux/amd64 --name phidi-osaps --volume "${PWD}:/data" --env LOCAL_STORAGE_PATH=/data/manuscripts --env INSTANCE_TITLE="Munin Conference 2024" registry.gitlab.com/sciflow/development/server:development
```

## Extra resources

The repository:

https://gitlab.com/sciflow/development

The templates:

https://gitlab.com/os-aps/templates
