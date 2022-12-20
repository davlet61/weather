# Todo App

[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://github.com/davlet61/weather/blob/main/LICENSE)

A simple web application to present Weather time series of a desired city.

## Tech Stack

<p align="center">
<a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/typescript-colored.svg" width="36" height="36" alt="TypeScript" /></a>
<a href="https://reactjs.org/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg" width="40" height="40" alt="React" /></a>
<a href="https://www.chartjs.org/" target="_blank" rel="noreferrer"><img src="https://www.chartjs.org/media/logo-title.svg" alt="https://www.chartjs.org/" width="36" height="36" /></a>

## Demo

The application is live at the following address:

https://weather-time-series.vercel.app/

## Run Locally

### Development

Clone the project

```bash
  git clone https://github.com/davlet61/weather.git
```

Go to the project directory

```bash
  cd weather
```

Install dependencies

**_NOTE:_** The default package manager for this project is `pnpm`

_If you wish to use a different package manager make sure to ***remove*** the `preinstall` script from the `package.json`._

```bash
  pnpm install
```

Start dev server

```bash
  pnpm dev
```

### Environment Variables

To be able to use a realtime data in this project, you will need to add a few env variables.

```bash
  cp .env.example .env
```

then add your keys to empty values.

### Preview Build Locally

Install dependencies

**_NOTE:_** Skip this step if you have already installed the dependencies

_If you wish to use a different package manager make sure to ***remove*** the `preinstall` script from the `package.json`._

```bash
  pnpm install
```

Build application

```bash
  pnpm build
```

Start application

```bash
  pnpm preview
```

## Testing

This project has simple e2e test set up with Playwright

### To run e2e tests

```bash
  pnpm test
```
