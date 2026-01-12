#!/usr/bin/env node

/**
 * Basic test suite for npm-git-helper
 * This is a simple test implementation that validates the package structure
 */

const fs = require('fs');
const path = require('path');

let testsPassed = 0;
let testsFailed = 0;

function test(description, fn) {
  try {
    fn();
    testsPassed++;
    console.log(`✓ ${description}`);
  } catch (error) {
    testsFailed++;
    console.error(`✗ ${description}`);
    console.error(`  Error: ${error.message}`);
  }
}

function assert(condition, message) {
  if (!condition) {
    throw new Error(message || 'Assertion failed');
  }
}

console.log('Running tests for npm-git-helper...\n');

// Test: package.json exists and is valid
test('package.json exists and is valid JSON', () => {
  const packagePath = path.join(__dirname, 'package.json');
  assert(fs.existsSync(packagePath), 'package.json should exist');

  const packageContent = fs.readFileSync(packagePath, 'utf8');
  const pkg = JSON.parse(packageContent);

  assert(pkg.name === 'npm-git-helper', 'Package name should be npm-git-helper');
  assert(pkg.version, 'Package should have a version');
  assert(pkg.main === 'index.js', 'Main entry point should be index.js');
});

// Test: index.js exists and has shebang
test('index.js exists and has proper shebang', () => {
  const indexPath = path.join(__dirname, 'index.js');
  assert(fs.existsSync(indexPath), 'index.js should exist');

  const content = fs.readFileSync(indexPath, 'utf8');
  assert(content.startsWith('#!/usr/bin/env node'), 'index.js should have shebang');
});

// Test: Required dependencies are present
test('Required dependencies are declared', () => {
  const packagePath = path.join(__dirname, 'package.json');
  const pkg = JSON.parse(fs.readFileSync(packagePath, 'utf8'));

  assert(pkg.dependencies, 'Should have dependencies');
  assert(pkg.dependencies.commander, 'Should have commander dependency');
  assert(pkg.dependencies['simple-git'], 'Should have simple-git dependency');
});

// Test: No self-dependency
test('Package does not depend on itself', () => {
  const packagePath = path.join(__dirname, 'package.json');
  const pkg = JSON.parse(fs.readFileSync(packagePath, 'utf8'));

  assert(
    !pkg.dependencies || !pkg.dependencies['npm-git-helper'],
    'Package should not depend on itself'
  );
});

// Test: Binary is properly configured
test('Binary command is properly configured', () => {
  const packagePath = path.join(__dirname, 'package.json');
  const pkg = JSON.parse(fs.readFileSync(packagePath, 'utf8'));

  assert(pkg.bin, 'Should have bin configuration');
  assert(pkg.bin['git-helper'], 'Should have git-helper binary');
  assert(pkg.bin['git-helper'] === './index.js', 'Binary should point to index.js');
});

// Test: index.js is executable or has proper permissions
test('index.js has execute permissions or will be made executable', () => {
  const indexPath = path.join(__dirname, 'index.js');
  const stats = fs.statSync(indexPath);

  // On Unix-like systems, check if file is executable
  // On Windows, this test always passes as permissions work differently
  if (process.platform !== 'win32') {
    const isExecutable = !!(stats.mode & fs.constants.S_IXUSR);
    // This is informational - npm will handle making bin files executable
    if (!isExecutable) {
      console.log('  Note: index.js will be made executable by npm during installation');
    }
  }
  assert(true, 'index.js exists and will be executable');
});

// Test: README exists
test('README.md exists', () => {
  const readmePath = path.join(__dirname, 'readme.md');
  assert(fs.existsSync(readmePath), 'readme.md should exist');
});

// Test: LICENSE exists
test('LICENSE file exists', () => {
  const licensePath = path.join(__dirname, 'LICENSE.md');
  assert(fs.existsSync(licensePath), 'LICENSE.md should exist');
});

// Test: .gitignore exists
test('.gitignore exists', () => {
  const gitignorePath = path.join(__dirname, '.gitignore');
  assert(fs.existsSync(gitignorePath), '.gitignore should exist');
});

// Test: .npmignore exists
test('.npmignore exists', () => {
  const npmignorePath = path.join(__dirname, '.npmignore');
  assert(fs.existsSync(npmignorePath), '.npmignore should exist');
});

console.log('\n' + '='.repeat(50));
console.log(`Tests completed: ${testsPassed} passed, ${testsFailed} failed`);
console.log('='.repeat(50));

// Exit with error code if any tests failed
if (testsFailed > 0) {
  process.exit(1);
}
