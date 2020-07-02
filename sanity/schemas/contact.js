export default {
  name: 'contact',
  type: 'object',
  title: 'Contact',
  validation: Rule => Rule.required().error('The guests need either an address or an email'),
  fields: [
    {
      name: 'address',
      type: 'string',
      title: 'Address'
    },
    {
      name: 'email',
      type: 'string',
      title: 'Email'
    }
  ]
}
