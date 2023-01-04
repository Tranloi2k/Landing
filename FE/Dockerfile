FROM node:16-alpine 
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm cache clean --force
RUN npm install --force
RUN npm install -g @angular/cli

COPY . .
EXPOSE 4200
CMD ["npm", "run", "eb_start"]
# RUN $(npm bin)/ng build --configuration production

# FROM nginx:stable-alpine


# COPY nginx/nginx.conf /etc/nginx/nginx.conf
# RUN rm -rf /usr/share/nginx/html/*
# COPY --from=build /usr/src/app/dist/ /usr/share/nginx/html
# RUN chown nginx:nginx /usr/share/nginx/html/*
# CMD ["nginx", "-g", "daemon off;"]