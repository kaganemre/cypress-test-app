# 🔐 Cypress Test Application

![React](https://img.shields.io/badge/React-18+-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5+-646CFF?logo=vite&logoColor=white)
![Cypress](https://img.shields.io/badge/Cypress-E2E%20Testing-17202C?logo=cypress&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5-7952B3?logo=bootstrap&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green)

This project is designed to perform end-to-end tests of a login form built with React using Cypress. It covers core test scenarios such as form validation, user interactions, and error handling.

## 🚀 Technologies Used

| Layer     | Technology               |
|------------|--------------------------|
| UI     | React + Vite             |
| Styling       | Bootstrap + Reactstrap   |
| Testing       | Cypress                  |

---

## 🧪 Test Scenarios

The following scenarios are tested using Cypress:

- ✅ Successful login with a valid email and password
- 📧 Login attempt with an invalid email
- ❌ Failed login with invalid email and password
- 📋 Login attempt without accepting the terms and conditions

These tests aim to ensure that the login form behaves correctly and that user validations are properly handled.

---

## 📁 Project Structure

```text
cypress-test-app/
├── cypress/                  # Cypress test files
│   ├── e2e/                  # End-to-end tests (Login.cy.js)
│   ├── fixtures/             # Test data (example.json)
│   └── support/              # Cypress support files (commands, configurations)
├── src/                      # React components
│   ├── components/           # Login and Success components (Login.jsx, Success.jsx)
│   ├── App.jsx               # Root component
│   ├── index.css             # Global styles
│   └── main.js               # Application entry point
├── index.html                # HTML template
├── package.json              # Dependencies and scripts
├── package-lock.json
├── vite.config.js
├── cypress.config.js         # Cypress configuration
├── eslint.config.js
├── .gitignore
├── LICENSE
└── README.md              
```

---

## ⚙️ Installation and Running

1. Install dependencies:

```bash
npm install
```

2. Start the application:

```bash
npm run dev
```

3. Launch the Cypress test runner:

```bash
npx cypress open
```

---

## 📄 License

This project is licensed under the **MIT License**.  
See the [LICENSE](LICENSE) file for details.
