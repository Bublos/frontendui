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

          subEvents {
            id
            name
            startdate
            enddate
          }
      }
    }`

export const FetchSubEventsByIdAsyncAction = CreateAsyncActionFromQuery(query)