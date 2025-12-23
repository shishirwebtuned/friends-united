import {defineType ,defineField} from 'sanity'
import IconSelect from '../IconSelect'

export default defineType({
    name: 'realWinners',
    title: 'Real Winners',
    type: 'document',
    fields: [
        defineField({
            name: 'sectionTitle',
            title: 'Section Title',
            type: 'string',
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'sectionDescription',
            title: 'Section Description',
            type: 'string',
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'winnersList',
            title: 'Winners List',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            name: 'icon',
                            title: 'Icon',
                            type: 'string',
                            validation: Rule => Rule.required(),
                            components: {
                                input: IconSelect
                            }
                        },
                        {
                            name: 'title',
                            title: 'Title',
                            type: 'string',
                            validation: Rule => Rule.required(),
                        },
                        {
                            name: 'description',
                            title: 'Description',
                            type: 'string',
                            validation: Rule => Rule.required().max(500),
                        },
                    ],
                    preview: {
                        select: {
                            title: 'title',
                            subtitle: 'description',
                        },
                    },
                },
            ],
            validation: Rule => Rule.required(),
        }),
    ],
})
      

