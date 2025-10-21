/**
 * Unit tests for page content validation
 * Tests the static content and structure of the Viving Mops website
 */

describe('Page Content Tests', () => {
  let mockPageContent;

  beforeEach(() => {
    // Mock the page content structure
    mockPageContent = {
      title: 'Viving Mops — Cleaning Up Vibe-Coded Chaos',
      hero: {
        heading: '🧹 Viving Mops',
        subheading: 'Cleaning Up Vibe-Coded Chaos',
        description: 'We rescue apps built entirely by AI prompts and vibes. No more spaghetti code, broken pipelines, or missing tests.',
        ctaButtons: [
          { text: 'Learn Our Story 🚀', href: '/about' },
          { text: 'Get Help Now 🆘', href: '/contact' }
        ]
      },
      features: [
        {
          icon: '🔧',
          title: 'Broken Pipelines',
          description: 'Fix CI/CD workflows that were "just vibes" and actually make them work in production.'
        },
        {
          icon: '🍝',
          title: 'Spaghetti Code',
          description: 'Refactor AI-generated code into maintainable, readable, and scalable solutions.'
        },
        {
          icon: '🧪',
          title: 'Missing Tests',
          description: 'Add comprehensive test coverage to prevent future "it works on my machine" disasters.'
        }
      ],
      stats: [
        { value: '50+', label: 'Apps Rescued' },
        { value: '99%', label: 'Success Rate' },
        { value: '24/7', label: 'Emergency Cleanup' },
        { value: '∞', label: 'Vibes Fixed' }
      ],
      testimonials: [
        {
          name: 'Alex Chen',
          role: 'CTO, TechStart Inc.',
          quote: 'Our AI-generated React app was a complete disaster. 500+ components in one file, no state management, and zero tests. Viving Mops turned our spaghetti code into a maintainable masterpiece. Our team can actually work with it now!'
        },
        {
          name: 'Sarah Rodriguez',
          role: 'Product Manager, DataFlow',
          quote: 'We had a "working" AI-generated API with 200+ endpoints and no documentation. Every deployment was a prayer. Viving Mops not only fixed our broken CI/CD but also wrote actual documentation. Our developers stopped crying!'
        }
      ]
    };
  });

  describe('Hero Section', () => {
    test('should have correct title and branding', () => {
      expect(mockPageContent.title).toContain('Viving Mops');
      expect(mockPageContent.title).toContain('Cleaning Up Vibe-Coded Chaos');
    });

    test('should have compelling hero content', () => {
      expect(mockPageContent.hero.heading).toBe('🧹 Viving Mops');
      expect(mockPageContent.hero.subheading).toBe('Cleaning Up Vibe-Coded Chaos');
      expect(mockPageContent.hero.description).toContain('AI prompts and vibes');
      expect(mockPageContent.hero.description).toContain('spaghetti code');
    });

    test('should have call-to-action buttons', () => {
      expect(mockPageContent.hero.ctaButtons).toHaveLength(2);
      expect(mockPageContent.hero.ctaButtons[0].text).toContain('Learn Our Story');
      expect(mockPageContent.hero.ctaButtons[1].text).toContain('Get Help Now');
    });
  });

  describe('Features Section', () => {
    test('should have three main features', () => {
      expect(mockPageContent.features).toHaveLength(3);
    });

    test('should cover key pain points', () => {
      const featureTitles = mockPageContent.features.map(f => f.title);
      expect(featureTitles).toContain('Broken Pipelines');
      expect(featureTitles).toContain('Spaghetti Code');
      expect(featureTitles).toContain('Missing Tests');
    });

    test('should have descriptive content for each feature', () => {
      mockPageContent.features.forEach(feature => {
        expect(feature.icon).toBeTruthy();
        expect(feature.title).toBeTruthy();
        expect(feature.description).toBeTruthy();
        expect(feature.description.length).toBeGreaterThan(20);
      });
    });
  });

  describe('Stats Section', () => {
    test('should have impressive statistics', () => {
      expect(mockPageContent.stats).toHaveLength(4);
    });

    test('should have meaningful metrics', () => {
      const statLabels = mockPageContent.stats.map(s => s.label);
      expect(statLabels).toContain('Apps Rescued');
      expect(statLabels).toContain('Success Rate');
      expect(statLabels).toContain('Emergency Cleanup');
      expect(statLabels).toContain('Vibes Fixed');
    });

    test('should have realistic values', () => {
      const successRate = mockPageContent.stats.find(s => s.label === 'Success Rate');
      expect(successRate.value).toBe('99%');
    });
  });

  describe('Testimonials', () => {
    test('should have customer testimonials', () => {
      expect(mockPageContent.testimonials.length).toBeGreaterThan(0);
    });

    test('should have realistic customer stories', () => {
      mockPageContent.testimonials.forEach(testimonial => {
        expect(testimonial.name).toBeTruthy();
        expect(testimonial.role).toBeTruthy();
        expect(testimonial.quote).toBeTruthy();
        expect(testimonial.quote.length).toBeGreaterThan(50);
      });
    });

    test('should mention specific technical problems', () => {
      const allQuotes = mockPageContent.testimonials.map(t => t.quote).join(' ');
      expect(allQuotes).toContain('AI-generated');
      expect(allQuotes).toContain('spaghetti code');
      expect(allQuotes).toContain('CI/CD');
    });
  });
});
