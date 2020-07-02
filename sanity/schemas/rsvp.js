import responses from './responses'

export default {
  name: 'rsvp',
  type: 'object',
  title: 'RSVP',
  fields: [
    {
      name: 'responded',
      type: 'boolean',
      title: 'Responded'
    },
    {
      name: 'date',
      type: 'date',
      title: 'Date'
    },
    responses
  ]
}
