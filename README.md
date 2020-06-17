# Check Connection Function

docker images                                                       => list docker images
docker container ls --all                                           => list all docker container for running container or not running container
docker container ls                   lts-alpine3.9                              => Just list docker contaner was running up
docker start apps1                                                  => running container with name apps1
docker build --tag belajar-coker:1.0 .                              => build docker images with name belajar-coker and tag 1.0
docker tag belajar-docker:1.0 betuah/nginx-apps:1.0                 => create new images from docker images belajar-coker:1.0 to betuah/nginx-apps:1.0
docker push betuah/belajar-docker:1.0                               => push docker images to registry (Docker Hub)
docker rmi <IMAGE ID>                                               => Remove docker
docker rm <CONTAINER ID>                                            => Remove container
docker container create --name test-nginx -p 8080:80 nginx:latest   => Create container with name test-mongo from images mongo with tags images latest and from outside port 8080 will redirect to local container port 80.                                                                Note: Before create container from images u must pull the images first.
docker exec -it <container> bash -l                                 => to run the command in docker

===============================================================================================================
Reference :
docker image build	        Build an image from a Dockerfile
docker image history	    Show the history of an image
docker image import	        Import the contents from a tarball to create a filesystem image
docker image inspect	    Display detailed information on one or more images
docker image load	        Load an image from a tar archive or STDIN
docker image ls	            List images
docker image prune	        Remove unused images
docker image pull	        Pull an image or a repository from a registry
docker image push	        Push an image or a repository to a registry
docker image rm	            Remove one or more images
docker image save	        Save one or more images to a tar archive (streamed to STDOUT by default)
docker image tag	        Create a tag TARGET_IMAGE that refers to SOURCE_IMAGE

================================================================================================================
Docker Network Reference : (https://docs.docker.com/engine/reference/commandline/network_create/)
docker network create <network name> --subnet=<subnet ip ex: 172.32.0.0/16>

=================================================================================================================
Docker PHP Reference :
docker-php-ext-install -j$(nproc) <extention_name>          For install more extention in docker bash
docker-php-ext-enable <extention_name>                      For enable any exist extention in docker bash

=================================================================================================================
Docker Mysql Reference :
docker container create --name mydb -p 3306:33060 -e MYSQL_ROOT_PASSWORD=admin122 -v mydb:/var/lib/mysql mysql:latest