```markdown
<p align="center">
  <img src="assets/github-profile-banner.png" width="100%">
</p>

# 🧪 QA Test Automation Playground

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

This repository explores several important areas of **Software Quality Engineering**:

- Test Automation Concepts
- Test Strategy
- Test Pyramid
- Automation Architecture
- End-to-End Testing
- Page Object Model
- Test Data Management
- Continuous Integration for Testing

---

## 📊 Test Pyramid

<p align="center">
  <img src="assets/test-pyramid-diagram.png" width="600">
</p>

The **Test Pyramid**, introduced by Martin Fowler, describes a balanced testing strategy.

| Layer | Focus |
|------|------|
| Unit Tests | Fast validation of business logic |
| Integration Tests | Component and API communication |
| End-to-End Tests | Validation of complete user flows |

A good automation strategy prioritizes **many fast tests at the base** and **fewer expensive UI tests at the top**.

```
# 🏗 Automation Architecture

The automation example in this repository follows good practices used in professional QA teams:

- **Page Object Model**
- **Reusable test components**
- **Externalized test data**
- **Clean folder structure**
```
This improves:

- maintainability
- readability
- scalability of test suites

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

```

[https://www.saucedemo.com](https://www.saucedemo.com)

```

Test scenarios implemented:

- successful login
- invalid login
- UI validation
- error message validation

---

# 🧱 Cypress Project Structure

```

cypress-demo
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

---

# 🧪 Example Test

Example of automated login validation:

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

| Tool           | Purpose                    |
| -------------- | -------------------------- |
| Cypress        | End-to-End test automation |
| JavaScript     | Test scripting             |
| Git            | Version control            |
| GitHub         | Repository hosting         |
| GitHub Actions | CI/CD automation           |

---

# 📚 References

The concepts used in this repository are inspired by established Software Engineering literature:

* Martin Fowler — Test Pyramid
* Gerard Meszaros — xUnit Test Patterns
* Cem Kaner — Lessons Learned in Software Testing
* Robert Pressman — Software Engineering
* Jez Humble — Continuous Delivery

---

# 🚀 Future Improvements

This project will continue evolving with:

* CI/CD automation pipelines
* API testing examples
* performance testing examples
* advanced test architecture

---

# 👩‍💻 Author

Ivaneide Monteiro

QA Automation Engineer focused on:

* Software Quality Engineering
* Test Automation
* QA Strategy
* CI/CD Testing

🔗 LinkedIn

```

https://linkedin.com/in/ivaneidepmn

```

---

⭐ This repository is part of my **QA Automation Engineering portfolio**.

