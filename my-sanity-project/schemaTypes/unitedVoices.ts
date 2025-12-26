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
      name: 'description',
      title: 'Description',
      type: 'string',
    }),

    defineField({
      name: 'frontimage',
      title: 'Main Image',
      type: 'image',
      options: {hotspot: true},
      validation: (Rule) =>
        Rule.required().custom((image) => {
          if (!image || !image.asset?._ref) return 'Image is required'
          // Type and size validation will be handled in the asset source or upload step
          return true
        }),
      description: 'Only JPEG/PNG, max 2MB',
    }),
    defineField({
      name: 'backimage',
      title: 'Back Image',
      type: 'image',
      options: {hotspot: true},
      validation: (Rule) =>
        Rule.required().custom((image) => {
          if (!image || !image.asset?._ref) return 'Image is required'
          // Type and size validation will be handled in the asset source or upload step
          return true
        }),
      description: 'Only JPEG/PNG, max 2MB',
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

    defineField({
      name: 'revival',
      title: 'Revival Text',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
        },
        {
          name: 'description',
          title: 'Description',
          type: 'string',
        },
        {
          name: 'pointList',
          title: 'Point List',
          type: 'array',
          of: [{type: 'string'}],
        },
      ],
    }),
  ],
})
