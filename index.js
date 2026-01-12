#!/usr/bin/env node
// the line above is the shebang line to make this entry point code accessible

const { program } = require("commander");
const simpleGit = require("simple-git");
const git = simpleGit();

// console.log("Arguments received:", process.argv);
// The above line is used for debugging purposes;

program.version("2.1.0").description("A CLI tool to automate Git operations");

// Command for saving, committing, and pushing changes
program
  .command("push")
  .description("Stage changes, commit, and push to a remote branch")
  .option("-m, --message <commitMessage>", "Commit message")
  .option(
    "-b, --branch <branchName>",
    "Branch name to push to (default: current branch)"
  )
  .action(async (options) => {
    try {
      // Validate commit message
      if (!options.message) {
        console.error(
          "Error: Commit message is required. Use -m or --message to specify it."
        );
        process.exit(1);
      }

      // Check if we're in a git repository
      const isRepo = await git.checkIsRepo();
      if (!isRepo) {
        console.error("Error: Not a git repository. Please run 'git init' first.");
        process.exit(1);
      }

      // Get current branch
      const status = await git.status();
      const currentBranch = status.current;

      // Switch to a different branch if provided (before committing)
      if (options.branch && options.branch !== currentBranch) {
        console.log(`Switching to branch: ${options.branch}`);
        try {
          await git.checkout(options.branch);
        } catch (checkoutError) {
          // Try to create the branch if it doesn't exist
          console.log(`Branch '${options.branch}' doesn't exist. Creating it...`);
          await git.checkoutLocalBranch(options.branch);
        }
      }

      // Check if there are changes to commit
      const statusAfterCheckout = await git.status();
      if (statusAfterCheckout.isClean()) {
        console.log("No changes to commit. Working directory is clean.");
        return;
      }

      // Stage all changes
      console.log("Staging changes...");
      await git.add("./*");

      // Commit changes with the provided message
      console.log(`Committing with message: "${options.message}"`);
      await git.commit(options.message);

      // Push the changes to the remote repository
      const targetBranch = options.branch || currentBranch;
      console.log(`Pushing to the remote repository (${targetBranch})...`);
      await git.push("origin", targetBranch, ["--set-upstream"]);

      console.log("Changes pushed successfully!");
    } catch (error) {
      console.error("An error occurred:", error.message);
      process.exit(1);
    }
  });

program.parse(process.argv);
