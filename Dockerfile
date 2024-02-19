FROM ubuntu/apache2:2.4-22.04_beta
WORKDIR /webapp
RUN apt update
RUN apt install vim -y
RUN apt install systemctl -y
RUN mkdir "/var/www/html/webapp"
COPY ./dist /var/www/html/webapp
COPY ./webapp-vhost.conf /etc/apache2/sites-available
RUN a2dissite 000-default.conf
RUN a2ensite webapp-vhost.conf
RUN a2enmod rewrite
RUN systemctl reload apache2
RUN systemctl restart apache2
EXPOSE 80
LABEL maintainer="alejandroriveraa@proton.me"





