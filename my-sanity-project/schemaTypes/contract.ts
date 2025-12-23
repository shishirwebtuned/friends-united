import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'contact',
    title: 'Contact',
    type: 'document',
    fields: [
        defineField({
            name: 'firstName',
            title: 'First Name',
            type: 'string',
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'lastName',
            title: 'Last Name',
            type: 'string',
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'email',
            title: 'Email',
            type: 'string',
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'phoneNumber',
            title: 'Phone Number',
            type: 'string',
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'message',
            title: 'Message',
            type: 'string',
            validation: Rule => Rule.required(),
        }),
    ],
})
