import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'bannerData',
  title: 'Banner Data',
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
  ],
})
