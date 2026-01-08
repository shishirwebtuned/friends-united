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
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {hotspot: true},
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'link',
      title: 'Link (URL slug)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    // Demands (Array of strings)
    defineField({
      name: 'demands',
      title: 'Key Demands',
      type: 'array',
      of: [{type: 'string'}],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'demandTitle',
      title: 'Demand Title',
      type: 'text',
      rows: 3,
    }),
    // Extra Demand Text (optional)
    defineField({
      name: 'demandText',
      title: 'Demand Extra Text',
      type: 'text',
      rows: 3,
    }),

    // References (Array of objects with label and link)
    defineField({
      name: 'references',
      title: 'References',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'label',
              title: 'Label',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'link',
              title: 'Link URL',
              type: 'url',
              validation: (Rule) => Rule.required(),
            },
          ],
          preview: {
            select: {
              title: 'label',
              subtitle: 'link',
            },
          },
        },
      ],
    }),

    // Details Object
    defineField({
      name: 'details',
      title: 'Details',
      type: 'object',
      fields: [
        {
          name: 'intro',
          title: 'Introduction',
          type: 'text',
          rows: 4,
        },
        {
          name: 'sections',
          title: 'Sections',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'key',
                  title: 'Key (unique identifier)',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
                },
                {
                  name: 'title',
                  title: 'Section Title',
                  type: 'string',
                },
                {
                  name: 'text',
                  title: 'Text Content',
                  type: 'text',
                  rows: 4,
                },
                {
                  name: 'list',
                  title: 'List Items',
                  type: 'array',
                  of: [{type: 'string'}],
                },
              ],
              preview: {
                select: {
                  title: 'title',
                  subtitle: 'key',
                  text: 'text',
                },
                prepare({title, subtitle, text}) {
                  return {
                    title: title || subtitle || 'Section',
                    subtitle: text ? text.substring(0, 60) + '...' : subtitle,
                  }
                },
              },
            },
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
      media: 'image',
    },
  },
})
