import { config, fields, collection, singleton } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },

  ui: {
    brand: { name: 'Rodi Digital CMS' },
    navigation: {
      'Content': ['case-studies', 'faqs', 'service-features', 'service-cards'],
      'Structure': ['navigation', 'footer', 'site-settings', 'contact-info'],
      'Components': ['approach-principles', 'technology-cards', 'process-steps'],
    },
  },

  collections: {
    'case-studies': collection({
      label: 'Case Studies',
      slugField: 'title',
      path: 'src/content/case-studies/*',
      format: { contentField: 'challenge' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        subtitle: fields.text({ label: 'Subtitle', multiline: true }),
        description: fields.text({ label: 'Description (for listing)', multiline: true }),
        image: fields.image({
          label: 'Case Study Image',
          directory: 'public/images/cases',
          publicPath: '/images/cases/',
        }),
        challenge: fields.document({
          label: 'The Challenge',
          formatting: true,
          links: true,
        }),
        solution: fields.document({
          label: 'Our Solution',
          formatting: true,
          links: true,
        }),
        keyFeatures: fields.array(
          fields.object({
            title: fields.text({ label: 'Feature Title' }),
            description: fields.text({ label: 'Feature Description', multiline: true }),
          }),
          { label: 'Key Features', itemLabel: props => props.fields.title.value }
        ),
        impact: fields.array(
          fields.object({
            title: fields.text({ label: 'Impact Title' }),
            description: fields.text({ label: 'Impact Description', multiline: true }),
          }),
          { label: 'Results & Impact', itemLabel: props => props.fields.title.value }
        ),
        technologySection: fields.conditional(
          fields.checkbox({ label: 'Include Technology Section?' }),
          {
            true: fields.object({
              title: fields.text({ label: 'Section Title', defaultValue: 'Technology Stack' }),
              content: fields.document({ label: 'Content', formatting: true }),
            }),
            false: fields.empty(),
          }
        ),
        projectLinks: fields.array(
          fields.object({
            text: fields.text({ label: 'Link Text' }),
            href: fields.url({ label: 'URL' }),
            variant: fields.select({
              label: 'Button Style',
              options: [
                { label: 'Default', value: 'default' },
                { label: 'Outline', value: 'outline' },
              ],
              defaultValue: 'outline',
            }),
          }),
          { label: 'Project Links', itemLabel: props => props.fields.text.value }
        ),
        ctaTitle: fields.text({ label: 'CTA Title', defaultValue: 'Ready to Transform Your Business?' }),
        ctaSubtitle: fields.text({ label: 'CTA Subtitle', multiline: true }),
        published: fields.checkbox({ label: 'Published', defaultValue: true }),
        order: fields.number({ label: 'Display Order', defaultValue: 0 }),
      },
    }),

    'faqs': collection({
      label: 'FAQs',
      slugField: 'question',
      path: 'src/content/faqs/*',
      schema: {
        question: fields.slug({ name: { label: 'Question' } }),
        answer: fields.text({ 
          label: 'Answer',
          multiline: true,
        }),
        section: fields.select({
          label: 'Page Section',
          options: [
            { label: 'Home', value: 'home' },
            { label: 'Services', value: 'services' },
            { label: 'Mobile', value: 'mobile' },
            { label: 'Web', value: 'web' },
            { label: 'AI Applications', value: 'ai' },
            { label: 'Approach', value: 'approach' },
            { label: 'Analytics', value: 'analytics' },
            { label: 'Collaboration', value: 'collaboration' },
            { label: 'Cases', value: 'cases' },
            { label: 'Contact', value: 'contact' },
          ],
          defaultValue: 'home',
        }),
        subsection: fields.text({ label: 'Subsection (optional)' }),
        order: fields.number({ label: 'Display Order', defaultValue: 0 }),
        published: fields.checkbox({ label: 'Published', defaultValue: true }),
      },
    }),

    'service-features': collection({
      label: 'Service Features',
      slugField: 'title',
      path: 'src/content/service-features/*',
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        description: fields.document({
          label: 'Description',
          formatting: true,
        }),
        service: fields.select({
          label: 'Service',
          options: [
            { label: 'AI Applications', value: 'ai' },
            { label: 'Mobile Development', value: 'mobile' },
            { label: 'Web Development', value: 'web' },
          ],
          defaultValue: 'ai',
        }),
        category: fields.select({
          label: 'Category',
          options: [
            { label: 'Expertise', value: 'expertise' },
            { label: 'Strength', value: 'strength' },
            { label: 'Technology', value: 'technology' },
            { label: 'Process', value: 'process' },
            { label: 'Application', value: 'application' },
          ],
          defaultValue: 'expertise',
        }),
        order: fields.number({ label: 'Display Order', defaultValue: 0 }),
        published: fields.checkbox({ label: 'Published', defaultValue: true }),
      },
    }),

    'service-cards': collection({
      label: 'Service Cards',
      slugField: 'slug',
      path: 'src/content/service-cards/*',
      schema: {
        slug: fields.slug({ name: { label: 'Slug' } }),
        title: fields.text({ label: 'Title' }),
        description: fields.text({ label: 'Description', multiline: true }),
        href: fields.text({ label: 'Link URL' }),
        image: fields.image({
          label: 'Service Image',
          directory: 'public/images',
          publicPath: '/images/',
        }),
        items: fields.array(
          fields.text({ label: 'Item', multiline: true }),
          { label: 'Service Items (for detailed view)', itemLabel: props => props.value }
        ),
        context: fields.select({
          label: 'Where is this used?',
          options: [
            { label: 'Main Services Page', value: 'main-services' },
            { label: 'Home Page', value: 'home-services' },
            { label: 'Both', value: 'both' },
          ],
          defaultValue: 'both',
        }),
        order: fields.number({ label: 'Display Order', defaultValue: 0 }),
        published: fields.checkbox({ label: 'Published', defaultValue: true }),
      },
    }),

    'approach-principles': collection({
      label: 'Approach Principles',
      slugField: 'title',
      path: 'src/content/approach-principles/*',
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        description: fields.text({ label: 'Description', multiline: true }),
        href: fields.text({ label: 'Link URL' }),
        image: fields.image({
          label: 'Principle Image',
          directory: 'public/images',
          publicPath: '/images/',
        }),
        order: fields.number({ label: 'Display Order', defaultValue: 0 }),
        published: fields.checkbox({ label: 'Published', defaultValue: true }),
      },
    }),

    'technology-cards': collection({
      label: 'Technology Cards',
      slugField: 'title',
      path: 'src/content/technology-cards/*',
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        description: fields.document({ label: 'Description', formatting: true }),
        service: fields.select({
          label: 'Service',
          options: [
            { label: 'Mobile', value: 'mobile' },
            { label: 'Web', value: 'web' },
            { label: 'AI', value: 'ai' },
          ],
          defaultValue: 'mobile',
        }),
        order: fields.number({ label: 'Display Order', defaultValue: 0 }),
        published: fields.checkbox({ label: 'Published', defaultValue: true }),
      },
    }),

    'process-steps': collection({
      label: 'Process Steps',
      slugField: 'title',
      path: 'src/content/process-steps/*',
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        description: fields.document({ label: 'Description', formatting: true }),
        service: fields.select({
          label: 'Service',
          options: [
            { label: 'Web', value: 'web' },
            { label: 'General', value: 'general' },
          ],
          defaultValue: 'general',
        }),
        order: fields.number({ label: 'Display Order', defaultValue: 0 }),
        published: fields.checkbox({ label: 'Published', defaultValue: true }),
      },
    }),
  },

  singletons: {
    'site-settings': singleton({
      label: 'Site Settings',
      path: 'src/content/site-settings',
      schema: {
        siteName: fields.text({ label: 'Site Name', defaultValue: 'Rodi Digital' }),
        siteDescription: fields.text({ label: 'Default Meta Description', multiline: true }),
        siteUrl: fields.url({ label: 'Site URL' }),
        defaultMetaImage: fields.image({
          label: 'Default Meta Image',
          directory: 'public/images',
          publicPath: '/images/',
        }),
        companyName: fields.text({ label: 'Company Name', defaultValue: 'Rodi Digital' }),
        companyDescription: fields.document({ label: 'Company Description (footer)' }),
        vatNumber: fields.text({ label: 'VAT Number' }),
        gtmId: fields.text({ label: 'Google Tag Manager ID (optional)' }),
        analyticsEnabled: fields.checkbox({ label: 'Analytics Enabled', defaultValue: true }),
      },
    }),

    'navigation': singleton({
      label: 'Navigation',
      path: 'src/content/navigation',
      schema: {
        logoAlt: fields.text({ label: 'Logo Alt Text' }),
        mainNavigation: fields.array(
          fields.object({
            name: fields.text({ label: 'Nav Item Name' }),
            href: fields.text({ label: 'URL' }),
            children: fields.array(
              fields.object({
                name: fields.text({ label: 'Child Item Name' }),
                href: fields.text({ label: 'URL' }),
              }),
              { label: 'Dropdown Items', itemLabel: props => props.fields.name.value }
            ),
          }),
          { label: 'Main Navigation Items', itemLabel: props => props.fields.name.value }
        ),
        ctaButton: fields.object({
          text: fields.text({ label: 'CTA Button Text', defaultValue: "Let's Chat" }),
          href: fields.text({ label: 'CTA Button URL', defaultValue: '/contact' }),
        }),
      },
    }),

    'footer': singleton({
      label: 'Footer',
      path: 'src/content/footer',
      schema: {
        sections: fields.array(
          fields.object({
            title: fields.text({ label: 'Section Title' }),
            links: fields.array(
              fields.object({
                label: fields.text({ label: 'Link Label' }),
                href: fields.text({ label: 'URL' }),
              }),
              { label: 'Links', itemLabel: props => props.fields.label.value }
            ),
          }),
          { label: 'Footer Sections', itemLabel: props => props.fields.title.value }
        ),
        companyAddress: fields.object({
          street: fields.text({ label: 'Street Address' }),
          postalCode: fields.text({ label: 'Postal Code' }),
          city: fields.text({ label: 'City' }),
          country: fields.text({ label: 'Country' }),
        }),
        copyright: fields.text({ label: 'Copyright Text', defaultValue: '© 2024 Rodi Digital. Built with you.' }),
        ctaButton: fields.object({
          text: fields.text({ label: 'CTA Button Text', defaultValue: "Let's Talk" }),
          href: fields.text({ label: 'CTA Button URL', defaultValue: '/contact' }),
        }),
      },
    }),

    'contact-info': singleton({
      label: 'Contact Information',
      path: 'src/content/contact-info',
      schema: {
        email: fields.text({ label: 'Contact Email' }),
        phone: fields.text({ label: 'Phone Number (optional)' }),
        address: fields.object({
          street: fields.text({ label: 'Street Address' }),
          postalCode: fields.text({ label: 'Postal Code' }),
          city: fields.text({ label: 'City' }),
          country: fields.text({ label: 'Country' }),
        }),
        officeHours: fields.text({ label: 'Office Hours (optional)', multiline: true }),
        mapEmbedUrl: fields.url({ label: 'Google Maps Embed URL (optional)' }),
        calComUrl: fields.url({ label: 'Cal.com Embed URL' }),
      },
    }),
  },
});
