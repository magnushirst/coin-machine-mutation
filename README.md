# Coin Machine KATA with Mutation Testing
The purpose of this project is to show the use of mutation testing for improved visibility of unit test coverage and
quality.

The kata used was [the coin machine kata](kata/coin-machine.md)

For this project we are using JS, so the library I'm using is [Stryker](https://stryker-mutator.io/docs/stryker-js/getting-started/).
It supports a few languages but for PHP there is [Infection](https://infection.github.io/guide/installation.html)
which supports the popular test runners and [Mutatest](https://mutatest.readthedocs.io/en/latest/)
for Python. All of them achieve the same results and can be configured similarly to include
options like thresholds.

The configuration Stryker which I'm using in this project can be found [here](https://stryker-mutator.io/docs/stryker-js/configuration/)

## Prerequisites 
 * Node version v16.13.2. If using NVM, use `nvm use`
 * NPM v8.1.2+

## Running the Application
```
    npm i
    npm test
    npm run test:mutation // Runs mutation test coverage
```

## Mutation Test Results

![Mutation Test Results](./mutation-results.png)