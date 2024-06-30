# nytimes-integrate

This project integrates with the New York Times Most Popular Articles API using Test-Driven Development (TDD). It includes unit tests with Jest, React Testing Library, and JSdom, as well as end-to-end tests with Cypress. SonarQube is used for generating reports on code quality.

## Requirements

- Node.js >= 20
- PostgreSQL
- Java 17 (for SonarQube)

## Get Started

1. **Obtain API Key**: Visit [New York Times Developer](https://developer.nytimes.com/get-started) to obtain your API key.

2. **Environment Setup**:

   - Copy `.env.example` to `.env` and fill in your API key and other necessary environment variables.

3. **Install Dependencies**:
   Before running the project, ensure all dependencies are installed:

   ```bash
   npm install
   ```

4. **Run in Development**:
   ```bash
   npm start
   ```

## Production

For production deployment, Docker is recommended:

```bash
docker-compose -f docker-compose.yml -f docker-compose.prod.yml up --build
```

## Dependencies

- **React** ecosystem:

  - `react` - React library
  - `react-dom` - React DOM bindings
  - `react-scripts` - Scripts and configuration for Create React App
  - `react-redux` - Official React bindings for Redux
  - `react-router-dom` - DOM bindings for React Router
  - `@chakra-ui/react` - UI component library
  - `@emotion/react`, `@emotion/styled` - CSS-in-JS library
  - `@fontsource/archivo` - Font package

- **State Management**:

  - `@reduxjs/toolkit` - Redux toolkit for efficient Redux development

- **Testing**:

  - `jest` - Testing framework for JavaScript
  - `@testing-library/react` - Testing utilities for React
  - `@testing-library/jest-dom` - Custom Jest matchers for React testing
  - `@testing-library/user-event` - Simulate events for React testing
  - `cypress` - End-to-end testing framework for web applications

- **Other Utilities**:
  - `framer-motion` - Animation library for React components
  - `react-share` - Social media share buttons for React
  - `typescript` - TypeScript for type-safe JavaScript

## Scripts

- **Start Development Server**:

  ```bash
  npm start
  ```

- **Build for Production**:

  ```bash
  npm run build
  ```

- **Run Tests**:

  ```bash
  npm test
  ```

- **Run End-to-End Tests with Cypress**:

  ```bash
  npm run test:e2e
  ```

- **Generate Code Coverage and SonarQube Report**:

  ```bash
  npm run sonar
  ```

- **Linting and Formatting**:

  ```bash
  npm run lint
  npm run format
  ```

- **Open Cypress Test Runner**:

  ```bash
  npm run cypress:open
  ```

  **SonarQube**:

  - Ensure SonarQube is set up locally or use SonarQube cloud services for code quality reports.

---
