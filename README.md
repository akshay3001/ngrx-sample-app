# NgRx golden sample

A golden sample app to showcase how to work with Ngrx v12.4.0 (Current stable version) and use it to build application.

## Installation

Install Pokemon app with npm

```bash
  npm install
  cd pokemon-app
```

## Run Locally

Go to the project directory

```bash
  cd pokemon-app
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

## Running Tests

To run tests, run the following command

```bash
  npm run test
```

## API Reference

[Pokemon API Documentation](https://pokeapi.co/)

#### Get all Pokemons

```http
  GET https://pokeapi.co/api/v2/pokemon
```

#### Get paginated Pokemon

```http
  GET /api/v2/pokemon?offset=0&limit=10
```

| Parameter | Type     | Description                                   |
| :-------- | :------- | :-------------------------------------------- |
| `offset`  | `number` | Defined from which index to get pokemons from |
| `limit`   | `number` | Defines Number of pokemons per request        |
