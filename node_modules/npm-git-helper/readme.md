# Git Auto-Commit CLI

**Git Auto-Commit CLI** is a command-line tool designed to automate common git operations such as adding files, committing changes, and pushing to a GitHub repository with minimal input. This tool simplifies your workflow, allowing you to focus more on development and less on repetitive version control commands.

## Features

- **Automatic Save & Add**: Stages all changes in your repository automatically.
- **Customizable Commit Messages**: Allows the use of predefined or custom commit messages.
- **Automatic Push to GitHub**: Pushes commits directly to the remote repository without additional commands.
- **Streamlined Workflow**: Run a single command to automate your git process from start to finish.

## Installation

You can install the CLI globally using npm:

```bash
npm install -g git-auto-commit-cli
```

## Usage

Once installed, the CLI is available as `git-auto`. Here's how to use it:

### Basic Workflow

1. Navigate to your local git repository.
2. Run the CLI command to automatically stage, commit, and push changes:

   ```bash
   git-helper push -m "Your commit message" -b your-branch

   ```

   Example:

   ```bash
   git-helper push -m "Your commit message" -b your-branch
   ```

3. The tool will:
   - Stage all changes (`git add .`)
   - Commit the changes with the provided message (`git commit -m "your message"`)
   - Push the changes to the current branch on GitHub (`git push -u origin your-branch`)

### Options

- **Custom Commit Messages**: If no commit message is provided, the tool will use a default message like `chore: automated commit`.

  Example with no message:

  ```bash
  git-helper push -m "Auto-commit -new updates" -b your-branch

  ```

- **Verbose Mode**: View the process steps as the tool runs:

  ```bash
  git-helper push -m "Your commit message" -b your-branch --verbose

  ```

### Examples

1. Save, commit, and push changes with a specific message:

   ```bash
   git-helper push -m "Fixed issue #123" -b your-branch

   ```

2. Use the default commit message:

   ```bash

   ```

3. Enable verbose logging to see each git command in action:

   ```bash

   ```

## Configuration

You can configure the tool via a `.git-auto-config.json` file in the root of your repository. The configuration allows you to set defaults such as commit message prefix or repository branch.

Example `.git-auto-config.json`:

```json
{
  "defaultMessage": "chore: automated commit",
  "branch": "main"
}
```

## Prospective Updates

### Version 1.1.0 (Upcoming)

- **Interactive Mode**: Prompt users for commit messages and changes to be staged.
- **Multi-Branch Support**: Automatically push to multiple branches or trigger pull requests.
- **Customizable Pre-Push Hooks**: Allow for running pre-push scripts such as linting or testing before pushing changes.

### Version 1.2.0 (Future)

- **Commit Message Templates**: Support for predefined templates based on the type of changes (e.g., `fix`, `feat`, `chore`).
- **GitHub Actions Integration**: Automate pushing commits via GitHub Actions for CI/CD workflows.

## Contributing

Feel free to contribute to this project by submitting issues or pull requests. Check the [CONTRIBUTING.md](CONTRIBUTING.md) file for more information.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE.md) file for details.

---
