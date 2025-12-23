import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'setting',
  title: 'Setting',
  type: 'document',
  fields: [
    defineField({
      name: 'siteTitle',
      title: 'Site Title',
      type: 'string',
      validation: Rule => Rule.required(),
    }),

    defineField({
      name: 'siteDescription',
      title: 'Site Description',
      type: 'text',
      rows: 4,
      validation: Rule => Rule.required(),
    }),

    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: { hotspot: true },
    }),

    defineField({
      name: 'address',
      title: 'Address',
      type: 'string',
    }),

    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
    }),

    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),

    defineField({
      name: 'socialLinks',
      title: 'Social Media Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'platform',
              title: 'Platform Name',
              type: 'string',
            }),

            defineField({
              name: 'url',
              title: 'URL',
              type: 'url',
            }),

            // ✅ ICON FIELD (react-icons, no preview)
            defineField({
              name: 'icon',
              title: 'Icon',
              type: 'string',
              options: {
                list: [
                  { title: 'Facebook', value: 'FaFacebook' },
                  { title: 'Twitter / X', value: 'FaTwitter' },
                  { title: 'Instagram', value: 'FaInstagram' },
                  { title: 'LinkedIn', value: 'FaLinkedin' },
                  { title: 'YouTube', value: 'FaYoutube' },
                  { title: 'WhatsApp', value: 'FaWhatsapp' },
                  { title: 'TikTok', value: 'FaTiktok' },
                ],
                layout: 'dropdown',
              },
            }),
          ],
        },
      ],
    }),
  ],
})
