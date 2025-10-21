// Jest setup file for testing environment

// Mock DOM environment with basic objects
global.window = {
  location: { href: 'http://localhost' },
  document: {
    getElementById: jest.fn(),
    querySelectorAll: jest.fn(() => []),
    createElement: jest.fn(() => ({ classList: { toggle: jest.fn() } }))
  },
  navigator: { userAgent: 'test' }
};

global.document = global.window.document;

// Mock console methods to reduce noise in tests
global.console = {
  ...console,
  log: jest.fn(),
  debug: jest.fn(),
  info: jest.fn(),
  warn: jest.fn(),
  error: jest.fn()
};
