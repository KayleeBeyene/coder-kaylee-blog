# Project Context: coderKaylee Blog

This document provides a high-level overview of the coderKaylee blog project, including its purpose, technical stack, and development conventions.

## 1. Project Overview

- **Project Type**: Personal Blog / Learning Journal
- **Goal**: To document the journey of learning to code, track progress, solidify understanding, and connect with a community of learners and developers.
- **Core Message**: "Learning to code is a challenging but rewarding journey of continuous growth. You can do it!"

## 2. Target Audience & Voice

- **Primary Audience**: Beginner and intermediate coders, and individuals considering a career change into tech.
- **Voice**: Authentic, encouraging, relatable, and transparent—like a helpful friend sharing their honest progress.

## 3. Technical Stack

- **Framework**: Next.js 16
- **Language**: TypeScript (Strict Mode)
- **Styling**: Tailwind CSS
- **UI Components**: shadcn-ui
- **Linting**: ESLint
- **Package Manager**: npm

## 4. Project Structure

- `app/`: Contains the application's routes, following the Next.js App Router structure.
- `lib/`: For shared utility functions.
- `public/`: Stores static assets like images and icons.
- `AGENTS.md`: Contains specific instructions for AI agents working in this repository.

## 5. Development Scripts

- **`npm run dev`**: Starts the development server on `http://localhost:3000`.
- **`npm run build`**: Creates a production-ready build of the application.
- **`npm run lint`**: Lints the codebase using ESLint to check for errors and style issues.

## 6. Code Style & Conventions

- **Formatting**: Code is formatted with Prettier using default settings.
- **Imports**: Use path aliases (`@/*`) for cleaner, absolute imports from the root directory.
- **Naming**: Follow standard React/TypeScript conventions (e.g., `PascalCase` for components, `camelCase` for variables/functions).
- **Types**: Use TypeScript for all props, state, and function signatures. Avoid using `any`.
- **Error Handling**: Use `try/catch` blocks for asynchronous operations.

## Security Guidelines

- Agents have restricted permissions by default
- Sensitive operations require explicit approval
- No direct file system modifications without validation
- Build commands limited to safe operations

## Development Workflow

1. **Planning:** Create detailed task plans for complex work
2. **Implementation:** Execute one step at a time with validation
3. **Review:** Code review and security checks
4. **Testing:** Automated testing and build validation
5. **Documentation:** Update docs and context files

## Quality Gates

- TypeScript compilation passes
- Code review completed
- Build process succeeds
- Tests pass (if available)
- Documentation updated
