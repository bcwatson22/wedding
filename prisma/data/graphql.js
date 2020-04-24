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
