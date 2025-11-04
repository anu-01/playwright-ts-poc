# 🎭 Playwright End-to-End Testing Framework (TypeScript)

### 🚀 [Official Documentation](https://playwright.dev) | [API Reference](https://playwright.dev/docs/api/class-playwright)

Playwright is a modern, open-source **end-to-end testing and automation framework** for web applications.  
It enables testing across **Chromium**, **Firefox**, and **WebKit** using a single, unified API — designed to be **evergreen**, **capable**, **reliable**, and **fast**.  

This repository (`playwright-ts-poc`) demonstrates how to build a scalable and maintainable **UI + API test automation framework** in **TypeScript**, with integration to **Azure Playwright Workspaces** for cloud-scale test execution.  

---

## ✨ Key Features

- 🧩 **[Page Object Model (POM)](https://playwright.dev/docs/test-pom)** — scalable design pattern for maintainable test automation  
- 📊 **[Built-in HTML Test Reports](https://playwright.dev/docs/test-reporters)** — visualize results and execution trends  
- 👥 **[Multi-user Authentication](https://playwright.dev/docs/auth)** — test real-world user flows across multiple identities  
- 🌐 **[API Testing Support](https://playwright.dev/docs/api-testing)** — extend beyond UI and test APIs directly within Playwright
- ☁️ **[CI Integration](https://playwright.dev/docs/ci-intro)** — integrate with Github Action workflow or Azure pipelines
- ☁️ **[Playwright Workspaces Integration](https://learn.microsoft.com/en-us/azure/app-testing/playwright-workspaces/overview-what-is-microsoft-playwright-workspaces)** — run Playwright tests in the cloud across multiple OS and browsers with no local setup  

---

## 🧠 What are Playwright Workspaces?

**[Playwright Workspaces](https://learn.microsoft.com/en-us/azure/app-testing/playwright-workspaces/overview-what-is-microsoft-playwright-workspaces)** is a fully managed Azure service for **end-to-end web testing**.  
It allows you to:
- ⚡ Run tests in parallel on **cloud-hosted browsers** (Windows & Linux)  
- 🌍 Test across **Chromium, Firefox, and WebKit** using your existing test code  
- 🔒 Securely test both **public and private apps** — no inbound firewall rules needed  
- 🔁 Integrate seamlessly with **GitHub Actions** or **Azure DevOps** for CI/CD automation  
- 💰 Start free — Playwright Workspaces includes a **30-day free trial** for new Azure users  

For setup instructions, see the [Setup Guide for Playwright Workspaces](./playwright-workspaces.md).  

---

## 🧰 Getting Started

### ✅ Prerequisites
- Install [Node.js](https://nodejs.org/)
- Install [Visual Studio Code](https://code.visualstudio.com/)
- (Optional) Azure Subscription for Playwright Workspaces Integration

---

### ⚙️ Setup Instructions

```bash
# 1. Clone this repository
git clone https://github.com/anu-01/playwright-ts-poc.git
cd playwright-ts-poc

# 2. Install dependencies
npm install

# 3. Run tests locally
npx playwright test

# 4. Generate test report
npx playwright show-report
```

🧪 Writing Tests

- Add new test files under:
  web/tests/<test-name>.spec.ts
  Example: web/tests/cart.spec.ts

- Add or modify Page Object files under:
  web/pages/<page-name>.ts
  Example: web/pages/cartPage.ts

Each page should define selectors and reusable methods that represent user interactions.

