export default {
  name: 'personal',
  type: 'object',
  title: 'Personal',
  fields: [
    {
      name: 'greeting',
      type: 'string',
      title: 'Greeting'
    },
    {
      name: 'daytimeGuest',
      type: 'boolean',
      title: 'Daytime guest',
      validation: Rule => Rule.required().error(`Need to know if they're day or night guests`)
    },
    {
      name: 'nextDayGuest',
      type: 'boolean',
      title: 'Next day guest',
      validation: Rule => Rule.required().error(`Need to know if they're invited on the Sunday`)
    }
  ]
}
