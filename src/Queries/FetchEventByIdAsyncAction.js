import { CreateAsyncActionFromQuery } from "@hrbolek/uoisfrontend-shared/src"

const query = `query ($id: UUID!) {
    result: eventById(id: $id) {
        
          __typename
          id
          name
          place

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