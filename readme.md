# npm-git-helper

[![npm version](https://img.shields.io/npm/v/npm-git-helper.svg)](https://www.npmjs.com/package/npm-git-helper)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

## Git Automation CLI Tool

**npm-git-helper** is a command-line tool designed to automate common Git operations such as adding files, committing changes, and pushing to a GitHub repository with minimal input. This tool simplifies your workflow, allowing you to focus more on development and less on repetitive version control commands.

### Features

- **Automatic Save & Add**: Stages all changes in your repository automatically.
- **Customizable Commit Messages**: Allows the use of predefined or custom commit messages.
- **Automatic Push to GitHub**: Pushes commits directly to the remote repository without additional commands.
- **Smart Branch Handling**: Automatically creates branches if they don't exist and sets upstream tracking.
- **Validation Checks**: Ensures you're in a git repository and have changes before committing.
- **Streamlined Workflow**: Run a single command to automate your Git process from start to finish.

### Installation

You can install the CLI globally using npm:

```bash
npm install -g npm-git-helper
```

### Usage

Once installed, the CLI is available as `git-helper`. Here's how to use it:

#### Basic Workflow

1. Navigate to your local Git repository.
2. Run the CLI command to automatically stage, commit, and push changes:

```bash
git-helper push -m "Your commit message" -b your-branch
```

**Example**:

```bash
git-helper push -m "Initial commit" -b main
```

The tool will:

- Check if you're in a git repository
- Switch to the specified branch (or create it if it doesn't exist)
- Stage all changes (`git add .`)
- Commit the changes with the provided message (`git commit -m "your message"`)
- Push the changes to the specified branch on GitHub with upstream tracking (`git push -u origin your-branch`)

#### Additional Commands

Check the version:
```bash
git-helper --version
```

Get help:
```bash
git-helper --help
```

### Requirements

- Node.js >= 14.0.0
- Git installed and configured
- An initialized git repository

### How It Works

1. **Validation**: Checks if you're in a valid git repository
2. **Branch Management**: Switches to or creates the target branch before making changes
3. **Change Detection**: Verifies there are changes to commit
4. **Staging**: Stages all modified and new files
5. **Committing**: Creates a commit with your message
6. **Pushing**: Pushes to remote with automatic upstream tracking

### Prospective Updates

- **Interactive Mode**: Prompt users for commit messages and changes to be staged
- **Configuration File Support**: Add support for `.git-helper-config.json` for default settings
- **Selective Staging**: Choose specific files to stage instead of staging all changes
- **Multi-Branch Support**: Push to multiple branches or trigger pull requests
- **Pre-Push Hooks**: Run pre-push scripts such as linting or testing

### Contributing

Contributions are welcome! Please feel free to submit issues or pull requests on [GitHub](https://github.com/Leslie-23/git-helper).

### License

This project is licensed under the ISC License - see the [LICENSE.md](LICENSE.md) file for details.

### Author

**Leslie Paul Ajayi**

### Links

- [npm package](https://www.npmjs.com/package/npm-git-helper)
- [GitHub repository](https://github.com/Leslie-23/git-helper)
- [Report issues](https://github.com/Leslie-23/git-helper/issues)

---
