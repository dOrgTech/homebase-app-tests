# Homebase App Playwright Tests

## Overview
This repository contains Playwright end-to-end tests for the [Homebase App](https://github.com/dOrgTech/homebase-app), maintained by dOrg. These tests are designed to ensure the robustness and reliability of the Homebase App through automated testing.

## Getting Started

### Prerequisites
- Node.js (version 18 or higher)
- npm
- Node Version Manager

### Installation
1. Clone the repository:
   ```
   git clone git@github.com:dOrgTech/homebase-app-tests.git
   ```
2. Install dependencies:
   ```
   nvm use && npm install && npx playwright install --with-deps
   ```

### Configuration
- Copy the `env.example` file to a new `.env` file and fill in the required environment variables.
- Adjust `config.js` if necessary to meet your specific testing requirements.

### Running Tests
Execute the tests interactively using:
```
npx playwright test --ui
```

## Test Structure
- `tests/`: Contains the Playwright test scripts.
- `TestData/`: Includes data used for testing.
- `utils/`: Utility functions or scripts supporting the tests.

## Continuous Integration
These tests are integrated with CI workflows in the [Homebase App repository](https://github.com/dOrgTech/homebase-app). Refer to the `.github` folder for the workflow configurations.

### Contributing
If you're interested in contributing to the `homebase-app-tests`:
1. Fork the repository.
2. Create a new branch for your feature.
3. Make your changes.
4. Submit a pull request with a comprehensive description of the changes.