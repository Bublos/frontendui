import { CreateAsyncActionFromQuery } from "@hrbolek/uoisfrontend-shared/src"

const query = `query ($id: UUID!) {
    result: eventById(id: $id) {
        
          __typename
          id
          name
          place
          placeId
          groups { id name }

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
      }
    }`

export const FetchEventByIdAsyncAction = CreateAsyncActionFromQuery(query)