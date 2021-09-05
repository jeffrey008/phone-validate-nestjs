
## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript to validate number.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Build

```bash
docker build .
```

## API

### GET /
Return 'Hello World!'.

### GET /validate-number
Accepts query params as follows:

`number`: the phone number. Required.

`countryCode`: Check all available codes here: https://www.iban.com/country-codes. Optional.

The success response will be the same as https://numverify.com/documentation#api_response
