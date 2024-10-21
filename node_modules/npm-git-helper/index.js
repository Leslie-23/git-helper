const { program } = require("commander");
const simpleGit = require("simple-git");
const git = simpleGit();

program.version("1.0.0").description("A CLI tool to automate Git operations");

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
      // Stage all changes
      console.log("Staging changes...");
      await git.add("./*");

      // Commit changes with the provided message
      if (!options.message) {
        console.error(
          "Commit message is required. Use -m or --message to specify it."
        );
        process.exit(1);
      }
      console.log(`Committing with message: "${options.message}"`);
      await git.commit(options.message);

      // Switch to a different branch if provided
      if (options.branch) {
        console.log(`Switching to branch: ${options.branch}`);
        await git.checkout(options.branch);
      }

      // Push the changes to the remote repository
      console.log("Pushing to the remote repository...");
      await git.push("origin", options.branch || "HEAD");

      console.log("Changes pushed successfully!");
    } catch (error) {
      console.error("An error occurred:", error.message);
    }
  });

program.parse(process.argv);
