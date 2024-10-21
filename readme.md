# npm-git-helper

## Git Auto-Commit CLI

**npm-git-helper** is a command-line tool designed to automate common Git operations such as adding files, committing changes, and pushing to a GitHub repository with minimal input. This tool simplifies your workflow, allowing you to focus more on development and less on repetitive version control commands.

### Features

- **Automatic Save & Add**: Stages all changes in your repository automatically.
- **Customizable Commit Messages**: Allows the use of predefined or custom commit messages.
- **Automatic Push to GitHub**: Pushes commits directly to the remote repository without additional commands.
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

- Stage all changes (`git add .`)
- Commit the changes with the provided message (`git commit -m "your message"`)
- Push the changes to the specified branch on GitHub (`git push -u origin your-branch`)

### Configuration

You can configure the tool via a `.git-auto-config.json` file in the root of your repository to set defaults such as commit message prefix or branch.

**Example** `.git-auto-config.json`:

```json
{
  "defaultMessage": "chore: automated commit",
  "branch": "main"
}
```

### Prospective Updates

- **Interactive Mode**: Prompt users for commit messages and changes to be staged.
- **Multi-Branch Support**: Automatically push to multiple branches or trigger pull requests.
- **Customizable Pre-Push Hooks**: Allow for running pre-push scripts such as linting or testing.

### Contributing

Feel free to contribute to this project by submitting issues or pull requests. Check the [CONTRIBUTING.md](link to CONTRIBUTING.md) file for more information.

### License

This project is licensed under the MIT License - see the [LICENSE](link to LICENSE) file for details.

---
