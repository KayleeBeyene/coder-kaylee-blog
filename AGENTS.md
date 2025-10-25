## Agent Instructions

This document outlines the conventions and commands for AI agents working in this repository.

### Build, Lint, and Test

- **Build:** `npm run build`
- **Lint:** `npm run lint`
- **Test:** There are no tests in this project.

### Code Style

- **Framework:** Next.js and React.
- **Language:** TypeScript with strict mode.
- **Formatting:** Use Prettier with default settings. Run `npx prettier --write .` to format the code.
- **Imports:** Use path aliases `@/*` for imports from the root directory.
- **Naming:** Follow standard React/TypeScript conventions (e.g., PascalCase for components, camelCase for variables and functions).
- **Error Handling:** Use try/catch blocks for async operations and handle errors gracefully.
- **Types:** Use TypeScript types for all props, state, and function signatures. Avoid using `any`.
