import { CreateAsyncActionFromQuery } from "@hrbolek/uoisfrontend-shared/src"

const query = `query ($id: UUID!) {
    result: eventById(id: $id) {
        __typename
        id
        name
        
        startdate
        enddate
        eventType {
          id
          name
        }
        created
        lastchange
       
        masterEvent {
          id
          name
        }

        presences {
          id
          presenceType { id name }
          invitationType { id name }
          user { id name surname email }
          
        }
        
    }
  }`

export const FetchEventPresencesByIdAsyncAction = CreateAsyncActionFromQuery(query)