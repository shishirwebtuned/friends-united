import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'unitedVoices',
  title: 'United Voices',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'subTitle',
      title: 'Sub Title',
      type: 'string',
    }),

    defineField({
      name: 'voices',
      title: 'Voices List',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'heading',
              title: 'Heading',
              type: 'string',
            },
            {
              name: 'subHeading',
              title: 'Sub Heading',
              type: 'string',
            },
          ],
        },
      ],
    }),
  ],
})
