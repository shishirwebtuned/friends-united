import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'becomeFriend',
  title: 'Become a Friend',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'pointsTitle',
      title: 'Points Title',
      type: 'string',
    }),
    defineField({
      name: 'points',
      title: 'Points',
      type: 'array',
      of: [{type: 'string'}],
    }),
  ],
})
