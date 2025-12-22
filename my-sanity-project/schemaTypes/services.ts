import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'services',
  title: 'Services',
  type: 'document',
  fields: [
    // Basic Fields
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
    }),

    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {hotspot: true},
    }),

    defineField({
      name: 'link',
      title: 'Link',
      type: 'string',
    }),

    // Demands (Array of strings)
    defineField({
      name: 'demands',
      title: 'Key Demands',
      type: 'array',
      of: [{type: 'string'}],
    }),

    // Extra Demand Text
    defineField({
      name: 'demandText',
      title: 'Demand Extra Text',
      type: 'text',
      rows: 3,
    }),

    // References
    defineField({
      name: 'references',
      title: 'References',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'label',
              title: 'Label',
              type: 'string',
            }),
            defineField({
              name: 'link',
              title: 'Link',
              type: 'url',
            }),
          ],
        },
      ],
    }),

    // DETAILS OBJECT
    defineField({
      name: 'details',
      title: 'Details',
      type: 'object',
      fields: [
        // Intro text
        defineField({
          name: 'intro',
          title: 'Introduction',
          type: 'text',
          rows: 4,
        }),

        // SECTIONS ARRAY
        defineField({
          name: 'sections',
          title: 'Sections',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'key',
                  title: 'Unique Key',
                  type: 'string',
                  description: 'Used as a reference in frontend (e.g., "impact", "proposal")',
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: 'title',
                  title: 'Title',
                  type: 'string',
                }),
                defineField({
                  name: 'text',
                  title: 'Text',
                  type: 'text',
                  rows: 3,
                }),
                defineField({
                  name: 'list',
                  title: 'List Items',
                  type: 'array',
                  of: [{type: 'string'}],
                }),
              ],
            },
          ],
        }),
      ],
    }),
  ],
})
