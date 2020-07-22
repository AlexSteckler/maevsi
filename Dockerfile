############
# Serve Vue.

# Not below `buster`!
FROM node:13.14.0-buster-slim@sha256:ffee53b7563851a457e5a6f485adbe28877cf92286cc7095806e09d721808669 AS development

# Update and install build dependencies
# - `git` is required by the `yarn` command
RUN \
    apt-get update && \
    apt-get install -y git

# Install gridsome.
RUN yarn global add @gridsome/cli

WORKDIR /srv/app/

COPY ./gridsome/ /srv/app/

RUN yarn

# Install sqitch.
RUN apt-get update && apt-get -y install libdbd-pg-perl postgresql-client sqitch

COPY ./sqitch/ /srv/sqitch/
COPY ./docker-entrypoint.sh /usr/local/bin/

ENTRYPOINT ["docker-entrypoint.sh"]

CMD ["develop"]


########################
# Build and compile Vue.

FROM node:13.14.0-slim@sha256:f8fddd1391a558ecde84a6340685f29af134181e5adbaa7e4d7e8ad28c417667 AS build

ARG GRIDSOME_STACK_DOMAIN=maev.si
ENV GRIDSOME_STACK_DOMAIN=${GRIDSOME_STACK_DOMAIN}
ENV NODE_ENV=production

WORKDIR /srv/app/

COPY --from=development /srv/app/ /srv/app/

RUN yarn build


#######################
# Provide a web server.
# Only the compiled app, ready for production with Nginx.

# Should be the specific version of nginx:stable.
FROM nginx:1.19.1@sha256:deb724a427ea79face617392a5a471fdcb4cdb57f971ee6b7e492b90fecb199f AS production

# Install sqitch.
RUN apt-get update && apt-get -y install libdbd-pg-perl postgresql-client sqitch

COPY --from=build /srv/app/dist/ /usr/share/nginx/html/

COPY ./sqitch/ /srv/sqitch/
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY ./docker-entrypoint.sh /usr/local/bin/

ENTRYPOINT ["docker-entrypoint.sh"]
CMD ["nginx", "-g", "daemon off;"]