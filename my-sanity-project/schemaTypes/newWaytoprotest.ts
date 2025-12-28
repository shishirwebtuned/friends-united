// schemas/wayCards.js
import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'wayCards',
  title: 'Way Cards',
  type: 'document',
  fields: [
    defineField({
      name: 'oldWay',
      title: 'Old Way Card',
      type: 'object',
      fields: [
        defineField({
          name: 'subHeader',
          title: 'Sub Header',
          type: 'string',
          description: 'Label shown on top of the card (e.g., OLD WAY)',
          validation: Rule => Rule.required(),
        }),
        defineField({
          name: 'header',
          title: 'Header',
          type: 'string',
          description: 'The main heading of the card',
          validation: Rule => Rule.required(),
        }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'array',
          of: [{ type: 'string' }],
          description: 'Array of paragraphs for the old way card',
          validation: Rule => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'newWay',
      title: 'New Way Card',
      type: 'object',
      fields: [
        defineField({
          name: 'subHeader',
          title: 'Sub Header',
          type: 'string',
          description: 'Label shown on top of the card (e.g., NEW WAY)',
          validation: Rule => Rule.required(),
        }),
        defineField({
          name: 'header',
          title: 'Header',
          type: 'string',
          description: 'The main heading of the card',
          validation: Rule => Rule.required(),
        }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'array',
          of: [{ type: 'string' }],
          description: 'Array of paragraphs for the new way card',
          validation: Rule => Rule.required(),
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'oldWay.header',
      subtitle: 'newWay.header',
    },
  },
})
