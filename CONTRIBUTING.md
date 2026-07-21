# Contributing to SMEH_NEWS

Thank you for your interest in contributing to SMEH_NEWS! We welcome contributions of all kinds, including bug fixes, new features, documentation improvements, and bug reports.

To ensure a smooth collaboration, please follow the guidelines outlined below.

---

## Code of Conduct

By participating in this project, you agree to abide by our [Code of Conduct](CODE_OF_CONDUCT.md). Please report any unacceptable behavior to the project maintainers.

## How Can I Contribute?

### 1. Reporting Bugs
If you find a bug, please check the existing issues list to see if it has already been reported. If not, open a new issue and include:
* A clear and descriptive title.
* Steps to reproduce the bug.
* Expected behavior vs. actual behavior.
* Relevant environment details (Node version, OS, browser).

### 2. Suggesting Enhancements
We are always open to suggestions! If you have an idea for a new feature or improvement, please open an issue describing:
* The goal or problem you are trying to solve.
* Your proposed solution or user flow.
* Any alternative approaches you've considered.

### 3. Submitting Pull Requests
If you are ready to write code:
1. **Fork** the repository and create your branch from `main`:
   ```bash
   git checkout -b feature/your-feature-name
   ```
2. **Install dependencies** in the subprojects:
   ```bash
   npm install --prefix frontend
   npm install --prefix frontend/admin-crm
   npm install --prefix backend
   ```
3. **Set up the database**:
   Run database migrations and seed default data:
   ```bash
   npm run db:migrate:dev --prefix backend
   npm run db:generate --prefix backend
   npm run db:seed --prefix backend
   ```
4. **Start the development servers**:
   Run these commands to start the backend, frontend, and admin dashboard:
   ```bash
   npm run backend:dev    # Express API
   npm run frontend:dev   # Next.js app
   npm run admin:dev      # Vite Admin CRM
   ```
5. **Make your changes** and ensure they adhere to coding standards.
6. **Test your changes** locally.
7. **Commit your changes** using Conventional Commit messages:
   ```bash
   git commit -m "feat: add user profile picture upload"
   ```
8. **Push to your fork** and submit a Pull Request (PR) to the `main` branch.

---

## Development Standards & Guidelines

### Project Architecture
This project uses a monorepo structure containing:
* `frontend/`: Next.js 15 App Router consumer-facing site.
* `frontend/admin-crm/`: React/Vite admin dashboard.
* `backend/`: Express.js API and Prisma ORM backend.
* `nginx/`: Nginx proxy configurations.

### Code Style & Linting
* We use ESLint for linting. Ensure your code passes linting before submitting a PR.
  ```bash
  npm run backend:lint
  ```
* Write clean, self-documenting code with comments where necessary.
* Ensure all files end with a newline.

### Commit Conventions
We follow the Conventional Commits specification. Prefix commit messages with a type:
* `feat:` for new features.
* `fix:` for bug fixes.
* `docs:` for documentation updates.
* `style:` for styling or formatting changes.
* `refactor:` for code restructurings.
* `test:` for adding or fixing tests.

### Git Guidelines
* Keep PRs focused. A single PR should ideally solve a single issue or implement a single feature.
* Never push secrets or API keys to the repository. Use environment variables.
