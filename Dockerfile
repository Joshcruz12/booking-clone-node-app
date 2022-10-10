FROM node:17

#Working Dir 
WORKDIR /usr/src/app

#Copy Package Json Files
COPY package*.json ./

# Installl prettier (For our )

RUN npm install prettier -g

#Install Files 
RUN npm install

#Copy Source Files 
COPY . .

# Build
RUN npm run build 

# Expose the API PORT
EXPOSE 1337

CMD [ "node", "build/server.js"]

