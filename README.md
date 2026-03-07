![Cypress Tests](https://github.com/ivaneidepmn/qa-test-automation-playground/actions/workflows/cypress-tests.yml/badge.svg)
<p align="center">
<img src="assets/github-profile-banner.png" width="100%">
</p>
# 🧪 Playground de Automação de Testes de QA

![Cypress Tests](https://github.com/ivaneidepmn/qa-test-automation-playground/actions/workflows/cypress-tests.yml/badge.svg)

Repositório criado para estudar, documentar e demonstrar **práticas de Engenharia de Qualidade de Software e Automação de Testes**.

Este projeto combina **fundamentos teóricos** com **exemplos práticos de testes automatizados** utilizando ferramentas modernas de garantia da qualidade.

Repository created to study, document and demonstrate **Software Quality Engineering and Test Automation practices**.

This project combines **theoretical foundations** with **practical examples of automated testing** using modern QA tools.

---

# 🎯 Purpose of the Repository

The goal of this repository is to build a **QA Engineering portfolio** demonstrating:

- test automation strategies
- software testing architecture
- practical automation examples
- quality engineering concepts
- CI/CD testing integration

---

# 🧠 Topics Covered

This repository explores important areas of **Software Quality Engineering**:

- Test Automation Concepts
- Test Strategy
- Test Pyramid
- Automation Architecture
- End-to-End Testing
- Page Object Model
- Test Data Management
- Continuous Integration for Testing

---

# 📊 Test Pyramid

<p align="center">
  <img src="assets/test-pyramid-diagram.png" width="550">
</p>

The **Test Pyramid**, introduced by **Martin Fowler**, describes a balanced testing strategy.

| Layer | Focus |
|------|------|
| Unit Tests | Fast validation of business logic |
| Integration Tests | Component and API communication |
| End-to-End Tests | Validation of complete user flows |

A good automation strategy prioritizes **many fast tests at the base** and **fewer expensive UI tests at the top**.

---

# 🏗 Automation Architecture

The automation example in this repository follows practices used in professional QA teams:

- Page Object Model
- Reusable test components
- Externalized test data
- Clean folder structure

Benefits:

- better maintainability  
- improved readability  
- scalable automation suites  

---

# 📁 Repository Structure

```

qa-test-automation-playground
│
├── assets
│   ├── github-profile-banner.png
│   ├── qa-automation-side-panel.png
│   └── test-pyramid-diagram.png
│
├── architecture
│   └── automation-architecture.md
│
├── docs
│   ├── test-automation-concepts.md
│   └── test-pyramid.md
│
├── examples
│   └── cypress-demo
│
└── references
└── bibliography.md

```

---

# 🤖 Cypress Automation Example

The repository includes a practical **Cypress automation project**.

Application used:

https://www.saucedemo.com

Test scenarios implemented:

- successful login
- invalid login
- UI validation
- error message validation


## 🎥 Test Execution Example

Example of Cypress tests running in the application.

![Cypress Tests](assets/cypress-demo.gif)

---

## 📊 Test Coverage

Current automated test scenarios implemented in the project:

### Authentication Tests

- Login with valid credentials
- Login with invalid credentials
- Login validation with empty fields
- Error message validation

### Inventory Tests

- Inventory page elements validation
- Product list rendering validation

### Cart Tests

- Add product to cart
- Remove product from cart

**Total automated scenarios: 7**

These tests validate critical user flows of the application ensuring stability and reliability.

---

## 🧠 Test Strategy

This project follows a practical **End-to-End testing strategy** focused on validating the main business flows of the application.

The automation approach includes:

- End-to-End UI testing using Cypress
- Page Object Model to improve maintainability
- Test data management using fixtures
- Modular test architecture
- CI execution using GitHub Actions

---

## 🏗 Test Architecture Diagram

The project is organized using a modular automation architecture based on **Page Object Model**, reusable test data and CI execution.

```mermaid
flowchart TD
    A[GitHub Repository] --> B[Cypress Demo Project]
    B --> C[cypress/e2e]
    B --> D[cypress/pages]
    B --> E[cypress/fixtures]
    B --> F[cypress/support]
    B --> G[cypress.config.js]

    C --> C1[login.cy.js]
    C --> C2[cart.cy.js]

    D --> D1[LoginPage.js]
    D --> D2[InventoryPage.js]
    D --> D3[CartPage.js]

    E --> E1[users.json]

    A --> H[GitHub Actions CI]
    H --> I[Run Cypress Tests]
    I --> J[Test Results]
    I --> K[Mochawesome Report]

    
## 2. Seção: Real Test Pyramid

Adicione logo abaixo:

```markdown
---

## 🔺 Real Test Pyramid of This Project

This repository currently emphasizes **End-to-End testing**, focused on validating the main user journeys of the SauceDemo application.

```mermaid
pyramid-beta
    title Test Pyramid - Current Project Scope
    "E2E Tests (Login + Cart Flows)" : 7
    "Integration / API Tests" : 0
    "Unit Tests" : 0
    

### Test Layers

| Layer | Description |
|------|-------------|
| E2E Tests | Validate complete user flows |
| Page Objects | Encapsulate UI interactions |
| Fixtures | Manage test data |
| CI Pipeline | Execute tests automatically |

This architecture improves:

- scalability
- maintainability
- readability
- CI integration

### Test scenarios implemented

- successful login
- invalid login
- UI validation
- error message validation

---

# 🧱 Cypress Project Structure

```

examples/cypress-demo
│
├── cypress
│   ├── e2e
│   │   └── login.cy.js
│   │
│   ├── fixtures
│   │   └── users.json
│   │
│   └── pages
│       └── LoginPage.js
│
├── cypress.config.js
└── package.json

````

This structure demonstrates a **clean automation architecture** commonly used in professional QA teams.

---

# 🧪 Example Automated Test

Example of login validation using Cypress:

```javascript
describe('Login Flow - SauceDemo', () => {

  it('should login successfully', () => {

    cy.visit('https://www.saucedemo.com')

    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')

    cy.get('[data-test="login-button"]').click()

    cy.url().should('include', 'inventory')

  })

})
````

---

# ⚙️ Technologies Used

| Technology     | Purpose               |
| -------------- | --------------------- |
| Cypress        | End-to-End automation |
| JavaScript     | Test scripting        |
| Git            | Version control       |
| GitHub         | Repository hosting    |
| GitHub Actions | CI/CD pipelines       |

---

# 📚 References

Concepts used in this repository are inspired by established **Software Engineering literature**:

* Martin Fowler — Test Pyramid
* Gerard Meszaros — xUnit Test Patterns
* Cem Kaner — Lessons Learned in Software Testing
* Robert Pressman — Software Engineering
* Jez Humble — Continuous Delivery

---

# 🚀 Future Improvements

Planned improvements for this repository:

* CI/CD pipelines executing automated tests
* API testing examples
* performance testing demonstrations
* advanced automation architecture
* test reporting dashboards

---

# 👩‍💻 Author

**Ivaneide Monteiro**

QA Automation Engineer focused on:

* Software Quality Engineering
* Test Automation
* QA Strategy
* CI/CD Testing

LinkedIn
[https://linkedin.com/in/ivaneidepmn](https://linkedin.com/in/ivaneidepmn)

---

⭐ This repository is part of my **QA Automation Engineering portfolio**.