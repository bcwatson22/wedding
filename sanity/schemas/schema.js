// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

import personal from './personal'
import contact from './contact'
import rsvp from './rsvp'
import response from './response'
import responses from './responses'

import { RiFileList3Line } from 'react-icons/ri'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    {
      name: 'guest',
      type: 'document',
      title: 'Guest',
      icon: RiFileList3Line,
      fields: [
        {
          name: 'nicknames',
          type: 'string',
          title: 'Nicknames',
          validation: Rule => Rule.required().error('Give them a personalised nickname, their real names will be listed in the RSVP later')
        },
        {
          name: 'personal',
          type: 'personal',
          title: 'Personal'
        },
        {
          name: 'contact',
          type: 'contact',
          title: 'Contact'
        },
        {
          name: 'rsvp',
          type: 'rsvp',
          title: 'RSVP'
        }
      ]
    },
    personal,
    contact,
    rsvp,
    response,
    responses
  ])
})
