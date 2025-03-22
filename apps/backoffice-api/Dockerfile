# Build stage
FROM node:20-alpine AS build
WORKDIR /app

# Copy monorepo dependencies
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Copy the entire monorepo
COPY . .

# Move into the specific app and build it
WORKDIR /app/apps/backoffice-api
RUN yarn build:backoffice

# Run stage
FROM node:20-alpine AS run
WORKDIR /app/apps/backoffice-api

# Copy only the built files for backoffice-api
COPY --from=build /app/apps/backoffice-api /app/apps/backoffice-api
COPY --from=build /app/node_modules /app/node_modules
COPY --from=build /app/package.json /app/package.json
COPY --from=build /app/tsconfig.json /app/tsconfig.json

CMD ["yarn", "start:backoffice"]

EXPOSE 4001
