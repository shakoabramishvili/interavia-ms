# Build stage
FROM node:20-alpine AS build
WORKDIR /app

# Copy monorepo dependencies
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Copy the entire monorepo
COPY . .

# Move into the specific app and build it
WORKDIR /app/apps/payment-api
RUN yarn build:payment

# Run stage
FROM node:20-alpine AS run
WORKDIR /app/apps/payment-api

# Copy only the built files for payment-api
COPY --from=build /app/apps/payment-api /app/apps/payment-api
COPY --from=build /app/node_modules /app/node_modules
COPY --from=build /app/package.json /app/package.json
COPY --from=build /app/tsconfig.json /app/tsconfig.json

CMD ["yarn", "start:payment"]

EXPOSE 4002
