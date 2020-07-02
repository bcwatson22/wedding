import { RiUserLine } from 'react-icons/ri'

export default {
  name: 'response',
  type: 'object',
  title: 'Response',
  icon: RiUserLine,
  fields: [
    {
      name: 'name',
      type: 'string',
      title: `Guest's name`,
      validation: Rule => Rule.required().error('Each guest needs a name')
    },
    {
      name: 'attending',
      type: 'boolean',
      title: 'Attending'
    },
    {
      name: 'comments',
      type: 'string',
      title: 'Comments'
    },
    {
      name: 'dietary',
      type: 'string',
      title: 'Dietary'
    }
  ]
}
