#!/usr/bin/env node

/**
 * Test runner script for Viving Mops
 * Runs all tests and provides a summary
 */

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

const colors = {
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  reset: '\x1b[0m',
  bold: '\x1b[1m'
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function runCommand(command, description) {
  log(`\n🧪 ${description}...`, 'blue');
  try {
    const output = execSync(command, { encoding: 'utf8', stdio: 'pipe' });
    log(`✅ ${description} completed successfully`, 'green');
    return { success: true, output };
  } catch (error) {
    log(`❌ ${description} failed`, 'red');
    log(error.stdout || error.message, 'red');
    return { success: false, error: error.message };
  }
}

function checkBuildOutput() {
  const distPath = path.join(process.cwd(), 'dist');
  
  if (!fs.existsSync(distPath)) {
    log('⚠️  Build output not found. Run "npm run build" first.', 'yellow');
    return false;
  }
  
  const files = fs.readdirSync(distPath);
  const hasIndexHtml = files.includes('index.html');
  const hasAstroDir = files.some(file => file.startsWith('_astro'));
  
  if (hasIndexHtml && hasAstroDir) {
    log('✅ Build output looks good', 'green');
    return true;
  } else {
    log('⚠️  Build output may be incomplete', 'yellow');
    return false;
  }
}

async function main() {
  log('🧹 Viving Mops Test Suite', 'bold');
  log('========================', 'bold');
  
  const results = {
    unit: null,
    e2e: null,
    build: null
  };
  
  // Check if build exists
  log('\n📦 Checking build output...', 'blue');
  results.build = checkBuildOutput();
  
  // Run unit tests
  results.unit = runCommand('npm run test', 'Unit Tests');
  
  // Run e2e tests (only if build exists)
  if (results.build) {
    results.e2e = runCommand('npm run test:e2e', 'End-to-End Tests');
  } else {
    log('⏭️  Skipping E2E tests (no build output)', 'yellow');
    results.e2e = { success: false, error: 'No build output' };
  }
  
  // Summary
  log('\n📊 Test Summary', 'bold');
  log('===============', 'bold');
  
  const unitStatus = results.unit?.success ? '✅ PASS' : '❌ FAIL';
  const e2eStatus = results.e2e?.success ? '✅ PASS' : '❌ FAIL';
  const buildStatus = results.build ? '✅ PASS' : '❌ FAIL';
  
  log(`Unit Tests: ${unitStatus}`, results.unit?.success ? 'green' : 'red');
  log(`E2E Tests:  ${e2eStatus}`, results.e2e?.success ? 'green' : 'red');
  log(`Build:      ${buildStatus}`, results.build ? 'green' : 'red');
  
  const allPassed = results.unit?.success && results.e2e?.success && results.build;
  
  if (allPassed) {
    log('\n🎉 All tests passed! Viving Mops is squeaky clean!', 'green');
    process.exit(0);
  } else {
    log('\n🧹 Some tests failed. Time to clean up the code!', 'red');
    process.exit(1);
  }
}

main().catch(error => {
  log(`\n💥 Test runner crashed: ${error.message}`, 'red');
  process.exit(1);
});
