FROM ubuntu

RUN apt-get update

RUN apt-get install nodejs -y

COPY . /home/app/URLShortener

WORKDIR /home/app/URLShortener

RUN apt-get install npm -y

RUN npm install

EXPOSE 3000

CMD [ "node", "index.js" ]