const createGuestMutation = gql`
  mutation createGuest($data: GuestCreateInput!) {
    createGuest(
      data: $data
    ) {
      id
      shortId
      personal {
        greeting
        nicknames
      }
      contact {
        address
        email
      }
      rsvp {
        responded
        date
        responses {
          name
          attending
          dietary
          comments
        }
      }
    }
  }
`

const createGuestMutationVariables = `
  {
    "data": {
      "personal": {
        "create": {
          "nicknames": "Tys and Sarah"
        }
      },
      "contact": {
        "create": {
          "address": "26 Hardman Street, Failsworth, M35 0BB",
          "email": "jaketysome@gmail.com"
        }
      },
      "rsvp": {
        "create": {
          "responded": false,
          "responses": {
            "create": [
              {
                "name": "Jake"
              },
              {
                "name": "Sarah"
              }
            ]
          }
        }
      }
    }
  }
`

const updateGuestRsvpMutation = gql`
  mutation updateGuestRsvp($id: Int!, $date: String, $responded: Boolean!, $responses: GuestResponseUpdateManyInput!) {
    updateGuestRsvp(
      where: { id: $id },
      data: { date: $date, responded: $responded, responses: $responses }
    ) {
    	responded,
      date
    }
  }
`

const updateGuestRsvpMutationVariables = `
  {
    {
      "id": 1,
      "date": "2020-04-24",
      "responded": true,
      "responses": {
        "updateMany": [
        	{
            "where": {"id": 1},
            "data": {
              "name": "Archie",
              "attending": true,
              "comments": "I won't let you down hombre!",
              "dietary": ""
            }
      		},
      		{
            "where": {"id": 2},
            "data": {
              "name": "Mya",
              "attending": false,
              "comments": "Sorry me howd"
            }
          }
        ]
      }
    }
  }
`

const getAllGuestsQuery = gql`
  query guests {
    guests {
      id
      personal {
        greeting
        nicknames
      }
      contact {
        address
        email
      }
      rsvp {
        responded
        date
        responses {
          name
          attending
          dietary
          comments
        }
      }
    }
  }
`
