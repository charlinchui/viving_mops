/**
 * Basic test to verify testing framework is working
 */

describe('Basic Test Suite', () => {
  test('should pass a simple test', () => {
    expect(1 + 1).toBe(2);
  });

  test('should handle string operations', () => {
    const greeting = 'Hello, Viving Mops!';
    expect(greeting).toContain('Viving Mops');
    expect(greeting.length).toBeGreaterThan(10);
  });

  test('should handle array operations', () => {
    const features = ['Broken Pipelines', 'Spaghetti Code', 'Missing Tests'];
    expect(features).toHaveLength(3);
    expect(features).toContain('Broken Pipelines');
    expect(features).toContain('Spaghetti Code');
    expect(features).toContain('Missing Tests');
  });

  test('should handle object operations', () => {
    const mockPageData = {
      title: 'Viving Mops',
      description: 'Cleaning Up Vibe-Coded Chaos',
      features: ['Broken Pipelines', 'Spaghetti Code', 'Missing Tests']
    };

    expect(mockPageData.title).toBe('Viving Mops');
    expect(mockPageData.description).toContain('Chaos');
    expect(mockPageData.features).toHaveLength(3);
  });

  test('should handle async operations', async () => {
    const mockAsyncFunction = async () => {
      return new Promise(resolve => {
        setTimeout(() => resolve('Viving Mops is ready!'), 100);
      });
    };

    const result = await mockAsyncFunction();
    expect(result).toBe('Viving Mops is ready!');
  });
});
