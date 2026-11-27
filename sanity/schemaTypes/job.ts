import {defineField, defineType} from 'sanity'

export const jobType = defineType({
  name: 'jobs',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'company',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'companyLogo',
      type: 'image',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'location',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'pdf',
      title: 'PDF document',
      type: 'file',
      options: {
        accept: 'application/pdf',
      },
    }),
    defineField({
      name: 'link',
      type: 'url',
      validation: (rule) => rule.required().uri({scheme: ['http', 'https']}),
    }),
    defineField({
      name: 'employmentType',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          {title: 'Full time', value: 'full-time'},
          {title: 'Part time', value: 'part-time'},
        ],
        layout: 'radio',
      },
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      employmentType: 'employmentType',
    },
    prepare({title, employmentType}) {
      const typeLabel =
        employmentType === 'full-time'
          ? 'Full time'
          : employmentType === 'part-time'
            ? 'Part time'
            : undefined

      return {title, subtitle: typeLabel}
    },
  },
})
