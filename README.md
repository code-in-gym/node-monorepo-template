# Node.js Monorepo Template

This repository serves as a template for setting up a Node.js monorepo using Yarn workspaces, TypeScript, and common development tools.

## Project Structure

This is a monorepo managed with Yarn workspaces. Packages are located in the `packages/` directory:

- `packages/core`: A sample library package (e.g., utility functions).
- `packages/ui`: A sample UI package demonstrating integration with the `core` package, built using Webpack.

## Toolchain

- **Package Manager:** [Yarn](https://yarnpkg.com/) (v2+) configured to use the standard `node_modules` linker (`nodeLinker: node-modules`). This avoids potential compatibility issues associated with Yarn PnP while still benefiting from Yarn's modern features.
- **TypeScript:** For static typing across all packages.
- **Jest:** For running unit and integration tests.
- **ESLint:** For code linting.
- **Prettier:** For code formatting.
- **Webpack:** Used in the `packages/ui` package. Webpack is chosen here for its robust ecosystem and mature support for bundling code targeting browser environments. It offers extensive configuration options, a vast plugin system, and excellent handling of various asset types (JS, CSS, images, fonts), making it highly suitable for complex frontend applications and browser extensions where fine-grained control over the bundling process is often required.

## Getting Started

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd node-monorepo-template
    ```

2.  **Install dependencies:**
    ```bash
    yarn install
    ```
    This command installs dependencies for all packages in the monorepo.

## Available Scripts

The following scripts can be run from the root directory:

- **Build all packages:**
  ```bash
  yarn build
  ```

- **Lint all packages (TypeScript & ESLint):**
  ```bash
  yarn lint
  ```
  This includes TypeScript type checking (`lint:tsc`) and ESLint checks (`lint:eslint`).

- **Run tests for all packages:**
  ```bash
  yarn test
  ```

You can also run scripts for individual packages by navigating to the package directory (`cd packages/<package-name>`) or using Yarn workspace commands (e.g., `yarn workspace @code-in-gym/core build`).
