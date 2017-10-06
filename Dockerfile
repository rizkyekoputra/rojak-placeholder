# Complete this Dockerfile to launch a Nginx server
# Alpine Linux as the base image
FROM ubuntu:16.04

# Install packages
RUN apt-get update \
 && apt-get install -y nginx

EXPOSE 80

ADD assets/ /var/www/html/assets/
ADD index.html /var/www/html/

CMD /usr/sbin/nginx -g "daemon off;"
