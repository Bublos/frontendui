import { CreateAsyncActionFromQuery } from "@hrbolek/uoisfrontend-shared/src"

const query = `{
    result: eventTypePage(limit:100){
      __typename
      id
      name
    }
  }`

export const FetchEventTypesAsyncAction = CreateAsyncActionFromQuery(query)