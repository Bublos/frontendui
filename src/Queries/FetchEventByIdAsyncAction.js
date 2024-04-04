import { CreateAsyncActionFromQuery } from "@hrbolek/uoisfrontend-shared/src"

const query = `query ($id: UUID!) {
    result: eventById(id: $id) {
        
          __typename
          id
          lastchange
          name
          startdate
          enddate
          eventType {
            id
            name
          }
      }
    }`

export const FetchEventByIdAsyncAction = CreateAsyncActionFromQuery(query)